import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Bug, CalendarCheck, Sun, ListChecks } from "lucide-react";

const stats = [
  { value: 90, suffix: "%", label: "Polinización orgánica por abejas", Icon: Bug },
  { value: 2016, suffix: "", label: "Año en que rescatamos la finca", Icon: CalendarCheck },
  { value: 15, suffix: " días", label: "De secado natural al sol", Icon: Sun },
  { value: 5, suffix: " pasos", label: "De proceso artesanal", Icon: ListChecks },
];

function Stat({ value, suffix, label, Icon, delay }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const start = () => {
    if (started.current) return;
    started.current = true;
    const duration = 1400;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={start}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <span className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-3">
        <Icon size={24} className="text-gold" strokeWidth={1.75} />
      </span>
      <p className="text-3xl md:text-4xl font-bold text-gold leading-none">
        {count}
        {suffix}
      </p>
      <p className="text-neutral-600 dark:text-white/60 text-sm mt-3 max-w-[160px] mx-auto leading-snug">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-14">
      <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.07] dark:from-gold/[0.05] dark:via-transparent dark:to-gold/[0.05] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 max-w-3xl mx-auto place-items-center">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
