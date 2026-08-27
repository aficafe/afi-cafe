import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const preview = [
  { src: "./gallery/finca1.jpeg", alt: "Nuestra finca en Santo Domingo" },
  { src: "./gallery/cultivo3.jpeg", alt: "Los granos madurando al sol" },
  { src: "./gallery/cosecha1.jpeg", alt: "El momento de la cosecha" },
  { src: "./gallery/exposicion1.jpeg", alt: "Nuestros productos, listos para probar" },
];

export default function MiniGaleria() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-8"
      >
        <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-2">
          DE LA FINCA A LA TAZA
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Así se vive AFI CAFÉ
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {preview.map((foto, i) => (
          <motion.div
            key={foto.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="aspect-square rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10"
          >
            <img
              src={foto.src}
              alt={foto.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/galeria"
          className="inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all"
        >
          Ver galería completa <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
