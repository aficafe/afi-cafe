import { motion } from "framer-motion";

export default function FlyingBee({
  size = 30,
  top = "8%",
  left = "-6%",
  range = 60,
  duration = 9,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={`absolute z-20 pointer-events-none ${className}`}
      style={{ top, left }}
      animate={{
        x: [0, range * 0.8, range * 0.25, range, 0],
        y: [0, -range * 0.4, range * 0.25, -range * 0.25, 0],
        rotate: [0, 12, -8, 6, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg width={size} height={size} viewBox="0 0 26 26">
        <ellipse cx="13" cy="15" rx="7" ry="6" fill="#F2B705" />
        <path d="M6 15 Q13 11 20 15" stroke="#1a1a1a" strokeWidth="1.6" fill="none" />
        <path d="M7 17.5 Q13 14 19 17.5" stroke="#1a1a1a" strokeWidth="1.6" fill="none" />
        <circle cx="13" cy="8" r="3.2" fill="#1a1a1a" />
        <ellipse cx="8" cy="9" rx="4.5" ry="3" fill="#ffffff" opacity="0.7" transform="rotate(-20 8 9)" />
        <ellipse cx="18" cy="9" rx="4.5" ry="3" fill="#ffffff" opacity="0.7" transform="rotate(20 18 9)" />
      </svg>
    </motion.div>
  );
}
