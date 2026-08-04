import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MiniHistoria() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center border-t border-b border-neutral-200 dark:border-white/10 py-8"
      >
        <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-3">NUESTRA HISTORIA</p>
        <p className="text-neutral-700 dark:text-white/70 leading-relaxed">
          AFI CAFÉ nace en Santo Domingo, Ecuador, con productores comprometidos con un café
          Robusta cultivado de forma responsable, respetando el ecosistema en cada finca.
        </p>
        <Link
          to="/historia"
          className="inline-flex items-center gap-1 mt-4 text-gold text-sm font-semibold hover:gap-2 transition-all"
        >
          Conoce nuestra historia <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
