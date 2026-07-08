import useReveal from '../hooks/useReveal';
import {
  SiPhp, SiJavascript, SiHtml5, SiCss, SiLaravel, SiLivewire, SiVuedotjs, SiReact,
  SiMysql, SiPostgresql, SiRedis, SiJsonwebtokens, SiPostman, SiGit, SiGithub,
  SiComposer, SiDocker, SiKubernetes, SiCodeigniter,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Database, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

const GROUPS = [
  {
    title: 'Languages',
    items: [
      { label: 'PHP', Icon: SiPhp },
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'HTML5', Icon: SiHtml5 },
      { label: 'CSS3', Icon: SiCss },
    ],
  },
  {
    title: 'Backend Frameworks',
    items: [
      { label: 'Laravel', Icon: SiLaravel },
      { label: 'Livewire', Icon: SiLivewire },
      { label: 'CodeIgniter', Icon: SiCodeigniter },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'Vue.js', Icon: SiVuedotjs },
      { label: 'React.js', Icon: SiReact },
    ],
  },
  {
    title: 'Database',
    items: [
      { label: 'MySQL', Icon: SiMysql },
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'MSSQL', Icon: Database },
    ],
  },
  {
    title: 'Auth & Security',
    items: [
      { label: 'JWT', Icon: SiJsonwebtokens },
      { label: 'Sanctum', Icon: ShieldCheck },
      { label: 'RBAC', Icon: ShieldCheck },
    ],
  },
  {
    title: 'Performance & Caching',
    items: [
      { label: 'Redis', Icon: SiRedis },
      { label: 'Eager Loading', Icon: Cpu },
      { label: 'Query Optimization', Icon: Cpu },
    ],
  },
  {
    title: 'AI & LLM',
    items: [
      { label: 'OpenAI / OpenRouter', Icon: Sparkles },
      { label: 'AI Agents', Icon: Cpu },
      { label: 'LLM Apps', Icon: Cpu },
    ],
  },
  {
    title: 'Tools & Cloud',
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'GitHub', Icon: SiGithub },
      { label: 'Postman', Icon: SiPostman },
      { label: 'Composer', Icon: SiComposer },
      { label: 'Docker', Icon: SiDocker },
      { label: 'Kubernetes', Icon: SiKubernetes },
      { label: 'AWS', Icon: FaAws },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">02</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">Technical Stack</span>
        </div>
        <div ref={ref} className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))' }}>
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="reveal bg-bg-raised border border-line rounded-[10px] p-5 hover:border-teal hover:-translate-y-0.5 transition-all"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-teal mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-text bg-[#16213A] border border-line px-2.5 py-1.5 rounded-md"
                  >
                    <Icon size={14} className="text-amber shrink-0" />
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
