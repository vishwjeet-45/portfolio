import useReveal from '../hooks/useReveal';
import { useContent } from '../context/ContentContext';

export default function Summary() {
  const ref = useReveal();
  const { content } = useContent();
  const { heading, text } = content.summary;
  return (
    <section id="summary" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">01</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>
        <p ref={ref} className="reveal max-w-[760px] text-[17px] text-text-body">
          {text}
        </p>
      </div>
    </section>
  );
}
