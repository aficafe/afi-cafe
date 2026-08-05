import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext.jsx";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/historia", label: "Historia" },
  { to: "/afi", label: "AFI" },
  { to: "/productos", label: "Productos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contacto", label: "Contacto" },
];

const linkClass = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive
      ? "text-gold font-semibold"
      : "text-neutral-700 dark:text-white/80 hover:text-gold dark:hover:text-gold"
  }`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/60 text-gold hover:bg-gold hover:text-cafeBlack transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-cream/80 dark:bg-cafeBlack/80 border-b border-gold/20">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold tracking-wide">
          <span className="text-afiA">A</span>
          <span className="text-afiF">F</span>
          <span className="text-afiI">I</span>
          <span className="text-neutral-900 dark:text-white"> CAFÉ</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="text-neutral-900 dark:text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-gold/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
