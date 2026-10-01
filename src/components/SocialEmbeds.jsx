import { useEffect, useRef, useState } from "react";

const TIKTOK_SCRIPT = "https://www.tiktok.com/embed.js";
const INSTAGRAM_SCRIPT = "https://www.instagram.com/embed.js";

/* Escapa texto para meterlo de forma segura dentro del HTML del embed */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Se activa una sola vez, cuando el bloque está a punto de verse en pantalla.
   Así los videos no ralentizan la carga de la página. */
function useOnceVisible(rootMargin = "300px") {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, rootMargin]);

  return [ref, seen];
}

/* Vuelve a cargar el script para que escanee los embeds recién insertados */
function loadScript(src) {
  const old = document.querySelector(`script[src="${src}"]`);
  if (old) old.remove();
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

function EmbedShell({ innerRef, seen, html, placeholder }) {
  return (
    <div ref={innerRef} className="flex justify-center min-h-[320px]">
      {seen ? (
        /* React no toca el interior: TikTok/Instagram lo reemplazan por su iframe */
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className="self-center text-neutral-400 dark:text-white/40 text-xs">{placeholder}</p>
      )}
    </div>
  );
}

export function TikTokEmbed({ id, url, texto }) {
  const [ref, seen] = useOnceVisible();

  useEffect(() => {
    if (seen) loadScript(TIKTOK_SCRIPT);
  }, [seen]);

  const html = `<blockquote class="tiktok-embed" cite="${esc(url)}" data-video-id="${esc(
    id
  )}" style="max-width:605px;min-width:325px;"><section><a target="_blank" rel="noreferrer" href="${esc(
    url
  )}">${esc(texto)}</a></section></blockquote>`;

  return <EmbedShell innerRef={ref} seen={seen} html={html} placeholder="Cargando video…" />;
}

export function InstagramEmbed({ url }) {
  const [ref, seen] = useOnceVisible();

  useEffect(() => {
    if (!seen) return;
    if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    else loadScript(INSTAGRAM_SCRIPT);
  }, [seen]);

  const html = `<blockquote class="instagram-media" data-instgrm-permalink="${esc(
    url
  )}" data-instgrm-version="14" style="background:#fff;border:0;border-radius:3px;margin:0;max-width:540px;min-width:326px;width:100%;"><a target="_blank" rel="noreferrer" href="${esc(
    url
  )}">Ver publicación en Instagram</a></blockquote>`;

  return <EmbedShell innerRef={ref} seen={seen} html={html} placeholder="Cargando publicación…" />;
}
