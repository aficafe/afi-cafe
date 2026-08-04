import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import SectionHeading from "./SectionHeading";

const WHATSAPP_NUMERO = "593960992712"; // mismo número que en la sección de contacto

const productos = [
  {
    nombre: "AFI Tueste Medio-Oscuro",
    descripcion: "100% Café Robusta Seleccionado.",
    gramos: "500 g",
    imagen: "products/500.png",
  },
  {
    nombre: "AFI Tueste Oscuro",
    descripcion: "Intenso y robusto, ideal para espresso.",
    gramos: "500 g",
    imagen: "products/oscuro.jpg",
  },
  {
    nombre: "AFI Blend Especial",
    descripcion: "Mezcla de granos seleccionados en finca propia.",
    gramos: "500 g",
    imagen: "products/blend.jpg",
  },
];

function ProductImage({ src, alt }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-neutral-100 dark:bg-white/5">
        <Coffee size={40} className="text-gold" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setBroken(true)}
      className="w-full h-48 object-cover bg-neutral-100 dark:bg-white/5 transition-transform duration-500 group-hover:scale-110"
    />
  );
}

export default function ProductosSection() {
  return (
    <section id="productos" className="max-w-5xl mx-auto px-6 pt-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <SectionHeading eyebrow="NUESTRA SELECCIÓN" title="Productos" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((p, i) => (
          <motion.div
            key={p.nombre}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gold transition-colors bg-white dark:bg-transparent"
          >
            <ProductImage src={p.imagen} alt={p.nombre} />
            <div className="p-5">
              <h3 className="text-neutral-900 dark:text-white font-semibold text-lg">
                {p.nombre}
              </h3>
              <p className="text-neutral-600 dark:text-white/60 text-sm mt-1">{p.descripcion}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gold font-bold">{p.gramos}</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
                    `Hola, quiero pedir ${p.nombre}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs border border-gold text-gold px-3 py-1.5 rounded-full hover:bg-gold hover:text-cafeBlack transition-colors"
                >
                  PEDIR
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
