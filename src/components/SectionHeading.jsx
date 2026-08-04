export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="text-gold text-xs font-semibold tracking-[0.2em] mb-2">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}
