import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
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
  { src: "./gallery/exposicion.jpeg", texto: "Compartiendo AFI CAFÉ en persona" },
  { src: "./gallery/exposicion1.jpeg", texto: "Nuestros productos, listos para probar" },
  { src: "./gallery/exposicion2.jpeg", texto: "Presentando cada lote con cariño" },
  { src: "./gallery/exposicion3.jpeg", texto: "AFI CAFÉ frente a frente contigo" },
  { src: "./gallery/presentaciones.jpeg", texto: "Nuestra presentación final" },
  { src: "./gallery/presentaciones1.jpeg", texto: "Cada detalle cuenta" },
  { src: "./gallery/presentaciones2.jpeg", texto: "Disfrutando con AFI CAFÉ" },
];

export default function GaleriaSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % fotos.length);
  const prev = () => setIndex((i) => (i - 1 + fotos.length) % fotos.length);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-gold text-sm tracking-widest mb-2">DE LA FINCA A LA TAZA</p>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Galería</h2>
      </motion.div>

      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={fotos[index].src}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={fotos[index].src}
                alt={fotos[index].texto}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                <p className="text-white text-base md:text-lg font-medium">{fotos[index].texto}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* botones prev/next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-gold hover:text-cafeBlack text-white rounded-full p-2 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* puntos indicadores */}
      <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-gold" : "bg-neutral-300 dark:bg-white/20"
            }`}
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}