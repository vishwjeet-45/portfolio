import useReveal from '../hooks/useReveal';
import { Quote, User } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Testimonials() {
  const ref = useReveal();
  const { content } = useContent();
  const { heading, items } = content.testimonials || { heading: 'Testimonials', items: [] };

  if (!items || items.length === 0) return null;

  return (
    <section id="testimonials" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">★</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>
        <div ref={ref} className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' }}>
          {items.map((t, i) => (
            <div
              key={i}
              className="reveal bg-bg-raised border border-line rounded-[10px] p-6 flex flex-col gap-4 hover:border-teal transition-colors"
            >
              <Quote size={20} className="text-amber shrink-0" />
              <p className="text-text-body text-[14.5px] grow">{t.quote}</p>
              <div className="flex items-center gap-3 pt-3 border-t border-line">
                {t.imageUrl ? (
                  <img src={t.imageUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-line" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#16213A] border border-line flex items-center justify-center text-text-dim">
                    <User size={18} />
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-text">{t.name}</div>
                  <div className="font-mono text-[11.5px] text-text-dim">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
