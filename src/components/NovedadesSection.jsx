import { motion } from "framer-motion";
import { CalendarDays, Home as HomeIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const novedades = [
  {
    icon: CalendarDays,
    tag: "18–20 SEPT · QUITO",
    title: "The Global Coffee Fair",
    text: "Gracias a la invitación del GAD Parroquial de Santo Domingo, estaremos presentes en The Global Coffee Fair, en el Centro de Convenciones Metropolitano de Quito (Parque Bicentenario) — la feria de café más importante del país, con más de 150 marcas, catas sensoriales y el Concurso Nacional de Barismo.",
  },
  {
    icon: HomeIcon,
    tag: "PRÓXIMAMENTE",
    title: "Nuevas instalaciones en la finca",
    text: "Estamos preparando la inauguración del espacio donde procesamos nuestro café, directamente en la Finca El Rosario. Muy pronto compartiremos la fecha.",
  },
];

export default function NovedadesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading eyebrow="AGENDA" title="Lo que viene para AFI CAFÉ" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {novedades.map((n, i) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl border border-neutral-200 dark:border-white/10 p-6 hover:border-gold/60 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-4">
              <n.icon size={18} className="text-gold" />
            </span>
            <p className="text-gold text-xs font-semibold tracking-[0.15em]">{n.tag}</p>
            <h3 className="text-neutral-900 dark:text-white font-semibold mt-1">{n.title}</h3>
            <p className="text-neutral-600 dark:text-white/60 text-sm mt-2 leading-relaxed">
              {n.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
