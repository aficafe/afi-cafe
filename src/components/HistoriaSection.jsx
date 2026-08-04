import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function HistoriaSection() {
  return (
    <section id="historia" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading eyebrow="NUESTRA HISTORIA" title="De la finca a tu taza" />
        <p className="text-neutral-700 dark:text-white/70 leading-relaxed">
          AFI CAFÉ nace en Santo Domingo, Ecuador, de la mano de productores comprometidos con
          un café Robusta cultivado de forma responsable. Cada grano pasa por fincas que respetan
          el ecosistema, donde las abejas polinizan las flores del café y los microorganismos
          mantienen el equilibrio del suelo. El resultado es una taza con carácter, cultivada con
          respeto por la tierra y por quienes la trabajan.
        </p>
      </motion.div>
    </section>
  );
}
