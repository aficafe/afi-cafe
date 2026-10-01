import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { fotosGlobalFair } from "../data/globalCoffeeFair";

const MAX_FOTOS = 15;
const OFFSETS = [-2, -1, 0, 1, 2]; // solo se dibujan 5 fotos a la vez: carga ligera
const mod = (n, m) => ((n % m) + m) % m;
const serif = { fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' };

function Lightbox({ fotos, index, setIndex, onClose }) {
  const startX = useRef(0);
  const n = fotos.length;
  const next = useCallback(() => setIndex((i) => mod(i + 1, n)), [setIndex, n]);
  const prev = useCallback(() => setIndex((i) => mod(i - 1, n)), [setIndex, n]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería ampliada"
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 text-white/80 hover:text-gold transition-colors"
      >
        <X size={28} />
      </button>
      {[
        { fn: prev, label: "Anterior", side: "left-3 md:left-8", Icon: ChevronLeft },
        { fn: next, label: "Siguiente", side: "right-3 md:right-8", Icon: ChevronRight },
      ].map(({ fn, label, side, Icon }) => (
        <button
          key={label}
          onClick={(e) => {
            e.stopPropagation();
            fn();
          }}
          aria-label={label}
          className={`absolute ${side} top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2.5 transition-colors`}
        >
          <Icon size={22} />
        </button>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={fotos[index].src}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const d = startX.current - e.changedTouches[0].clientX;
            if (d > 50) next();
            else if (d < -50) prev();
          }}
        >
          <img
            src={fotos[index].src}
            alt={fotos[index].texto}
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg"
          />
          <p className="text-gold/80 text-xs mt-3">
            {index + 1} / {n}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function FeriaCarousel() {
  const fotos = fotosGlobalFair.slice(0, MAX_FOTOS);
  const n = fotos.length;

  const [pos, setPos] = useState(0); // posición sin límites: el carrusel nunca "rebota"
  const [lightbox, setLightbox] = useState(null);
  const [pausado, setPausado] = useState(false);
  const startX = useRef(0);

  const go = useCallback((d) => setPos((p) => p + d), []);

  // Avance automático suave. Se detiene con el mouse encima, con el lightbox abierto
  // o si la persona prefiere menos movimiento.
  useEffect(() => {
    if (n < 2 || pausado || lightbox !== null) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(1), 4500);
    return () => clearInterval(id);
  }, [n, pausado, lightbox, go]);

  if (n === 0) {
    if (!import.meta.env.DEV) return null;
    return (
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-dashed border-gold/50 p-10 text-center text-sm text-neutral-500 dark:text-white/50">
          <Camera className="mx-auto mb-2 text-gold" />
          Copia las 15 fotos a <code>src/assets/global-coffee-fair/</code> y aparecerán aquí.
        </div>
      </section>
    );
  }

  const actual = mod(pos, n);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-2">
          GALERÍA DE EXPERIENCIA
        </p>
        <h2
          style={serif}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Un café, muchas conversaciones
        </h2>
        <p className="text-neutral-600 dark:text-white/60 mt-3 text-sm leading-relaxed">
          Catas, saludos y mucha gente probando AFI CAFÉ en el stand. Toca una foto para verla
          completa.
        </p>
      </motion.div>

      <div
        className="relative h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden touch-pan-y select-none"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Fotos de The Global Coffee Fair"
        tabIndex={0}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          const d = startX.current - e.clientX;
          if (d > 50) go(1);
          else if (d < -50) go(-1);
        }}
      >
        {OFFSETS.map((off) => {
          const key = pos + off;
          const idx = mod(key, n);
          const activa = off === 0;
          const visible = Math.abs(off) <= 1;
          return (
            <div
              key={key}
              aria-hidden={!activa}
              className="absolute top-0 left-1/2 h-full w-[76%] md:w-[50%] transition-all duration-500 ease-out"
              style={{
                transform: `translateX(calc(-50% + ${off * 106}%)) scale(${activa ? 1 : 0.86})`,
                opacity: activa ? 1 : visible ? 0.4 : 0,
                zIndex: activa ? 2 : 1,
              }}
            >
              <button
                type="button"
                tabIndex={activa ? 0 : -1}
                onClick={() => (activa ? setLightbox(idx) : go(off))}
                aria-label={activa ? `Ampliar foto ${idx + 1} de ${n}` : "Ir a esta foto"}
                className={`block w-full h-full rounded-2xl overflow-hidden border border-gold/40 shadow-[0_12px_40px_rgba(0,0,0,0.25)] ${
                  activa ? "cursor-zoom-in" : "cursor-pointer"
                }`}
              >
                <img
                  src={fotos[idx].src}
                  alt={fotos[idx].texto}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          );
        })}

        {n > 1 &&
          [
            { d: -1, label: "Foto anterior", side: "left-2 md:left-4", Icon: ChevronLeft },
            { d: 1, label: "Foto siguiente", side: "right-2 md:right-4", Icon: ChevronRight },
          ].map(({ d, label, side, Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => go(d)}
              aria-label={label}
              className={`absolute ${side} top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gold/60 bg-black/40 backdrop-blur text-gold hover:bg-gold hover:text-cafeBlack transition-colors flex items-center justify-center`}
            >
              <Icon size={20} />
            </button>
          ))}
      </div>

      <p className="text-center text-xs text-neutral-500 dark:text-white/50 mt-4 tabular-nums">
        {String(actual + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
      </p>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            fotos={fotos}
            index={lightbox}
            setIndex={setLightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
