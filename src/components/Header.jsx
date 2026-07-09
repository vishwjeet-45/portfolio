import { useContent } from '../context/ContentContext';

export default function Header() {
  const { content } = useContent();
  const { brand, brandSuffix, links } = content.header;

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <nav className="flex items-center justify-between py-4">
          <div className="font-mono font-bold text-[15px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal inline-block shadow-[0_0_8px_var(--color-teal)]" />
            {brand}
            <span className="text-text-dim font-normal">{brandSuffix}</span>
          </div>
          <div className="hidden md:flex gap-7 font-mono text-[13px] text-text-dim">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-amber transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
