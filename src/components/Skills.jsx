import useReveal from '../hooks/useReveal';
import { CheckCircle2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Skills() {
  const ref = useReveal();
  const { content } = useContent();
  const { heading, groups } = content.skills;

  return (
    <section id="skills" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">02</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>
        <div ref={ref} className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))' }}>
          {groups.map((group) => (
            <div
              key={group.title}
              className="reveal bg-bg-raised border border-line rounded-[10px] p-5 hover:border-teal hover:-translate-y-0.5 transition-all"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-teal mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {(group.items || []).map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-text bg-[#16213A] border border-line px-2.5 py-1.5 rounded-md"
                  >
                    <CheckCircle2 size={14} className="text-amber shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
