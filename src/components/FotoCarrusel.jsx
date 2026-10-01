import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X, Pause, Play } from "lucide-react";

/* Carrusel de fotos: flechas, puntos, deslizar con el dedo, avance automático
   (se pausa al pasar el mouse) y visor a pantalla completa.
   Las fotos verticales y horizontales caben enteras: el hueco se rellena
   con la misma foto desenfocada. */

const variantes = {
  entra: (dir) => ({ x: dir > 0 ? 70 : -70, opacity: 0 }),
  centro: { x: 0, opacity: 1 },
  sale: (dir) => ({ x: dir > 0 ? -70 : 70, opacity: 0 }),
};

const reducirMovimiento = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function Visor({ fotos, index, onIr, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIr(1);
      if (e.key === "ArrowLeft") onIr(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onIr, onClose]);

  const foto = fotos[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 text-white/80 hover:text-gold transition-colors"
      >
        <X size={28} />
      </button>
      {["Anterior", "Siguiente"].map((label, k) => (
        <button
          key={label}
          onClick={(e) => {
            e.stopPropagation();
            onIr(k === 0 ? -1 : 1);
          }}
          aria-label={label}
          className={`absolute ${
            k === 0 ? "left-3 md:left-8" : "right-3 md:right-8"
          } top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2.5 transition-colors`}
        >
          {k === 0 ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
        </button>
      ))}
      <img
        src={foto.src}
        alt={foto.texto}
        className="max-h-[78vh] max-w-full object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="text-white/90 text-sm mt-4 text-center px-4">{foto.texto}</p>
      <p className="text-gold/70 text-xs mt-1">
        {index + 1} / {fotos.length}
      </p>
    </div>
  );
}

export default function FotoCarrusel({ fotos, autoplayMs = 5000 }) {
  const total = fotos.length;
  const [[index, dir], setPagina] = useState([0, 0]);
  const [pausa, setPausa] = useState(false);
  const [manual, setManual] = useState(false); // el usuario pausó con el botón
  const [visor, setVisor] = useState(false);

  const ir = useCallback(
    (d) => setPagina(([i]) => [(i + d + total) % total, d]),
    [total]
  );
  const irA = (n) => setPagina(([i]) => [n, n > i ? 1 : -1]);

  /* Avance automático */
  useEffect(() => {
    if (pausa || manual || visor || total < 2 || !autoplayMs || reducirMovimiento()) return;
    const t = setInterval(() => ir(1), autoplayMs);
    return () => clearInterval(t);
  }, [pausa, manual, visor, total, autoplayMs, ir]);

  /* Precarga la foto siguiente para que el cambio sea instantáneo */
  useEffect(() => {
    if (total < 2) return;
    const img = new Image();
    img.src = fotos[(index + 1) % total].src;
  }, [index, fotos, total]);

  if (total === 0) return null;
  const foto = fotos[index];

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos del evento"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") ir(1);
        if (e.key === "ArrowLeft") ir(-1);
      }}
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      className="outline-none"
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-gold/30 bg-neutral-100 dark:bg-white/5 shadow-xl shadow-black/10 dark:shadow-black/40">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={foto.src}
            custom={dir}
            variants={variantes}
            initial="entra"
            animate="centro"
            exit="sale"
            transition={{ duration: 0.45, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.x < -60 || velocity.x < -400) ir(1);
              else if (offset.x > 60 || velocity.x > 400) ir(-1);
            }}
            style={{ touchAction: "pan-y" }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {/* Fondo: la misma foto, desenfocada */}
            <img
              src={foto.src}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-50"
            />
            <img
              src={foto.src}
              alt={foto.texto}
              draggable={false}
              className="relative z-10 w-full h-full object-contain select-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Pie con la descripción */}
        <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pt-14 pb-4">
          <p className="text-white text-sm sm:text-base font-medium drop-shadow">{foto.texto}</p>
        </div>

        {/* Contador y controles */}
        <span className="absolute top-3 left-3 z-20 bg-black/55 text-white text-xs font-medium px-3 py-1 rounded-full tabular-nums">
          {index + 1} / {total}
        </span>
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <button
            type="button"
            onClick={() => setManual((m) => !m)}
            aria-label={manual ? "Reanudar avance automático" : "Pausar avance automático"}
            className="bg-black/55 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2 transition-colors"
          >
            {manual ? <Play size={15} /> : <Pause size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setVisor(true)}
            aria-label="Ver en pantalla completa"
            className="bg-black/55 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2 transition-colors"
          >
            <Expand size={15} />
          </button>
        </div>

        {["Foto anterior", "Foto siguiente"].map((label, k) => (
          <button
            key={label}
            type="button"
            onClick={() => ir(k === 0 ? -1 : 1)}
            aria-label={label}
            className={`absolute ${
              k === 0 ? "left-3" : "right-3"
            } top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/85 dark:bg-black/60 text-neutral-900 dark:text-white shadow hover:bg-gold hover:text-cafeBlack dark:hover:bg-gold dark:hover:text-cafeBlack transition-colors`}
          >
            {k === 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        ))}
      </div>

      {/* Puntos */}
      <div className="flex flex-wrap justify-center gap-1.5 mt-5">
        {fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => irA(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-gold" : "w-2 bg-neutral-300 dark:bg-white/20 hover:bg-gold/60"
            }`}
          />
        ))}
      </div>

      {visor && <Visor fotos={fotos} index={index} onIr={ir} onClose={() => setVisor(false)} />}
    </div>
  );
}
