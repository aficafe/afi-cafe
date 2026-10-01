import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Truck, Award } from "lucide-react";
import HoneycombPattern from "./HoneycombPattern";
import { InstagramEmbed } from "./SocialEmbeds";
import { instagramCompra } from "../data/globalCoffeeFair";

const WHATSAPP_NUMERO = "593960992712"; // mismo número que en Productos y Contacto
const MENSAJE = "Hola, quiero comprar AFI CAFÉ";
const serif = { fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' };

const puntos = [
  { Icon: Award, texto: "1er lugar en la catación de cafés de finca · 83.9 puntos" },
  { Icon: MapPin, texto: "Cultivado en la Finca El Rosario, Valle Hermoso, Santo Domingo" },
  { Icon: Truck, texto: "Entregas en Santo Domingo y Quito · envíos a todo Ecuador" },
];

export default function ComprarCafeSection() {
  return (
    <section className="relative overflow-hidden bg-cream dark:bg-cafeBrown text-neutral-900 dark:text-white">
      <HoneycombPattern className="text-gold" opacity={0.05} />

      <div className="relative max-w-5xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
        {/* Columna izquierda: texto y CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <p className="text-goldDeep dark:text-gold text-xs font-semibold tracking-[0.2em] mb-3">
            CAFÉ ROBUSTA SELECCIONADO
          </p>
          <h2 style={serif} className="text-3xl md:text-4xl font-bold leading-tight">
            El aroma de la finca, directo a tu taza
          </h2>

          <div className="mt-5 space-y-4 text-neutral-700 dark:text-white/70 leading-relaxed">
            <p>
              Nace en las montañas de Santo Domingo de los Tsáchilas, se cuida grano por grano
              y se tuesta a medio oscuro para que cada taza huela a chocolate y a madera
              recién abierta.
            </p>
            <p>
              100% Robusta seleccionado, de una finca familiar que ya se midió frente a
              catadores profesionales. Lo que prueba la gente en la feria, ahora puedes tenerlo
              en casa.
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto md:mx-0">
            {puntos.map(({ Icon, texto }) => (
              <li key={texto} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-white/80">
                <span className="shrink-0 w-8 h-8 rounded-full bg-gold/20 dark:bg-gold/15 border border-gold/50 dark:border-gold/40 flex items-center justify-center">
                  <Icon size={15} className="text-goldDeep dark:text-gold" />
                </span>
                <span className="pt-1">{texto}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAJE)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-cafeBlack font-semibold px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(218,165,32,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={18} /> Comprar Café
            </a>
            <Link
              to="/productos"
              className="inline-flex items-center justify-center border border-gold text-goldDeep dark:text-gold px-6 py-3.5 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
            >
              Ver presentaciones
            </Link>
          </div>
        </motion.div>

        {/* Columna derecha: publicación de Instagram */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <InstagramEmbed url={instagramCompra} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
