import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function LogrosSection() {
  return (
    <section id="logros" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading eyebrow="RECONOCIMIENTOS" title="El orgullo de Valle Hermoso" />

        <div className="relative rounded-2xl border border-gold/30 bg-gold/5 dark:bg-gold/[0.06] p-8 overflow-hidden">
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
              <Trophy size={22} className="text-gold" />
            </span>
            <div>
              <p className="text-gold font-semibold text-sm tracking-wide">
                1ER LUGAR · COFFEE FEST ECUADOR 2026 (CATEGORÍA ROBUSTA)
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                El equipo AFI CAFÉ en el primer lugar
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-neutral-700 dark:text-white/70 leading-relaxed">
            <p>
              El esfuerzo, la tradición y el trabajo en equipo tienen su máxima recompensa. Nos
              enorgullece compartir que el equipo de{" "}
              <span className="font-semibold">AFI CAFÉ</span> —{" "}
              <span className="font-semibold">Sra. Rosario Carvajal</span> y{" "}
              <span className="font-semibold">Sr. Omar Vargas</span>— presentó dos muestras en
              la catación de café de finca del{" "}
              <span className="font-semibold">Coffee Fest Ecuador 2026</span>, realizado el 21
              y 22 de agosto en el Coliseo del Centro Agrícola Cantonal de Santo Domingo: una
              alcanzó el 5to lugar, y la otra se llevó el{" "}
              <span className="font-semibold">1er lugar</span>.
            </p>
            <p>
              Nuestro café ganador, cultivado y procesado en la{" "}
              <span className="font-semibold">Finca El Rosario</span> (sector La Palma,
              recinto Cristóbal Colón, parroquia Valle Hermoso), obtuvo un puntaje de{" "}
              <span className="text-gold font-semibold">83.9</span>, muy por encima del mínimo
              de 80 puntos requerido para ser considerado un café de calidad, con notas de
              chocolate al 60%, acidez de mandarina, dulzor de caña de azúcar y caramelo.
            </p>
            <p>
              Este reconocimiento confirma lo que en AFI CAFÉ ya sabíamos: el amor por la
              tierra, combinado con un manejo agrícola impecable y procesos de poscosecha de
              excelencia, puede llevar al café robusta al nivel de los más exigentes. ¡Un logro
              de equipo que nos impulsa a seguir creciendo!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
