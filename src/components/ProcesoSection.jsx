import { motion } from "framer-motion";
import { Cherry, Droplets, Sun, CheckCircle2, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pasos = [
  {
    icon: Cherry,
    numero: "01",
    title: "Cosecha y embollado",
    text: "Seleccionamos exclusivamente las cerezas rojas maduras. Usamos agua para limpiarlas y separar los granos defectuosos, que flotan y se descartan.",
  },
  {
    icon: Droplets,
    numero: "02",
    title: "Fermentación anaeróbica",
    text: "El grano se fermenta en fundas de plástico selladas, sin oxígeno, durante 4 a 5 días. Así absorbe los azúcares y licores del mucílago, ganando complejidad de sabor.",
  },
  {
    icon: Sun,
    numero: "03",
    title: "Despulpado y secado",
    text: "Se retira la cáscara y el grano pasa a las marquesinas de secado por aproximadamente 15 días, al ritmo del sol.",
  },
  {
    icon: CheckCircle2,
    numero: "04",
    title: "Selección manual",
    text: "Escogemos grano por grano a mano, retirando los que presentan defectos, picaduras o deformaciones.",
  },
  {
    icon: Flame,
    numero: "05",
    title: "Tueste y reposo",
    text: "El café ingresa a la tostadora buscando un término medio, seguido de un tiempo de reposo para liberar sus gases antes de ser molido y empacado.",
  },
];

export default function ProcesoSection() {
  return (
    <section id="proceso" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading
          eyebrow="CÓMO LO HACEMOS"
          title="Nuestro proceso de producción"
        />
        <p className="text-neutral-700 dark:text-white/70 mb-12">
          Cada taza de AFI CAFÉ pasa por cinco etapas cuidadas al detalle, desde la cereza
          en la planta hasta el grano listo para tu cafetera.
        </p>
      </motion.div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {pasos.map((paso, i) => (
          <motion.div
            key={paso.numero}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="shrink-0 w-14 h-14 rounded-full border border-gold flex items-center justify-center">
              <paso.icon size={24} className="text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-gold tracking-widest mb-1">
                PASO {paso.numero}
              </p>
              <h3 className="text-neutral-900 dark:text-white font-semibold text-lg">
                {paso.title}
              </h3>
              <p className="text-neutral-700 dark:text-white/70 mt-1 leading-relaxed">
                {paso.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
