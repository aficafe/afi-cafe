import { motion } from "framer-motion";
import { FileText, Quote, Award, Instagram, Camera, Video } from "lucide-react";
import EventoHeader from "./EventoHeader";
import FotoCarrusel from "./FotoCarrusel";
import { TikTokEmbed, InstagramEmbed } from "./SocialEmbeds";
import {
  analisis,
  fotosGlobalFair,
  tiktoks,
  instagramPosts,
  instagramPerfilFeria,
} from "../data/globalCoffeeFair";

const aparecer = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fmt = (n) => n.toFixed(2);

/* Puntaje en un anillo que se llena al aparecer (el puntaje SCA es sobre 100) */
function Anillo({ valor }) {
  const r = 52;
  return (
    <div className="relative w-36 h-36 mx-auto sm:mx-0">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" strokeWidth="9" className="stroke-neutral-200 dark:stroke-white/10" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="9"
          strokeLinecap="round"
          className="stroke-gold"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: valor / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tabular-nums text-neutral-900 dark:text-white">{fmt(valor)}</span>
        <span className="text-[11px] tracking-[0.2em] text-neutral-600 dark:text-white/50">PUNTOS SCA</span>
      </div>
    </div>
  );
}

function Barra({ nombre, valor }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-neutral-700 dark:text-white/70">{nombre}</span>
        <span className="text-neutral-900 dark:text-white font-semibold tabular-nums">{fmt(valor)}</span>
      </div>
      <div className="h-1.5 rounded-full bg-neutral-200 dark:bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-afiA"
          initial={{ width: 0 }}
          whileInView={{ width: `${(valor / 10) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Subtitulo({ Icon, eyebrow, titulo, texto }) {
  return (
    <div className="text-center mb-7">
      <p className="inline-flex items-center gap-2 text-goldDeep dark:text-gold text-xs font-semibold tracking-[0.2em] mb-2">
        <Icon size={14} /> {eyebrow}
      </p>
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{titulo}</h3>
      {texto && <p className="text-neutral-600 dark:text-white/50 text-sm mt-1">{texto}</p>}
    </div>
  );
}

export default function GlobalCoffeeFairSection() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="global-coffee-fair" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24">
      <EventoHeader
        eyebrow="EVENTO · QUITO"
        titulo="The Global Coffee Fair"
        dia="18–20"
        mes="SEP 2026"
        fechaLarga="18 al 20 de septiembre de 2026"
        lugar="Centro de Convenciones Metropolitano (Parque Bicentenario), Quito"
      >
        <p>
          Gracias a la invitación del GAD Parroquial de Valle Hermoso, AFI CAFÉ estuvo presente en
          The Global Coffee Fair, una de las ferias de café más importantes del país. Allí compartimos
          nuestro café con visitantes y productores, y nuestra muestra fue evaluada en un análisis
          sensorial profesional.
        </p>
      </EventoHeader>

      {/* Análisis sensorial */}
      <motion.div
        {...aparecer}
        className="max-w-3xl mx-auto rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-white to-white dark:from-gold/[0.08] dark:via-transparent dark:to-transparent p-6 sm:p-8 mb-16"
      >
        <div className="flex items-start gap-4">
          <span className="shrink-0 w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
            <Award size={22} className="text-goldDeep dark:text-gold" />
          </span>
          <div>
            <p className="text-goldDeep dark:text-gold font-semibold text-xs tracking-[0.15em]">
              ANÁLISIS SENSORIAL · MUESTRA N.º {analisis.codigo}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              Nuestro café, evaluado por expertos
            </h3>
            <p className="text-neutral-600 dark:text-white/60 text-sm mt-1">
              Realizado por Guayasamín – Specialty Coffee Lab, en colaboración con Fifty Grams.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] items-center">
          <Anillo valor={analisis.puntajeFinal} />
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {analisis.ficha.map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl border border-gold/20 bg-white dark:bg-white/5 px-3 py-2.5"
              >
                <dt className="text-[11px] uppercase tracking-wide text-neutral-600 dark:text-white/50">{k}</dt>
                <dd className="text-sm font-medium text-neutral-900 dark:text-white mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {analisis.atributos.map(([nombre, valor]) => (
            <Barra key={nombre} nombre={nombre} valor={valor} />
          ))}
        </div>

        <figure className="mt-9 pt-6 border-t border-gold/25">
          <Quote size={20} className="text-goldDeep dark:text-gold mb-3" />
          <figcaption className="text-neutral-900 dark:text-white font-semibold text-sm mb-3">
            Nota del catador
          </figcaption>
          <div className="space-y-3 text-neutral-700 dark:text-white/70 text-sm leading-relaxed">
            {analisis.nota.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="text-neutral-600 dark:text-white/50 text-xs mt-4">{analisis.firma}</p>
        </figure>

        <a
          href={`${base}${analisis.pdf}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-7 border border-gold text-goldDeep dark:text-gold px-5 py-2 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
        >
          <FileText size={16} /> Ver análisis completo (PDF)
        </a>
      </motion.div>

      {/* Carrusel de fotos */}
      {fotosGlobalFair.length > 0 && (
        <motion.div {...aparecer} className="max-w-3xl mx-auto mb-16">
          <Subtitulo
            Icon={Camera}
            eyebrow={`${fotosGlobalFair.length} FOTOS`}
            titulo="Así se vivió la feria"
            texto="Desliza, usa las flechas o toca la lupa para verlas en grande."
          />
          <FotoCarrusel fotos={fotosGlobalFair} />
        </motion.div>
      )}

      {/* Instagram */}
      {instagramPosts.length > 0 && (
        <motion.div {...aparecer} className="max-w-3xl mx-auto mb-16">
          <Subtitulo
            Icon={Instagram}
            eyebrow="EN INSTAGRAM"
            titulo="La feria, en una publicación"
          />
          <div className="grid gap-8 justify-items-center">
            {instagramPosts.map((url) => (
              <div key={url} className="w-full max-w-[540px]">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
          {instagramPerfilFeria && (
            <div className="flex justify-center mt-6">
              <a
                href={instagramPerfilFeria}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold text-goldDeep dark:text-gold px-5 py-2 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
              >
                <Instagram size={16} /> Ver más en Instagram
              </a>
            </div>
          )}
        </motion.div>
      )}

      {/* TikTok */}
      {tiktoks.length > 0 && (
        <motion.div {...aparecer} className="max-w-3xl mx-auto">
          <Subtitulo
            Icon={Video}
            eyebrow="EN TIKTOK"
            titulo="Así lo vivimos en video"
            texto="Videos de @aficafe_ec"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {tiktoks.map((t) => (
              <TikTokEmbed key={t.id} {...t} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
