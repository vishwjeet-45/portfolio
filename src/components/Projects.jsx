import useReveal from '../hooks/useReveal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export default function Projects() {
  const ref = useReveal();
  const navigate = useNavigate();
  const { content } = useContent();
  const { heading, items } = content.projects;

  return (
    <section id="projects" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">04</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>

        <div ref={ref} className="grid gap-5.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(310px,1fr))' }}>
          {items.map((p, i) => (
            <div
              key={p.name}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/projects/${i}`)}
              onKeyDown={(e) => (e.key === 'Enter' ? navigate(`/projects/${i}`) : null)}
              className={`reveal group cursor-pointer bg-bg-raised border rounded-xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all ${
                p.highlight ? 'border-teal/60 hover:border-teal' : 'border-line hover:border-amber'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-text-dim text-xs">{p.tag}</div>
                <ArrowUpRight size={16} className="text-text-dim group-hover:text-amber transition-colors" />
              </div>
              <div className="text-lg font-bold">{p.name}</div>
              <div className="text-text-dim text-sm grow">{p.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {(p.feats || []).map((f) => (
                  <span key={f} className="font-mono text-[11px] text-teal border border-line px-2 py-1 rounded-md">
                    {f}
                  </span>
                ))}
              </div>
              {p.links && p.links.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-1">
                  {p.links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-amber hover:underline"
                    >
                      <ExternalLink size={13} /> {label}
                    </a>
                  ))}
                </div>
              )}
              <div className="font-mono text-[11.5px] text-text-dim border-t border-line pt-2.5 mt-1">{p.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
