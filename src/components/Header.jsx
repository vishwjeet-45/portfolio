const links = [
  { href: '#summary', label: 'summary' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#certifications', label: 'certifications' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <nav className="flex items-center justify-between py-4">
          <div className="font-mono font-bold text-[15px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal inline-block shadow-[0_0_8px_var(--color-teal)]" />
            VK<span className="text-text-dim font-normal">.dev</span>
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
