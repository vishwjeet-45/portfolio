import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ImageOff } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import CommentSection from './CommentSection';

export default function ProjectDetail() {
  const { index } = useParams();
  const { content } = useContent();
  const items = content.projects.items || [];
  const project = items[Number(index)];
  const [activeImg, setActiveImg] = useState(0);

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

        <p className="max-w-[760px] text-[16px] text-text-body leading-relaxed mb-8 whitespace-pre-wrap">
          {project.longDescription || project.desc}
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-8">
          {project.tech && <span className="font-mono text-[12.5px] text-text-dim">{project.tech}</span>}
        </div>

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
