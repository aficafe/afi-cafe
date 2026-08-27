export default function HoneycombPattern({ className = "", opacity = 0.06 }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="afi-honeycomb"
          width="44"
          height="76"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          <path
            d="M22 0 L44 12.6 L44 38 L22 50.6 L0 38 L0 12.6 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M22 50.6 L44 63.2 L44 76 L22 76 L0 76 L0 63.2 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#afi-honeycomb)" className="text-gold" />
    </svg>
  );
}
