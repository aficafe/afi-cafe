import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import FlyingBee from "./FlyingBee";

export default function HistoriaSection() {
  return (
    <section id="historia" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative"
      >
        <FlyingBee size={28} top="-10%" left="85%" range={40} duration={7} />
        <SectionHeading eyebrow="NUESTRA HISTORIA" title="De la finca a tu taza" />

        <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-snug mb-10 -mt-4">
          De vender una hectárea a ganar el{" "}
          <span className="text-gold">primer lugar en el Coffee Fest Ecuador 2026</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-neutral-700 dark:text-white/70 leading-relaxed">
          <div>
            <p className="text-gold font-semibold text-sm tracking-wide mb-2">
              CÓMO EMPEZÓ TODO
            </p>
            <p>
              Cuando el precio del quintal de café cayó a apenas 9 dólares, tuvimos que vender
              una hectárea que habíamos comprado a crédito. Ese golpe fue el que nos hizo
              cambiar de estrategia: en lugar de vender la cosecha en bruto, empezamos a
              procesar nuestro propio café. Así, alrededor de{" "}
              <span className="text-gold font-semibold">2016</span>, retomamos la tradición
              cafetera de la <span className="font-semibold">Finca El Rosario</span>, con
              buenas prácticas agrícolas y cuidado real por el suelo y el entorno.
            </p>
          </div>
          <div>
            <p className="text-gold font-semibold text-sm tracking-wide mb-2">
              EL ORIGEN DE NUESTRO NOMBRE
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-neutral-800 dark:text-white/80 mb-3">
              "Salimos a cosechar en plena floración y tuvimos que correr — el cultivo estaba
              invadido de abejas."
            </blockquote>
            <p>
              De esa anécdota nace <span className="text-gold font-semibold">AFI</span>. Hoy
              ese mismo fenómeno es una de nuestras mayores fortalezas: el{" "}
              <span className="font-semibold">90%</span> de nuestra finca se poliniza de forma
              orgánica gracias a ellas.
            </p>
          </div>
        </div>

        <p className="text-neutral-700 dark:text-white/70 leading-relaxed mt-8">
          Hoy no solo producimos un café artesanal de calidad, sino que buscamos inspirar a las
          fincas vecinas a retomar la tradición cafetera de la zona. Queremos romper el mito de
          que el café robusta es de segunda, demostrando que con un buen manejo puede competir
          de igual a igual con los mejores cafés de especialidad — de la mata a la taza.
        </p>
      </motion.div>
    </section>
  );
}
