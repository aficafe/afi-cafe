import { motion } from "framer-motion";

export default function BrandBanner() {
  return (
    <section className="bg-cafeBlack py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gold text-xs font-semibold tracking-[0.3em] mb-4">
          NUESTRO COMPROMISO
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
          PASIÓN POR EL CAFÉ,
          <br />
          RESPETO POR LA VIDA.
        </h2>
      </motion.div>
    </section>
  );
}
