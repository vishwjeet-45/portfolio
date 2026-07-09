import { useEffect, useRef, useState } from 'react';
import { Download, Phone, Mail, MapPin, Link as LinkIcon } from 'lucide-react';
import { useContent } from '../context/ContentContext';

function useTypedTerminal(lines) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body || !lines || lines.length === 0) return;
    body.innerHTML = '';
    let cancelled = false;
    let li = 0;

    function typeLine() {
      if (cancelled) return;
      if (li >= lines.length) {
        const c = document.createElement('div');
        c.innerHTML = '<span class="text-teal">$ </span><span class="cursor-blink inline-block w-2 h-4 bg-amber align-middle"></span>';
        body.appendChild(c);
        return;
      }
      const entry = lines[li];
      const lineEl = document.createElement('div');
      lineEl.className = 'mb-1.5 whitespace-pre-wrap';
      const promptSpan = document.createElement('span');
      promptSpan.className = 'text-teal';
      promptSpan.textContent = '$ ';
      const typedSpan = document.createElement('span');
      lineEl.appendChild(promptSpan);
      lineEl.appendChild(typedSpan);
      body.appendChild(lineEl);

      let ci = 0;
      const typer = setInterval(() => {
        if (cancelled) { clearInterval(typer); return; }
        typedSpan.textContent += entry.t[ci];
        ci++;
        if (ci >= entry.t.length) {
          clearInterval(typer);
          setTimeout(() => {
            if (cancelled) return;
            const outEl = document.createElement('div');
            outEl.className = 'mb-1.5 whitespace-pre-wrap text-text';
            outEl.textContent = entry.out;
            body.appendChild(outEl);
            li++;
            setTimeout(typeLine, 380);
          }, 220);
        }
      }, 32);
    }

    typeLine();
    return () => { cancelled = true; };
  }, [lines]);

  return bodyRef;
}

export default function Hero() {
  const { content } = useContent();
  const hero = content.hero;
  const termBody = useTypedTerminal(hero.terminalLines);
  const [statsError, setStatsError] = useState(false);

  const githubUsername = (hero.githubUrl || '').replace(/\/$/, '').split('/').pop();

  return (
    <section className="relative z-10 pt-24 pb-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="font-mono text-[13px] text-teal flex items-center gap-2 mb-5">
          <span className="text-amber">$</span> whoami
        </div>

        <div className="flex flex-wrap items-start gap-6">
          {hero.photoUrl && (
            <img
              src={hero.photoUrl}
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-line shrink-0"
            />
          )}
          <h1 className="font-sans font-extrabold text-[clamp(32px,6vw,60px)] leading-[1.08] tracking-tight max-w-[820px]">
            {hero.headingBefore}{' '}
            <span className="text-amber">{hero.headingHighlight}</span>{' '}
            {hero.headingAfter}
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={hero.resumeUrl}
            download="Vishwjeet_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-hover text-bg font-mono font-bold text-[13.5px] px-6 py-3 rounded-lg transition-colors"
          >
            <Download size={16} strokeWidth={2.5} />
            Download Resume
          </a>
          <a
            href={hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line hover:border-teal text-text font-mono text-[13.5px] px-6 py-3 rounded-lg transition-colors"
          >
            <LinkIcon size={15} />
            View GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-9 max-w-[820px]">
          <div className="bg-bg-raised border border-line rounded-[10px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-line bg-[#0D1626]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e15c5c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#e2b23b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3fbf6f]" />
              <span className="ml-2 font-mono text-[11px] text-text-dim">vishwjeet@dev — laravel-stack</span>
            </div>
            <div ref={termBody} className="px-5 py-4.5 font-mono text-[13.5px] text-text-dim min-h-[150px]" />
          </div>

          {!statsError && githubUsername ? (
            <a
              href={hero.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-raised border border-line rounded-[10px] overflow-hidden flex items-center justify-center p-3 hover:border-teal transition-colors"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=F2A93B&icon_color=3FD3C6&text_color=CBD4E6&bg_color=00000000`}
                alt="GitHub stats"
                className="w-full h-auto"
                onError={() => setStatsError(true)}
              />
            </a>
          ) : (
            <div className="bg-bg-raised border border-line rounded-[10px] p-6 flex flex-col justify-center gap-2 font-mono text-[13px] text-text-dim">
              <span className="text-teal">GitHub stats unavailable offline —</span>
              <a href={hero.githubUrl} className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">
                {hero.githubUrl} ↗
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-3.5 mt-8 font-mono text-[13px] text-text-dim">
          <a href={`tel:${hero.phone}`} className="hover:text-amber flex items-center gap-1.5">
            <Phone size={14} /> {hero.phone}
          </a>
          <a href={`mailto:${hero.email}`} className="hover:text-amber flex items-center gap-1.5">
            <Mail size={14} /> {hero.email}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {hero.location}
          </span>
          <a
            href={hero.liveProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber flex items-center gap-1.5"
          >
            <LinkIcon size={14} /> {hero.liveProjectLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
