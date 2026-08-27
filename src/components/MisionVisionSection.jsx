import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const items = [
  {
    icon: Target,
    label: "MISIÓN",
    text: "Ofrecer café Robusta 100% artesanal, cultivado y procesado bajo altos estándares de calidad, a quienes buscan una taza confiable y llena de carácter, demostrando que el Robusta ecuatoriano puede alcanzar el nivel de un café de especialidad.",
  },
  {
    icon: Eye,
    label: "VISIÓN",
    text: "Ser el referente del café Robusta de especialidad en Valle Hermoso y Santo Domingo de los Tsáchilas en los próximos cinco años, reconocidos por nuestra calidad y por inspirar a más fincas de la zona a sumarse a esta tradición cafetera.",
  },
];

export default function MisionVisionSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="border border-neutral-200 dark:border-white/10 rounded-2xl p-6 hover:border-gold transition-colors"
          >
            <item.icon size={28} className="text-gold mb-3" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-gold tracking-wide mb-2">{item.label}</p>
            <p className="text-neutral-700 dark:text-white/70 text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}