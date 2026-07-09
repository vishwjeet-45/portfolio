import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { Package, Link as LinkIcon } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  leetcode: SiLeetcode,
  packagist: Package,
};

function iconFor(label) {
  const key = (label || '').toLowerCase();
  for (const k of Object.keys(ICONS)) {
    if (key.includes(k)) return ICONS[k];
  }
  return LinkIcon;
}

export default function Footer() {
  const { content } = useContent();
  const f = content.footer;

  return (
    <footer id="contact" className="relative z-10 py-16 pb-10">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="reveal in-view bg-bg-raised border border-line rounded-2xl p-9 md:p-11 text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3.5">{f.heading}</h2>
          <p className="text-text-dim max-w-[520px] mx-auto mb-6">{f.subtext}</p>
          <div className="flex flex-wrap justify-center gap-3.5 mb-9">
            <a
              href={`mailto:${f.ctaEmail}`}
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg bg-amber hover:bg-amber-hover text-bg font-bold transition-colors"
            >
              Email me
            </a>
            <a
              href={`tel:${f.ctaPhone}`}
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg border border-line hover:border-amber hover:text-amber transition-colors"
            >
              Call: {f.ctaPhone}
            </a>
            <a
              href={f.ctaProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg border border-line hover:border-amber hover:text-amber transition-colors"
            >
              {f.ctaProjectLabel}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-line">
            {(f.socials || []).map(({ label, href }) => {
              const Icon = iconFor(label);
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[13px] text-text-dim hover:text-teal transition-colors"
                >
                  <Icon size={16} />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="text-center font-mono text-xs text-text-dim mt-9">{f.copyright}</div>
      </div>
    </footer>
  );
}
