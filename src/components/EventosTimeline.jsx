import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Trophy, Home as HomeIcon, ArrowDown, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { eventos } from "../data/eventos";

const iconos = { evento: CalendarDays, premio: Trophy, finca: HomeIcon };

/* La página usa HashRouter, así que NO se puede usar href="#id" (rompería la ruta).
   Por eso bajamos a la sección con scrollIntoView. */
const irA = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function EventosTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-14">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading eyebrow="EVENTOS Y RECONOCIMIENTOS" title="Nuestro camino en 2026" />
          <p className="text-neutral-700 dark:text-white/70 -mt-6 mb-10 leading-relaxed">
            Los momentos que nos han marcado este año, del más reciente al más antiguo. Toca uno
            para ver sus fotos, videos y detalles.
          </p>
        </motion.div>

        <ol className="relative border-l-2 border-gold/30 ml-4 space-y-8">
          {eventos.map((e, i) => {
            const Icono = iconos[e.icono] ?? CalendarDays;
            const proximo = !e.fecha;
            return (
              <motion.li
                key={e.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative ml-8"
              >
                <span
                  className={`absolute -left-[3.15rem] top-4 w-9 h-9 rounded-full flex items-center justify-center border-2 border-gold bg-white dark:bg-cafeBlack ${
                    proximo ? "border-dashed" : ""
                  }`}
                >
                  <Icono size={16} className="text-goldDeep dark:text-gold" />
                </span>

                <div
                  className={`rounded-2xl border p-5 sm:p-6 transition-colors hover:border-gold ${
                    proximo
                      ? "border-dashed border-gold/50 bg-gold/5 dark:bg-gold/[0.04]"
                      : "border-gold/30 bg-white dark:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-gold/15 text-goldDeep dark:text-gold">
                      {e.tipo}
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-white/50">{e.fechaTexto}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-neutral-900 dark:text-white">{e.titulo}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-white/50">{e.lugar}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-white/70">
                    {e.resumen}
                  </p>

                  {e.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-gold/40 text-neutral-700 dark:text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {(e.seccion || e.link) && (
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                      {e.seccion && (
                        <button
                          type="button"
                          onClick={() => irA(e.seccion)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-goldDeep dark:text-gold hover:gap-2.5 transition-all"
                        >
                          Ver detalle <ArrowDown size={15} />
                        </button>
                      )}
                      {e.link && (
                        <Link
                          to={e.link.to}
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 dark:text-white/60 hover:text-goldDeep dark:hover:text-gold transition-colors"
                        >
                          {e.link.texto} <ArrowRight size={15} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
