import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { Package } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/vishwjeet-45', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishwjeet-kumar', Icon: FaLinkedin },
  { label: 'Email', href: 'mailto:bishwjitkumaraur@gmail.com', Icon: FaEnvelope },
  { label: 'LeetCode', href: 'https://leetcode.com/vishwjeet-45', Icon: SiLeetcode },
  { label: 'Packagist', href: 'https://packagist.org/packages/ddt/jobbot', Icon: Package },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 py-16 pb-10">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="reveal in-view bg-bg-raised border border-line rounded-2xl p-9 md:p-11 text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extrabold mb-3.5">Let's build something scalable.</h2>
          <p className="text-text-dim max-w-[520px] mx-auto mb-6">
            Open to mid-level Laravel Developer roles — product-based, SaaS, and remote-first teams building with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mb-9">
            <a
              href="mailto:bishwjitkumaraur@gmail.com"
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg bg-amber hover:bg-amber-hover text-bg font-bold transition-colors"
            >
              Email me
            </a>
            <a
              href="tel:+919546977391"
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg border border-line hover:border-amber hover:text-amber transition-colors"
            >
              Call: +91 9546977391
            </a>
            <a
              href="https://hms.startupwebsupport.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13.5px] px-5.5 py-3 rounded-lg border border-line hover:border-amber hover:text-amber transition-colors"
            >
              View live HMS project
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-line">
            {SOCIALS.map(({ label, href, Icon }) => (
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
            ))}
          </div>
        </div>
        <div className="text-center font-mono text-xs text-text-dim mt-9">
          © 2026 Vishwjeet Kumar · Aurangabad, Bihar, India · Built with Laravel-grade attention to detail.
        </div>
      </div>
    </footer>
  );
}
