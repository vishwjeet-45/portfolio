import useReveal from '../hooks/useReveal';
import { SiDocker } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { BrainCircuit, PackagePlus, Sparkles } from 'lucide-react';

const ITEMS = [
  { label: 'AWS', sub: 'Cloud fundamentals', Icon: FaAws },
  { label: 'Docker', sub: 'Containerization', Icon: SiDocker },
  { label: 'LLM Application Development', sub: 'Prompting & RAG', Icon: BrainCircuit },
  { label: 'OpenAI / OpenRouter APIs', sub: 'AI integration', Icon: Sparkles },
  { label: 'Laravel Package Development', sub: 'Publishing on Packagist', Icon: PackagePlus },
];

export default function Certifications() {
  const ref = useReveal();
  return (
    <section id="certifications" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">05</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">Certifications &amp; Learning</span>
        </div>
        <div ref={ref} className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))' }}>
          {ITEMS.map(({ label, sub, Icon }) => (
            <div
              key={label}
              className="reveal bg-bg-raised border border-line rounded-[10px] p-5 flex items-center gap-3.5 hover:border-teal transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[#16213A] flex items-center justify-center text-amber">
                <Icon size={19} />
              </div>
              <div>
                <div className="text-[14.5px] font-bold text-text">{label}</div>
                <div className="font-mono text-[11.5px] text-text-dim">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
