import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { fotosGlobalFair } from "../data/globalCoffeeFair";

const FINCA = "Finca y cosecha";
const PRESENT = "Presentaciones";
const FEST = "Coffee Fest";
const FERIA = "Global Coffee Fair";

const conCat = (cat, lista) => lista.map((f) => ({ ...f, cat }));

const fotos = [
  ...conCat(FINCA, [
    { src: "./gallery/finca1.jpeg", texto: "Nuestra finca en Santo Domingo" },
    { src: "./gallery/cultivo1.jpeg", texto: "El café creciendo en la planta" },
    { src: "./gallery/cultivo2.jpeg", texto: "Cuidando cada rama con dedicación" },
    { src: "./gallery/cultivo3.jpeg", texto: "Los granos madurando al sol" },
    { src: "./gallery/cultivo4.jpeg", texto: "Cerca de estar listos para la cosecha" },
    { src: "./gallery/cultivo5.jpeg", texto: "Frutos de café en su punto" },
    { src: "./gallery/cultivo6.jpeg", texto: "Cultivo sostenible, paso a paso" },
    { src: "./gallery/cosecha1.jpeg", texto: "El momento de la cosecha" },
    { src: "./gallery/cosecha2.jpeg", texto: "Granos recién recolectados" },
    { src: "./gallery/cosecha3.jpeg", texto: "Cada saco, resultado de mucho trabajo" },
    { src: "./gallery/cultivo_proceso.jpeg", texto: "El proceso antes del tueste" },
    { src: "./gallery/area_procesamiento.jpeg", texto: "Nuestra área de procesamiento" },
    { src: "./gallery/finca2.jpeg", texto: "Un vistazo a nuestra tierra" },
    { src: "./gallery/finca3.jpeg", texto: "Donde todo comienza" },
  ]),
  ...conCat(PRESENT, [
    { src: "./gallery/exposicion.jpeg", texto: "Compartiendo AFI CAFÉ en persona" },
    { src: "./gallery/exposicion1.jpeg", texto: "Nuestros productos, listos para probar" },
    { src: "./gallery/exposicion2.jpeg", texto: "Presentando cada lote con cariño" },
    { src: "./gallery/exposicion3.jpeg", texto: "AFI CAFÉ frente a frente contigo" },
    { src: "./gallery/presentaciones.jpeg", texto: "Nuestra presentación final" },
    { src: "./gallery/presentaciones1.jpeg", texto: "Cada detalle cuenta" },
    { src: "./gallery/presentaciones2.jpeg", texto: "Disfrutando con AFI CAFÉ" },
  ]),
  ...conCat(FEST, [
    { src: "./coffee-fest/foto1.jpg", texto: "Stand de AFI CAFÉ en el Coffee Fest Ecuador 2026" },
    { src: "./coffee-fest/foto2.jpg", texto: "Momento de la catación" },
    { src: "./coffee-fest/foto3.jpg", texto: "Recibiendo el reconocimiento" },
    { src: "./coffee-fest/foto4.jpg", texto: "Con el equipo AFI CAFÉ" },
  ]),
  // Las 15 fotos de The Global Coffee Fair vienen de data/globalCoffeeFair.js
  ...conCat(FERIA, fotosGlobalFair),
];

const categorias = ["Todas", FINCA, PRESENT, FEST, FERIA];

function Lightbox({ fotos, index, setIndex, onClose }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % fotos.length), [setIndex, fotos.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + fotos.length) % fotos.length),
    [setIndex, fotos.length]
  );

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

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) next();
    else if (delta < -50) prev();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 text-white/80 hover:text-gold transition-colors"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Anterior"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2.5 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Siguiente"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2.5 transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={fotos[index].src}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={fotos[index].src}
            alt={fotos[index].texto}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
          />
          <p className="text-white/90 text-center text-sm md:text-base mt-4 px-4">
            {fotos[index].texto}
          </p>
          <p className="text-gold/70 text-xs mt-1">
            {index + 1} / {fotos.length}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function GaleriaSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [cat, setCat] = useState("Todas");
  const lista = cat === "Todas" ? fotos : fotos.filter((f) => f.cat === cat);
  const cuenta = (c) => (c === "Todas" ? fotos.length : fotos.filter((f) => f.cat === c).length);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <p className="text-goldDeep dark:text-gold text-sm tracking-widest mb-2">DE LA FINCA A LA TAZA</p>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Galería</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categorias.map((c) => {
          const activo = c === cat;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={activo}
              onClick={() => setCat(c)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activo
                  ? "bg-gold border-gold text-cafeBlack font-semibold"
                  : "border-gold/40 text-neutral-700 dark:text-white/70 hover:border-gold"
              }`}
            >
              {c} <span className="opacity-60 text-xs">({cuenta(c)})</span>
            </button>
          );
        })}
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 [column-fill:_balance]">
        {lista.map((foto, i) => (
          <motion.button
            key={foto.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
            className="group relative block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10 cursor-zoom-in"
          >
            <img
              src={foto.src}
              alt={foto.texto}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <p className="text-white text-xs md:text-sm font-medium text-left leading-snug">
                {foto.texto}
              </p>
            </div>
            <span className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand size={14} />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            fotos={lista}
            index={openIndex}
            setIndex={setOpenIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
