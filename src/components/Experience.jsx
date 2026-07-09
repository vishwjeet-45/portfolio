import useReveal from '../hooks/useReveal';
import { Briefcase } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function Experience() {
  const ref = useReveal();
  const { content } = useContent();
  const { heading, jobs } = content.experience;

  return (
    <section id="experience" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">03</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">{heading}</span>
        </div>

        <div ref={ref} className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
          <div className="flex flex-col gap-11">
            {jobs.map((job) => (
              <div key={job.company} className="reveal relative">
                <div
                  className={`absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    job.current ? 'bg-amber border-amber shadow-[0_0_0_5px_rgba(242,169,59,0.15)]' : 'bg-bg-raised border-line'
                  }`}
                >
                  <Briefcase size={11} className={job.current ? 'text-bg' : 'text-text-dim'} />
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[19px] font-bold">{job.role}</span>
                  {job.current && (
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-bg bg-teal px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-teal font-mono text-[13px] mt-0.5">{job.company}</div>
                <div className="text-text-dim font-mono text-[12.5px] mt-0.5 mb-3.5">{job.date}</div>
                <ul className="flex flex-col gap-2 max-w-[680px]">
                  {(job.points || []).map((p) => (
                    <li key={p} className="relative pl-4.5 text-text-body text-[14.5px]">
                      <span className="absolute left-0 text-amber font-mono">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
