import useReveal from '../hooks/useReveal';

export default function Summary() {
  const ref = useReveal();
  return (
    <section id="summary" className="relative z-10 py-16 border-b border-line">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex items-baseline gap-3.5 mb-9">
          <span className="font-mono text-amber text-sm">01</span>
          <span className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight">Summary</span>
        </div>
        <p ref={ref} className="reveal max-w-[760px] text-[17px] text-text-body">
          Full Stack Laravel Developer with <b className="text-text font-bold">3+ years of hands-on experience</b> building
          scalable SaaS applications, RESTful APIs, AI-powered solutions, and enterprise web platforms using{' '}
          <b className="text-text font-bold">Laravel, Livewire, Vue.js, React, MySQL, PostgreSQL, MSSQL, and Redis</b>.
          Strong expertise in <b className="text-text font-bold">multi-tenant architecture</b>, AI chatbot integration,
          authentication &amp; authorization, database optimization, and{' '}
          <b className="text-text font-bold">open-source Laravel package development</b>. Currently leading backend work
          on AI-integrated SaaS products at DDT Software &amp; Ecommerce Pvt Ltd, with a proven track record delivering
          Hospital Management Systems, Job Portals, CRMs, and eCommerce platforms.
        </p>
      </div>
    </section>
  );
}
