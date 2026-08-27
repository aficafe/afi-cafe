import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pilares = [
  { letra: "A", color: "text-afiA", texto: "Abejas polinizando de forma orgánica" },
  { letra: "F", color: "text-afiF", texto: "Fincas con buenas prácticas agrícolas" },
  { letra: "I", color: "text-afiI", texto: "Integración de microorganismos del suelo" },
];

export default function MiniAFI() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-3">
          ¿QUÉ SIGNIFICA AFI?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {pilares.map((p, i) => (
            <motion.div
              key={p.letra}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className={`text-4xl font-bold ${p.color}`}>{p.letra}</span>
              <p className="text-neutral-600 dark:text-white/60 text-sm">{p.texto}</p>
            </motion.div>
          ))}
        </div>
        <Link
          to="/afi"
          className="inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all"
        >
          Descubre todo sobre AFI <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
