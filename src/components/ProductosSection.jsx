import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Leaf, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const WHATSAPP_NUMERO = "593960992712"; // mismo número que en la sección de contacto
const IMG_500 = `${import.meta.env.BASE_URL}products/500.png`;

// Presentaciones de venta regular (a partir de 250 g)
const CONTENIDOS_COMPRA = [250, 300, 350, 400, 500, 600, 700, 800, 900, 1000, 2000];
// Presentaciones mini, pensadas para que el cliente pruebe antes de comprar más
const CONTENIDOS_PRUEBA = [15, 30, 60, 90, 100, 120, 150, 200];
const CONTENIDO_DEFECTO = 500;

const formatContenido = (g) => (g >= 1000 ? `${g / 1000} kg` : `${g} g`);

const lineas = [
  {
    linea: "Línea Seleccionado",
    subtitulo: "100% Café Robusta Seleccionado",
    productos: [
      {
        nombre: "Tostado en Grano",
        descripcion: "Para moler y preparar al gusto, conservando el aroma recién tostado.",
        imagen: IMG_500,
      },
      {
        nombre: "Molido Fino",
        descripcion: "Ideal para máquinas de espresso y cafetera Moka (italiana).",
        imagen: IMG_500,
      },
      {
        nombre: "Molido Medio",
        descripcion: "Recomendado para métodos de filtrado: V60, cafetera eléctrica, goteo.",
        imagen: IMG_500,
      },
      {
        nombre: "Molido Grueso",
        descripcion: "Recomendado para métodos de inmersión, como la prensa francesa.",
        imagen: IMG_500,
      },
    ],
  },
  {
    linea: "Línea Clásico",
    subtitulo: "100% Café Robusta",
    productos: [
      {
        nombre: "Molido Medio Clásico",
        descripcion: "Preparación tradicional para el consumo diario, en cafetera o filtrado común.",
        imagen: IMG_500,
      },
    ],
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
      loading="lazy"
      onError={() => setBroken(true)}
      className="w-full h-48 object-cover bg-neutral-100 dark:bg-white/5 transition-transform duration-500 group-hover:scale-110"
    />
  );
}

function ProductCard({ p, i }) {
  const [modo, setModo] = useState("compra"); // "compra" | "prueba"
  const [contenidoCompra, setContenidoCompra] = useState(CONTENIDO_DEFECTO);
  const [contenidoPrueba, setContenidoPrueba] = useState(CONTENIDOS_PRUEBA[0]);

  const esCompra = modo === "compra";
  const opciones = esCompra ? CONTENIDOS_COMPRA : CONTENIDOS_PRUEBA;
  const contenido = esCompra ? contenidoCompra : contenidoPrueba;
  const setContenido = esCompra ? setContenidoCompra : setContenidoPrueba;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gold transition-colors bg-white dark:bg-transparent"
    >
      <div className="overflow-hidden">
        <ProductImage src={p.imagen} alt={p.nombre} />
      </div>
      <div className="p-5">
        <h4 className="text-neutral-900 dark:text-white font-semibold text-base">{p.nombre}</h4>
        <p className="text-neutral-600 dark:text-white/60 text-sm mt-1">{p.descripcion}</p>

        {/* Selector Comprar / Probar */}
        <div className="mt-4 grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-neutral-100 dark:bg-white/5">
          <button
            type="button"
            onClick={() => setModo("compra")}
            className={`text-xs font-semibold py-1.5 rounded-md transition-colors ${
              esCompra
                ? "bg-gold text-cafeBlack"
                : "text-neutral-500 dark:text-white/50 hover:text-neutral-800 dark:hover:text-white"
            }`}
          >
            Comprar
          </button>
          <button
            type="button"
            onClick={() => setModo("prueba")}
            className={`text-xs font-semibold py-1.5 rounded-md transition-colors ${
              !esCompra
                ? "bg-gold text-cafeBlack"
                : "text-neutral-500 dark:text-white/50 hover:text-neutral-800 dark:hover:text-white"
            }`}
          >
            Probar
          </button>
        </div>

        <div className="mt-3">
          <label className="block text-neutral-500 dark:text-white/50 text-[11px] uppercase tracking-wide mb-1.5">
            {esCompra ? "Contenido" : "Tamaño de prueba"}
          </label>
          <select
            value={contenido}
            onChange={(e) => setContenido(Number(e.target.value))}
            className="w-full text-sm bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/15 text-neutral-800 dark:text-white rounded-lg px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            style={{ colorScheme: "light" }}
          >
            {opciones.map((g) => (
              <option
                key={g}
                value={g}
                style={{ color: "#1a1a1a", backgroundColor: "#ffffff" }}
              >
                {formatContenido(g)}
              </option>
            ))}
          </select>
          {!esCompra && (
            <p className="text-neutral-400 dark:text-white/40 text-[11px] mt-1.5 leading-snug">
              Presentación mini para que pruebes antes de tu próximo pedido.
            </p>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
              `Hola, quiero pedir AFI Café - ${p.nombre} (${formatContenido(contenido)}${
                !esCompra ? " · presentación de prueba" : ""
              })`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center text-xs font-semibold border border-gold text-gold px-3 py-2 rounded-full hover:bg-gold hover:text-cafeBlack transition-colors"
          >
            PEDIR POR WHATSAPP
          </a>
        </div>
      </div>
    </motion.div>
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
        <p className="text-neutral-600 dark:text-white/60 -mt-6 mb-10">
          Café Robusta 100%, tueste medio-oscuro. Presentaciones de venta desde 250 g hasta
          2 kg, y tamaños mini desde 15 g para que pruebes antes de tu próximo pedido.
        </p>
      </motion.div>

      <div className="space-y-14">
        {lineas.map((l) => (
          <div key={l.linea}>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{l.linea}</h3>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">
                {l.subtitulo}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {l.productos.map((p, i) => (
                <div key={p.nombre} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] min-w-[220px]">
                  <ProductCard p={p} i={i} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-14 rounded-2xl border border-gold/25 bg-gold/[0.04] dark:bg-gold/[0.03] px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <div className="flex items-start gap-3 flex-1">
            <span className="shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mt-0.5">
              <Leaf size={18} className="text-gold" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-neutral-900 dark:text-white font-semibold text-sm">
                Ingredientes
              </p>
              <p className="text-neutral-600 dark:text-white/60 text-sm mt-1 leading-relaxed">
                100% café, sin alérgenos ni sustancias añadidas. Consérvese en un ambiente
                fresco y seco.
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px self-stretch bg-gold/20" />

          <div className="flex items-start gap-3 sm:max-w-[220px]">
            <span className="shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mt-0.5">
              <ShieldCheck size={18} className="text-gold" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-neutral-900 dark:text-white font-semibold text-sm">
                Notificación Sanitaria
              </p>
              <p className="text-neutral-600 dark:text-white/60 text-xs mt-1 font-mono tracking-wide">
                ARCSA N.º 8015454-ALN9673
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}