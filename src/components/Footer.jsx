import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope, FaYoutube } from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import FlyingBee from "./FlyingBee";
import HoneycombPattern from "./HoneycombPattern";

const social = [
  { href: "https://www.facebook.com/aficafe", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com/aficafe_ec", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.youtube.com/@aficafe_ec", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.tiktok.com/@aficafe_ec", label: "TikTok", Icon: FaTiktok },
  { href: "mailto:aficafeec@gmail.com", label: "Email", Icon: FaEnvelope },
];

const contactosWhatsApp = [
  { nombre: "Sr. Ángel Carvajal", numero: "593960992712" },
  { nombre: "Sra. Rosario Carvajal", numero: "593963962848" },
];

const quickLinks = [
  { to: "/historia", label: "Historia" },
  { to: "/proceso", label: "Proceso" },
  { to: "/afi", label: "¿Qué es AFI?" },
  { to: "/productos", label: "Productos" },
  { to: "/galeria", label: "Galería" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-gold/25 bg-cream/60 dark:bg-white/[0.02]">
      <HoneycombPattern className="text-gold" opacity={0.05} />
      <FlyingBee size={26} top="6%" left="6%" range={50} duration={10} />
      <FlyingBee size={18} top="55%" left="92%" range={30} duration={8} delay={1.5} />

      <div className="relative max-w-5xl mx-auto px-6 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
          {/* Marca */}
          <div>
            <p className="text-2xl font-bold tracking-wide">
              <span className="text-afiA">A</span>
              <span className="text-afiF">F</span>
              <span className="text-afiI">I</span>
              <span className="text-neutral-900 dark:text-white"> CAFÉ</span>
            </p>
            <p className="text-neutral-600 dark:text-white/60 text-sm mt-2 max-w-[220px] mx-auto sm:mx-0">
              Pasión por el café, respeto por la vida. Santo Domingo, Ecuador.
            </p>
            <div className="flex justify-center sm:justify-start gap-2.5 mt-5">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/60 text-gold hover:bg-gold hover:text-cafeBlack transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-4">EXPLORA</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-neutral-700 dark:text-white/70 text-sm hover:text-gold dark:hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-4">HAZ TU PEDIDO</p>
            <div className="flex flex-col items-center sm:items-start gap-2.5">
              {contactosWhatsApp.map((c) => (
                <a
                  key={c.numero}
                  href={`https://wa.me/${c.numero}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-2 rounded-full text-sm hover:bg-gold hover:text-cafeBlack transition-colors"
                >
                  <MessageCircle size={16} /> {c.nombre}
                </a>
              ))}
            </div>
            <p className="text-neutral-500 dark:text-white/50 text-xs mt-4 leading-relaxed max-w-[220px] mx-auto sm:mx-0">
              Finca El Rosario, recinto Cristóbal Colón, parroquia Valle Hermoso, Santo Domingo
              de los Tsáchilas, Ecuador.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/15 text-center">
          <p className="text-neutral-900 dark:text-white text-xs font-semibold tracking-wide">
            © 2026 AFI CAFÉ · TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="text-neutral-400 dark:text-white/40 text-[11px] leading-relaxed mt-3 max-w-2xl mx-auto">
            Fabricado y distribuido por Rosario del Carmen Carvajal Rumiguano — AFI CAFÉ, Finca
            El Rosario, Km. 19 vía Valle Hermoso - Los Bancos, recinto Cristóbal Colón, parroquia
            Valle Hermoso, Santo Domingo de los Tsáchilas, Ecuador. Notificación Sanitaria ARCSA
            N.º 8015454-ALN9673. Café tostado 100%, sin alérgenos ni sustancias añadidas.
            Conservar en un ambiente fresco y seco.
          </p>
        </div>
      </div>
    </footer>
  );
}
