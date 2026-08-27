import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACTOS = [
  { nombre: "Sr. Ángel Carvajal", numero: "593960992712" },
  { nombre: "Sra. Rosario Carvajal", numero: "593963962848" },
];
const MENSAJE = "Hola, quiero saber más sobre AFI CAFÉ";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-cafeBlack border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl p-2 flex flex-col gap-1 min-w-[220px]"
          >
            <p className="text-neutral-500 dark:text-white/50 text-[11px] uppercase tracking-widest px-2 pt-1 pb-1.5">
              Escríbenos por WhatsApp
            </p>
            {CONTACTOS.map((c) => (
              <a
                key={c.numero}
                href={`https://wa.me/${c.numero}?text=${encodeURIComponent(MENSAJE)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-800 dark:text-white px-2 py-2 rounded-lg hover:bg-gold/10 hover:text-gold transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366] shrink-0" /> {c.nombre}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar opciones de WhatsApp" : "Escríbenos por WhatsApp"}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {open ? (
          <X size={26} />
        ) : (
          <MessageCircle size={28} fill="white" strokeWidth={0} />
        )}
      </button>
    </div>
  );
}
