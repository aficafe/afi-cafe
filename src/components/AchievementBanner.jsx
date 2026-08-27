import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function AchievementBanner() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/historia"
          className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl border border-gold/40 bg-gold/5 dark:bg-gold/[0.06] px-6 py-5 max-w-3xl mx-auto hover:bg-gold/10 dark:hover:bg-gold/10 transition-colors"
        >
          <span className="shrink-0 w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
            <Trophy size={22} className="text-gold" />
          </span>
          <div className="text-center sm:text-left">
            <p className="text-gold font-semibold text-xs tracking-[0.15em]">
              1ER LUGAR · CATACIÓN DE CAFÉS DE FINCA
            </p>
            <p className="text-neutral-900 dark:text-white font-semibold mt-0.5">
              83.9 puntos con nuestro café Robusta, cultivado y procesado por el equipo de AFI
              CAFÉ en la Finca El Rosario.
            </p>
          </div>
          <span className="hidden sm:block text-gold text-sm shrink-0 ml-auto group-hover:translate-x-1 transition-transform">
            Conoce la historia →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
