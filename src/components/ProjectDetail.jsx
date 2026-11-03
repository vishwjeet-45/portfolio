import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ImageOff, Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import CommentSection from './CommentSection';

export default function ProjectDetail() {
  const { index } = useParams();
  const { content } = useContent();
  const items = content.projects.items || [];
  const project = items[Number(index)];
  const [activeImg, setActiveImg] = useState(0);

  // The router keeps the previous scroll position, so without this the page
  // opens scrolled down at the comments section. Always start at the top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveImg(0);
  }, [index]);

  if (!project) {
    return (
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-4 px-7 text-center">
        <p className="text-text-dim font-mono text-sm">Project not found.</p>
        <Link to="/#projects" className="text-amber font-mono text-sm hover:underline">
          ← Back to portfolio
        </Link>
      </div>
    );
  }

  const screenshots = project.screenshots || [];
  const listSections = [
    { title: 'Key features', items: project.highlights },
    { title: 'My contribution', items: project.responsibilities },
    { title: 'Challenges & solutions', items: project.challenges },
  ].filter((s) => s.items && s.items.length > 0);

  return (
    <div className="relative z-10 min-h-screen">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="max-w-[1080px] mx-auto px-7 py-12">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-text-dim hover:text-amber mb-8 transition-colors"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </Link>

        <div className="font-mono text-text-dim text-xs mb-2">{project.tag}</div>
        <h1 className="text-[clamp(28px,5vw,44px)] font-extrabold tracking-tight mb-4">{project.name}</h1>

        {project.feats && project.feats.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.feats.map((f) => (
              <span key={f} className="font-mono text-[11px] text-teal border border-line px-2 py-1 rounded-md">
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Screenshot gallery */}
        {screenshots.length > 0 ? (
          <div className="mb-9">
            <div className="bg-bg-raised border border-line rounded-xl overflow-hidden mb-3">
              <img src={screenshots[activeImg]} alt={project.name} className="w-full h-auto max-h-[520px] object-contain bg-[#0D1626]" />
            </div>
            {screenshots.length > 1 && (
              <div className="flex flex-wrap gap-2.5">
                {screenshots.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImg === i ? 'border-amber' : 'border-line hover:border-teal'
                    }`}
                  >
                    <img src={url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mb-9 bg-bg-raised border border-line rounded-xl p-10 flex flex-col items-center justify-center gap-2 text-text-dim">
            <ImageOff size={22} />
            <span className="font-mono text-xs">No screenshots added yet</span>
          </div>
        )}

        {project.role && (
          <div className="font-mono text-[13px] text-text-dim mb-4">
            Role: <span className="text-amber">{project.role}</span>
          </div>
        )}

        <h2 className="font-mono text-amber text-sm mb-2">// overview</h2>
        <p className="max-w-[760px] text-[16px] text-text-body leading-relaxed mb-9 whitespace-pre-wrap">
          {project.longDescription || project.desc}
        </p>

        {listSections.length > 0 && (
          <div className="grid gap-5 mb-9" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' }}>
            {listSections.map(({ title, items: list }) => (
              <div key={title} className="bg-bg-raised border border-line rounded-xl p-6">
                <h3 className="text-base font-bold mb-3">{title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {list.filter(Boolean).map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-text-body leading-relaxed">
                      <Check size={15} className="text-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {project.outcome && (
          <div className="max-w-[760px] border-l-2 border-teal pl-5 mb-9">
            <h3 className="font-mono text-teal text-sm mb-1.5">Outcome</h3>
            <p className="text-[15px] text-text-body leading-relaxed whitespace-pre-wrap">{project.outcome}</p>
          </div>
        )}

        {project.tech && (
          <div className="mb-8">
            <h3 className="font-mono text-amber text-sm mb-2">// tech stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.split('·').map((t) => t.trim()).filter(Boolean).map((t) => (
                <span key={t} className="font-mono text-[12px] text-text border border-line bg-bg-raised px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {project.links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[13px] text-amber hover:underline"
              >
                <ExternalLink size={14} /> {label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-[1080px] mx-auto px-7 pb-16">
        <CommentSection projectIndex={Number(index)} />
      </div>
    </div>
  );
}
