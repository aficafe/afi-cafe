import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import HoneycombPattern from "./HoneycombPattern";
import FlyingBee from "./FlyingBee";
import { TikTokEmbed } from "./SocialEmbeds";
import { tiktoks, analisis } from "../data/globalCoffeeFair";

const serif = { fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' };

export default function FeriaHero() {
  return (
    <section className="relative overflow-hidden bg-[#14100c] text-white">
      {/* Fondo: tierra mate, panal y un resplandor dorado */}
      <HoneycombPattern className="text-gold" opacity={0.06} />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(218,165,32,0.22) 0%, rgba(218,165,32,0) 65%)" }}
      />
      <FlyingBee size={34} top="8%" left="8%" range={60} duration={9} />
      <FlyingBee size={22} top="30%" left="88%" range={36} duration={8} delay={1.5} />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block border border-gold/50 text-gold text-xs font-semibold tracking-[0.2em] rounded-full px-4 py-1.5">
            LA ÚLTIMA NOVEDAD
          </span>

          <h1
            style={serif}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]"
          >
            AFI CAFÉ estuvo en <span className="text-gold">The Global Coffee Fair</span>
          </h1>

          <p className="mt-5 text-white/70 leading-relaxed">
            Llevamos el café de la Finca El Rosario, de Santo Domingo de los Tsáchilas, hasta
            Quito. Mira cómo se vivió nuestra participación.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-gold" /> 18 al 20 de septiembre de 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-gold" /> Centro de Convenciones Metropolitano,
              Quito
            </span>
          </div>

          <Link
            to="/eventos"
            className="inline-flex items-center gap-2 mt-7 text-sm text-gold hover:underline"
          >
            Nuestra muestra obtuvo {analisis.puntajeFinal.toFixed(2)} puntos SCA · ver análisis →
          </Link>
        </motion.div>

        {/* Dos videos verticales lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-8 md:grid-cols-2 max-w-3xl mx-auto"
        >
          {tiktoks.slice(0, 2).map((t) => (
            <TikTokEmbed key={t.id} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
