import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full border border-gold text-gold bg-white dark:bg-cafeBlack flex items-center justify-center shadow-lg hover:bg-gold hover:text-cafeBlack transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
}
