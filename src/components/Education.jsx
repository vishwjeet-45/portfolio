import useReveal from '../hooks/useReveal';
import { useContent } from '../context/ContentContext';

export default function Education() {
  const ref = useReveal();
  const { content } = useContent();
  const { heading, items, highlightsHeading, highlights } = content.education;

  return (
    <section id="education" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">06</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>
        <div ref={ref} className="grid gap-4.5 mb-9" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
          {items.map((e) => (
            <div key={e.title} className="reveal bg-bg-raised border border-line rounded-[10px] p-5">
              <h3 className="text-base font-bold mb-1">{e.title}</h3>
              <div className="text-teal font-mono text-[13px] mb-1">{e.school}</div>
              <div className="text-text-dim font-mono text-xs">{e.meta}</div>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-amber text-sm">07</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{highlightsHeading}</span>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {highlights.map((h) => (
            <div key={h} className="reveal font-mono text-[13px] text-text bg-bg-raised border border-line px-4 py-2.5 rounded-full">
              <span className="text-teal">✓ </span>
              {h}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
