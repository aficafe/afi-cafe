import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const letters = [
  {
    letter: "A",
    color: "text-afiA",
    title: "POLINIZACIÓN DE ABEJAS",
    text: "Las abejas son las principales polinizadoras de nuestro café. Como el café Robusta es una planta autoincompatible, requiere obligatoriamente de la polinización cruzada para producir frutos. Sin su actividad, la producción sería mínima, apenas del 10% o menos.",
  },
  {
    letter: "F",
    color: "text-afiF",
    title: "FINCAS CON BUENAS PRÁCTICAS",
    text: "Trabajamos exclusivamente en fincas que aplican métodos agrícolas responsables y sostenibles.",
  },
  {
    letter: "I",
    color: "text-afiI",
    title: "INTEGRACIÓN DE MICROORGANISMOS",
    text: "Mantenemos un equilibrio biológico respetando a todos los seres vivos que forman parte del ecosistema de cultivo.",
  },
];

export default function AFISection() {
  return (
    <section id="preguntas" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading
          eyebrow="TRES PILARES"
          title={<>¿Qué significa <span className="text-gold">AFI</span>?</>}
        />
        <p className="text-neutral-700 dark:text-white/70 mb-12">
          Nuestra marca es un acrónimo que representa los tres pilares fundamentales de nuestra
          producción sostenible:
        </p>
      </motion.div>

      <div className="space-y-10 max-w-3xl mx-auto">
        {letters.map((item, i) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex gap-6 items-start"
          >
            <span className={`text-6xl font-bold ${item.color} w-14 shrink-0`}>{item.letter}</span>
            <div>
              <p className={`text-sm font-semibold ${item.color} tracking-wide`}>{item.title}</p>
              <p className="text-neutral-700 dark:text-white/80 mt-1">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-neutral-500 dark:text-white/60 text-sm mt-16 max-w-3xl mx-auto border-t border-neutral-200 dark:border-white/10 pt-6">
        La presencia de la abeja en nuestra marca es una declaración de nuestro proceso de
        polinización natural y sostenibilidad, no indica la adición de miel al producto.
      </p>
    </section>
  );
}
