import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import HoneycombPattern from "./HoneycombPattern";
import { InstagramEmbed } from "./SocialEmbeds";
import { instagramComunidad, INSTAGRAM_PERFIL, TIKTOK_PERFIL } from "../data/globalCoffeeFair";

const serif = { fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' };

export default function ComunidadInstagram() {
  return (
    <section className="relative overflow-hidden bg-gold/[0.06] dark:bg-gold/[0.04] border-y border-gold/20">
      <HoneycombPattern className="text-gold" opacity={0.05} />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-2">
            LA COMUNIDAD AFI
          </p>
          <h2
            style={serif}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Esto también es tuyo
          </h2>
          <p className="text-neutral-600 dark:text-white/60 mt-3 leading-relaxed">
            AFI CAFÉ crece con quienes lo prueban, lo comparten y lo recomiendan. Sigue el
            día a día de la finca y cuéntanos cómo lo disfrutas en tu taza.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={INSTAGRAM_PERFIL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-2 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
            >
              <FaInstagram size={16} /> @aficafe_ec
            </a>
            <a
              href={TIKTOK_PERFIL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-2 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
            >
              <FaTiktok size={15} /> @aficafe_ec
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-full max-w-[540px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <InstagramEmbed url={instagramComunidad} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
