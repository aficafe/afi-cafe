import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

/* Encabezado de cada evento: cuadrito de fecha + título + lugar.
   Así cada evento se reconoce de un vistazo y todos se ven iguales. */
export default function EventoHeader({ eyebrow, titulo, dia, mes, fechaLarga, lugar, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mb-10"
    >
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-[84px] rounded-2xl border border-gold/40 bg-gold/10 py-3 text-center">
          <p className="text-2xl font-bold leading-none text-goldDeep dark:text-gold">{dia}</p>
          <p className="mt-1.5 text-[11px] font-semibold tracking-[0.15em] text-neutral-600 dark:text-white/60">
            {mes}
          </p>
        </div>
        <div>
          <p className="text-goldDeep dark:text-gold text-xs font-semibold tracking-[0.2em] mb-1.5">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 dark:text-white">
            {titulo}
          </h2>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600 dark:text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-goldDeep dark:text-gold" /> {fechaLarga}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-goldDeep dark:text-gold" /> {lugar}
            </span>
          </p>
        </div>
      </div>
      {children && (
        <div className="mt-6 space-y-3 leading-relaxed text-neutral-700 dark:text-white/70">
          {children}
        </div>
      )}
    </motion.div>
  );
}
