/* ------------------------------------------------------------------
   Eventos y reconocimientos de AFI CAFÉ.
   Para agregar uno nuevo: copia un bloque, cambia la `fecha` (AAAA-MM-DD)
   y listo: la línea de tiempo se ordena sola (lo más reciente arriba).
   - `fecha: null`  → "Próximamente" (siempre va primero).
   - `seccion`      → id de la sección con el detalle (para el botón "Ver detalle").
   - `icono`        → "evento" | "premio" | "finca"
------------------------------------------------------------------- */
const lista = [
  {
    id: "instalaciones",
    fecha: null,
    fechaTexto: "Próximamente",
    titulo: "Inauguración de nuestras nuevas instalaciones",
    lugar: "Finca El Rosario, Valle Hermoso",
    resumen:
      "Estamos preparando el espacio donde procesamos nuestro café. Muy pronto compartiremos la fecha.",
    tipo: "Próximamente",
    icono: "finca",
    tags: [],
  },
  {
    id: "global-coffee-fair",
    seccion: "global-coffee-fair",
    fecha: "2026-09-18",
    fechaTexto: "18 al 20 de septiembre de 2026",
    titulo: "The Global Coffee Fair",
    lugar: "Centro de Convenciones Metropolitano, Quito",
    resumen:
      "Invitados por el GAD Parroquial de Valle Hermoso, llevamos nuestro café a una de las ferias más importantes del país.",
    tipo: "Evento",
    icono: "evento",
    tags: ["Análisis sensorial · 83.50 puntos SCA", "Fotos y videos"],
    link: { to: "/feria", texto: "Ver la página de la feria" },
  },
  {
    id: "coffee-fest",
    seccion: "coffee-fest",
    fecha: "2026-08-21",
    fechaTexto: "21 y 22 de agosto de 2026",
    titulo: "Coffee Fest Ecuador 2026",
    lugar: "Coliseo del Centro Agrícola Cantonal, Santo Domingo",
    resumen:
      "Nuestra muestra ganó el 1er lugar en la categoría Robusta de la catación de cafés de finca; la otra quedó en 5.º lugar.",
    tipo: "Reconocimiento",
    icono: "premio",
    tags: ["1er lugar · 83.9 puntos", "5.º lugar · segunda muestra"],
  },
];

/* Primero los "próximamente"; luego, del más reciente al más antiguo */
export const eventos = [...lista].sort((a, b) => {
  if (!a.fecha && !b.fecha) return 0;
  if (!a.fecha) return -1;
  if (!b.fecha) return 1;
  return b.fecha.localeCompare(a.fecha);
});
