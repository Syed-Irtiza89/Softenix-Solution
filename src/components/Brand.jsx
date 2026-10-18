export default function Brand({ compact = false }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="Softenix Solution">
      <img
        src="/logo.png?v=3"
        alt="Softenix Solution"
        className={
          compact
            ? "h-12 w-auto object-contain sm:h-14"
            : "h-24 w-auto object-contain sm:h-28"
        }
      />
    </a>
  );
}
