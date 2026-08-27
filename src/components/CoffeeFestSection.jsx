import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar, Camera, PlayCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Coloca aquí tus fotos del evento (ver /public/coffee-fest en el proyecto)
const fotosEvento = [
  { src: "./coffee-fest/foto1.jpg", texto: "Stand de AFI CAFÉ en el Coffee Fest Ecuador 2026" },
  { src: "./coffee-fest/foto2.jpg", texto: "Momento de la catación" },
  { src: "./coffee-fest/foto3.jpg", texto: "Recibiendo el reconocimiento" },
  { src: "./coffee-fest/foto4.jpg", texto: "Con el equipo AFI CAFÉ" },
];

// Coloca aquí tus videos del evento (ver /public/videos en el proyecto)
const VIDEO_COMPLETO = "./videos/coffee-fest-completo.mp4";
const VIDEO_PREMIACION = "./videos/premiacion-1er-lugar.mp4";

const ranking = [
  {
    lugar: "1.º",
    nombre: " Sr. Omar Vargas",
    detalle: "Sector La Palma, recinto Cristóbal Colón, parroquia Valle Hermoso",
    destacado: true,
  },
];

function EventPhoto({ src, texto }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="aspect-[4/3] w-full rounded-xl bg-neutral-100 dark:bg-white/5 border border-dashed border-neutral-300 dark:border-white/15 flex flex-col items-center justify-center text-center px-3">
        <Camera size={22} className="text-gold mb-1.5" strokeWidth={1.5} />
        <p className="text-neutral-400 dark:text-white/40 text-xs">Foto próximamente</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 group">
      <img
        src={src}
        alt={texto}
        loading="lazy"
        onError={() => setBroken(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <p className="text-white text-xs font-medium">{texto}</p>
      </div>
    </div>
  );
}

function EventVideo({ src, titulo, descripcion }) {
  const [broken, setBroken] = useState(false);

  return (
    <div>
      <h4 className="text-neutral-900 dark:text-white font-semibold text-base mb-1">{titulo}</h4>
      <p className="text-neutral-500 dark:text-white/50 text-sm mb-3">{descripcion}</p>
      {broken ? (
        <div className="aspect-video w-full rounded-xl bg-neutral-100 dark:bg-white/5 border border-dashed border-neutral-300 dark:border-white/15 flex flex-col items-center justify-center text-center px-3">
          <PlayCircle size={28} className="text-gold mb-1.5" strokeWidth={1.5} />
          <p className="text-neutral-400 dark:text-white/40 text-xs">Video próximamente</p>
        </div>
      ) : (
        <video
          controls
          preload="metadata"
          onError={() => setBroken(true)}
          className="w-full aspect-video rounded-xl border border-neutral-200 dark:border-white/10 bg-black"
        >
          <source src={src} />
        </video>
      )}
    </div>
  );
}

export default function CoffeeFestSection() {
  return (
    <section id="coffee-fest" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <SectionHeading eyebrow="COFFEE FEST ECUADOR 2026" title="Así AFI CAFÉ se dejo ver en el festival" />
        <p className="text-neutral-700 dark:text-white/70 -mt-6 mb-4 leading-relaxed">
          El Coffee Fest Ecuador 2026 celebrado por 1era vez reunió a productores de Santo Domingo y sectores cercanos
          para mostrar la calidad de sus cosechas, con catas, exhibiciones de baristas y
          espacios para fortalecer la cultura cafetera de la región.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-white/50 mb-10">
          <span className="flex items-center gap-1.5">
            <Calendar size={15} className="text-gold" /> 21 y 22 de agosto de 2026
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={15} className="text-gold" /> Coliseo del Centro Agrícola Cantonal,
            Santo Domingo
          </span>
        </div>
      </motion.div>

      {/* Ranking de la categoría */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-14"
      >
        <p className="text-neutral-900 dark:text-white font-semibold text-sm mb-4">
          Catación de cafés de finca · Categoría Robusta
        </p>
        <div className="space-y-3">
          {ranking.map((r) => (
            <div
              key={r.lugar}
              className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                r.destacado
                  ? "border-gold bg-gold/5 dark:bg-gold/[0.06]"
                  : "border-neutral-200 dark:border-white/10"
              }`}
            >
              <span
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                  r.destacado
                    ? "bg-gold text-cafeBlack"
                    : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/60"
                }`}
              >
                {r.destacado ? <Trophy size={16} /> : r.lugar}
              </span>
              <div>
                <p className="text-neutral-900 dark:text-white font-semibold text-sm">
                  {r.nombre} {r.destacado && <span className="text-gold">· AFI CAFÉ</span>}
                </p>
                <p className="text-neutral-500 dark:text-white/50 text-xs mt-0.5">{r.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fotos del evento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-neutral-900 dark:text-white font-semibold text-sm mb-4 text-center">
          Fotos del evento
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {fotosEvento.map((f) => (
            <EventPhoto key={f.src} {...f} />
          ))}
        </div>
      </motion.div>

      {/* Videos del evento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto grid gap-10 sm:grid-cols-2"
      >
        <EventVideo
          src={VIDEO_COMPLETO}
          titulo="Cobertura completa (sin editar)"
          descripcion="Registro íntegro de nuestra participación en el festival."
        />
        <EventVideo
          src={VIDEO_PREMIACION}
          titulo="El momento del primer lugar"
          descripcion="El instante en que anunciaron a AFI CAFÉ como ganador."
        />
      </motion.div>
    </section>
  );
}
