import useReveal from '../hooks/useReveal';
import { ExternalLink, Package } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const PROJECTS = [
  {
    tag: '01 / Open Source',
    name: 'JobBot — Laravel AI Chatbot Package',
    desc: 'Open-source Laravel package powering AI chatbots for recruitment platforms — resume parsing, candidate search, and voice input, distributed via Packagist.',
    feats: ['AI Chatbot', 'Resume Parser', 'Voice Input', 'Custom Intents'],
    tech: 'Laravel Package · OpenRouter AI · PHP',
    links: [
      { label: 'Packagist', href: 'https://packagist.org/packages/ddt/jobbot', Icon: Package },
      { label: 'GitHub', href: 'https://github.com/vishwjeet-45', Icon: FaGithub },
    ],
    highlight: true,
  },
  {
    tag: '02 / Boilerplate',
    name: 'Laravel API Boilerplate',
    desc: 'Production-ready Laravel starter kit with authentication, RBAC, and a standardized REST API response layer — reused as the foundation across client projects.',
    feats: ['Sanctum Auth', 'RBAC', 'API Responses', 'Rate Limiting'],
    tech: 'Laravel · Sanctum · MySQL',
  },
  {
    tag: '03 / AI Integration',
    name: 'AI Chatbot Engine',
    desc: 'Reusable AI chatbot engine integrating OpenRouter / OpenAI models into Laravel apps, with intent detection and conversational context handling.',
    feats: ['Intent Detection', 'Context Memory', 'OpenRouter API'],
    tech: 'Laravel · OpenAI · Livewire',
  },
  {
    tag: '04 / Multi-Tenant SaaS',
    name: 'Multi-Tenant Hospital Management System',
    desc: 'Super-admin controlled, subdomain-based multi-tenant HMS with isolated tenant data, dynamic theming, and role-based access control.',
    feats: ['Tenant Isolation', 'Custom Domains', 'Dynamic Theming'],
    tech: 'Laravel · Vue.js · MySQL · Multi-Tenancy',
    links: [{ label: 'View project', href: 'https://hms.startupwebsupport.com/login', Icon: ExternalLink }],
  },
  {
    tag: '05 / Recruitment',
    name: 'AI Job Portal',
    desc: 'Full recruitment platform with an AI-powered chatbot for candidate assistance, resume parsing, skill extraction, and job recommendations.',
    feats: ['Job Recommendations', 'Resume Parsing', 'Employer Dashboard'],
    tech: 'Laravel · Livewire · AI · MySQL',
  },
  {
    tag: '06 / Food-Tech',
    name: 'MealBoy — Restaurant Ordering System',
    desc: 'Complete food ordering platform with cart, checkout, order lifecycle, user roles, and admin order tracking.',
    feats: ['Cart & Checkout', 'Order Tracking', 'Admin Dashboard'],
    tech: 'Laravel · Livewire · MySQL · REST API',
    links: [{ label: 'View project', href: 'https://mealboy.ipistisdemo.com', Icon: ExternalLink }],
  },
  {
    tag: '07 / Marketplace',
    name: 'Multi-Vendor eCommerce',
    desc: 'Backend APIs for a React-based multi-vendor eCommerce platform with vendor management and order workflows.',
    feats: ['Vendor Mgmt', 'Product APIs', 'React Integration'],
    tech: 'Laravel · React · MySQL · REST API',
    links: [{ label: 'View project', href: 'https://vedicvaani-front.vercel.app/', Icon: ExternalLink }],
  },
  {
    tag: '08 / Booking System',
    name: 'AutoInspectPro',
    desc: 'Appointment booking platform with calendar integration, real-time notifications, and role-based access.',
    feats: ['Calendar Booking', 'Notifications', 'RBAC'],
    tech: 'Laravel · MySQL',
    links: [{ label: 'View project', href: 'https://booking.smartcctvguard.com/login', Icon: ExternalLink }],
  },
];

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">04</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">Key Projects</span>
        </div>

        <div ref={ref} className="grid gap-5.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(310px,1fr))' }}>
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`reveal bg-bg-raised border rounded-xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all ${
                p.highlight ? 'border-teal/60 hover:border-teal' : 'border-line hover:border-amber'
              }`}
            >
              <div className="font-mono text-text-dim text-xs">{p.tag}</div>
              <div className="text-lg font-bold">{p.name}</div>
              <div className="text-text-dim text-sm grow">{p.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {p.feats.map((f) => (
                  <span key={f} className="font-mono text-[11px] text-teal border border-line px-2 py-1 rounded-md">
                    {f}
                  </span>
                ))}
              </div>
              {p.links && (
                <div className="flex flex-wrap gap-4 mt-1">
                  {p.links.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-amber hover:underline"
                    >
                      <Icon size={13} /> {label}
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
