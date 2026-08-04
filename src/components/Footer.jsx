import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope, FaYoutube } from "react-icons/fa";
import { href } from "react-router-dom";

const social = [
  { href: "https://www.facebook.com/aficafe", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com/aficafe_ec", label: "Instagram", Icon: FaInstagram },
  {href:"https://www.youtube.com/@aficafe_ec", label: "YouTube", Icon: FaYoutube},
  { href: "https://www.tiktok.com/@aficafe_ec", label: "TikTok", Icon: FaTiktok },
  { href: "mailto:aficafeec@gmail.com", label: "Email", Icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-neutral-200 dark:border-white/10 mt-10">
      <p className="text-neutral-900 dark:text-white text-sm font-semibold">
        © 2026 AFI CAFÉ. TODOS LOS DERECHOS RESERVADOS.
      </p>
      <p className="text-neutral-500 dark:text-white/60 text-xs mt-1">
        SANTO DOMINGO - ECUADOR. PASIÓN POR EL CAFÉ, RESPETO POR LA VIDA.
      </p>
      <div className="flex justify-center gap-3 mt-5">
        {social.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-cafeBlack transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </footer>
  );
}
