import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { useState } from "react";
import FlyingBee from "./FlyingBee";
import AfiCafeLogo from "./AfiCafeLogo";

/* ------------------------------------------------------------------
   GOTA DEL LOGO
------------------------------------------------------------------- */
const SHAPE_CLIP_ID = "afi-shape-clip";
const SHAPE_PATH =
  "M0,0 L0.5,0 C0.78,0 1,0.22 1,0.5 C1,0.78 0.78,1 0.5,1 C0.22,1 0,0.78 0,0.5 Z";

function ShapeSVGDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <clipPath id={SHAPE_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d={SHAPE_PATH} />3
        </clipPath>
      </defs>
    </svg>
  );
}

/* Contenedor reutilizable: recorta el contenido y dibuja el borde dorado encima */
function ShapeFrame({ children, className = "" }) {
  return (
    <div className="relative w-64 h-64 shrink-0">
      <div
        className={`w-full h-full overflow-hidden ${className}`}
        style={{ clipPath: `url(#${SHAPE_CLIP_ID})` }}
      >
        {children}
      </div>

      {/* Borde dorado (el clip-path corta los bordes CSS, por eso se dibuja en SVG) */}
      <svg
        viewBox="0 0 1 1"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <path
          d={SHAPE_PATH}
          fill="none"
          stroke="#DAA520"
          strokeWidth="0.012"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}

/* Emblema de respaldo si no carga afi.png */
function AfiEmblem() {
  const r = 90;
  const c = 2 * Math.PI * r;
  const segment = c / 3 - 8;
  const gap = c - segment;

  return (
    <ShapeFrame className="bg-cream dark:bg-cafeBlack">
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          <circle
            cx="100" cy="100" r={r} fill="none" stroke="#DAA520" strokeWidth="10"
            strokeDasharray={`${segment} ${gap}`} transform="rotate(-90 100 100)"
          />
          <circle
            cx="100" cy="100" r={r} fill="none" stroke="#6B8E23" strokeWidth="10"
            strokeDasharray={`${segment} ${gap}`} transform="rotate(30 100 100)"
          />
          <circle
            cx="100" cy="100" r={r} fill="none" stroke="#9E4235" strokeWidth="10"
            strokeDasharray={`${segment} ${gap}`} transform="rotate(150 100 100)"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <Coffee size={56} className="text-gold" strokeWidth={1.5} />
          <span className="text-2xl font-bold tracking-[0.3em]">
            <span className="text-afiA">A</span>
            <span className="text-afiF">F</span>
            <span className="text-afiI">I</span>
          </span>
        </div>
      </div>
    </ShapeFrame>
  );
}

function HeroImage() {
  const [broken, setBroken] = useState(false);

  if (broken) return <AfiEmblem />;

  return (
    <ShapeFrame>
      <img
        src={`${import.meta.env.BASE_URL}afi.png`}
        alt="AFI CAFÉ"
        onError={() => setBroken(true)}
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
      />
    </ShapeFrame>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-16 pb-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <ShapeSVGDefs />
        <FlyingBee size={48} top="2%" left="-14%" range={70} duration={8} />
        <HeroImage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <p className="text-gold text-sm tracking-widest">SANTO DOMINGO · ECUADOR</p>
        <h1 className="mt-4 mb-2">
          <AfiCafeLogo size="h-16 md:h-20" className="mx-auto md:mx-0" />
        </h1>
        <p className="text-neutral-700 dark:text-white/80 mt-2">
          GRANOS <span className="text-gold">SELECCIONADOS</span>
        </p>
        <Link
          to="/afi"
          className="inline-block mt-6 border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-cafeBlack transition-colors"
        >
          ¿QUÉ ES AFI?
        </Link>
      </motion.div>
    </section>
  );
}
