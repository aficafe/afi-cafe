import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ContactoSection() {
  return (
    <section id="contacto" className="max-w-5xl mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex justify-center">
          <SectionHeading eyebrow="HABLEMOS" title="¿Quieres hacer un pedido?" />
        </div>
        <p className="text-neutral-700 dark:text-white/70 mb-8 -mt-4">
          Escríbenos por WhatsApp o Instagram y te ayudamos con tu pedido.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/593960992712"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-cafeBlack transition-colors"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href="https://instagram.com/aficafe_ec"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-neutral-300 dark:border-white/20 text-neutral-800 dark:text-white px-6 py-2 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href="mailto:aficafeec@gmail.com"
            className="flex items-center gap-2 border border-neutral-300 dark:border-white/20 text-neutral-800 dark:text-white px-6 py-2 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
