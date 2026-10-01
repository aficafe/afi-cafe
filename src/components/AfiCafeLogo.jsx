/**
 * Logo registrado de AFI CAFÉ.
 * Usa una imagen para modo claro (CAFÉ en negro) y otra para modo oscuro (CAFÉ en blanco).
 *
 * Props:
 *  - size: clase de Tailwind para la altura (ej. "h-9", "h-12"). El ancho se ajusta solo.
 *  - className: clases extra opcionales.
 */
export default function AfiCafeLogo({ size = "h-9", className = "" }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <img
        src={`${base}afi-logo-claro.png`}
        alt="AFI CAFÉ"
        className={`${size} w-auto dark:hidden ${className}`}
      />
      <img
        src={`${base}afi-logo-oscuro.png`}
        alt="AFI CAFÉ"
        className={`${size} w-auto hidden dark:block ${className}`}
      />
    </>
  );
}
