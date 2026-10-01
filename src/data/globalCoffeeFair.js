/* ------------------------------------------------------------------
   Datos de The Global Coffee Fair (Quito, septiembre 2026).
   Edita este archivo para agregar videos, posts de Instagram o cambiar textos.
------------------------------------------------------------------- */

/* FOTOS: las 15 fotos viven en  public/global-fair/  (en este orden se ven en el carrusel).
   Si algún día agregas más, copialas a  src/assets/global-coffee-fair/  y se suman solas al final. */
const BASE = import.meta.env.BASE_URL;

const fotosPublic = [
  ["centrodeconvenciones", "Centro de Convenciones Metropolitano, en Quito"],
  ["100cafeterias", "El equipo de AFI CAFÉ en la feria"],
  ["expositores", "Nuestro stand, listo para recibir visitantes"],
  ["expositores2", "Atendiendo a los visitantes en el stand"],
  ["stand", "Preparando café en el stand de AFI CAFÉ"],
  ["stand2", "Café recién preparado para probar"],
  ["preparando", "Preparando café en vivo"],
  ["preparando2", "Cada taza, preparada al momento"],
  ["personas", "Visitantes probando nuestro café"],
  ["personas4", "Atendiendo a los visitantes"],
  ["personas5", "Un café, una conversación"],
  ["personas2", "El stand, lleno de visitantes"],
  ["personas3", "Mucho público pasó por AFI CAFÉ"],
  ["cantantes", "Música y buen ambiente junto a nuestro stand"],
  ["productoenlaferia", "Nuestro café 100% Robusta seleccionado"],
].map(([nombre, texto]) => ({ src: `${BASE}global-fair/${nombre}.jpg`, texto }));

const modulos = import.meta.glob(
  "../assets/global-coffee-fair/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" }
);

const fotosExtra = Object.entries(modulos)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => ({ src, texto: "AFI CAFÉ en The Global Coffee Fair, Quito" }));

export const fotosGlobalFair = [...fotosPublic, ...fotosExtra];

/* VIDEOS DE TIKTOK: agrega otro objeto con el id y la URL del video.
   El id es el número al final del enlace del video. */
export const tiktoks = [
  {
    id: "7687809051572456725",
    url: "https://www.tiktok.com/@aficafe_ec/video/7687809051572456725",
    texto: "Algunos momentos de AFI CAFÉ 🐝☕️ en The Global Coffee Fair",
  },
  {
    id: "7687676493605948692",
    url: "https://www.tiktok.com/@aficafe_ec/video/7687676493605948692",
    texto:
      "Un poquito de AFI CAFÉ 🐝☕️ en el último día en The Global Coffee Fair, Quito",
  },
];

/* INSTAGRAM: pega aquí los enlaces de los posts o reels públicos, por ejemplo
   "https://www.instagram.com/p/XXXXXXXXXXX/"  o  "https://www.instagram.com/reel/XXXXXXXXXXX/"
   Mientras la lista esté vacía, esa sección no se muestra. */
export const instagramPosts = ["https://www.instagram.com/p/DdiClQngAqO/"];

/* Perfil de Instagram de la feria (opcional). Ej: "https://www.instagram.com/usuario/" */
export const instagramPerfilFeria = "";

/* ANÁLISIS SENSORIAL (Guayasamín – Specialty Coffee Lab) */
export const analisis = {
  codigo: "870",
  puntajeFinal: 83.5,
  ficha: [
    ["Productor", "Rosario Carvajal"],
    ["Finca", "AFI CAFÉ"],
    ["Origen", "Santo Domingo de los Tsáchilas"],
    ["Altura", "300 – 700 msnm"],
    ["Especie", "Robusta"],
    ["Proceso", "Honey · fermentado 3 días"],
  ],
  atributos: [
    ["Aroma", 7.5],
    ["Sabor", 7.75],
    ["Acidez", 7.5],
    ["Cuerpo", 7.75],
    ["Uniformidad", 10],
    ["Taza limpia", 10],
    ["General", 7.75],
    ["Retrogusto", 7.5],
    ["Balance", 7.75],
    ["Dulzor", 10],
  ],
  nota: [
    "Muestra de perfil sobrio, profundo y predominantemente amaderado, con madera claramente presente en fragancia y aroma.",
    "En sabor desarrolla una nota de chocolate amaderado que aporta mayor profundidad y dulzor al conjunto.",
    "Presenta cuerpo medio, buena intensidad y una sensación envolvente.",
    "El perfil se mantiene consistente durante las tres temperaturas, con un final agradable donde permanecen principalmente las notas de chocolate y madera.",
  ],
  firma: "Martin Guayasamin · Guayasamín – Specialty Coffee Lab · Septiembre 2026",
  pdf: "analisis-sensorial-global-coffee-fair.pdf",
};

/* ------------------------------------------------------------------
   Landing /feria
------------------------------------------------------------------- */
export const instagramComunidad = "https://www.instagram.com/p/DdiClQngAqO/";
export const instagramCompra = "https://www.instagram.com/p/DdAXeF_AhzY/";
export const INSTAGRAM_PERFIL = "https://www.instagram.com/aficafe_ec/";
export const TIKTOK_PERFIL = "https://www.tiktok.com/@aficafe_ec";
