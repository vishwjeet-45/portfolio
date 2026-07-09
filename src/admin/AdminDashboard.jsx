import { useEffect, useState } from 'react';
import { getDoc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, LogOut, Save, ExternalLink, Check, AlertTriangle } from 'lucide-react';
import { auth } from '../firebase';
import { contentDocRef } from '../context/ContentContext';
import { defaultContent } from '../defaultContent';

import HeaderEditor from './sections/HeaderEditor';
import HeroEditor from './sections/HeroEditor';
import SummaryEditor from './sections/SummaryEditor';
import SkillsEditor from './sections/SkillsEditor';
import ExperienceEditor from './sections/ExperienceEditor';
import ProjectsEditor from './sections/ProjectsEditor';
import TestimonialsEditor from './sections/TestimonialsEditor';
import CertificationsEditor from './sections/CertificationsEditor';
import EducationEditor from './sections/EducationEditor';
import FooterEditor from './sections/FooterEditor';

const TABS = [
  { key: 'header', label: 'Header', Editor: HeaderEditor },
  { key: 'hero', label: 'Hero', Editor: HeroEditor },
  { key: 'summary', label: 'Summary', Editor: SummaryEditor },
  { key: 'skills', label: 'Skills', Editor: SkillsEditor },
  { key: 'experience', label: 'Experience', Editor: ExperienceEditor },
  { key: 'projects', label: 'Projects', Editor: ProjectsEditor },
  { key: 'testimonials', label: 'Testimonials', Editor: TestimonialsEditor },
  { key: 'certifications', label: 'Certifications', Editor: CertificationsEditor },
  { key: 'education', label: 'Education', Editor: EducationEditor },
  { key: 'footer', label: 'Footer', Editor: FooterEditor },
];

export default function AdminDashboard() {
  const [draft, setDraft] = useState(null);
  const [activeTab, setActiveTab] = useState('hero');
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | saving | saved | error
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const snap = await getDoc(contentDocRef());
      setDraft(snap.exists() ? { ...defaultContent, ...snap.data() } : defaultContent);
    })();
  }, []);

  async function handleSave() {
    setStatus({ state: 'saving', message: '' });
    try {
      await setDoc(contentDocRef(), draft);
      setStatus({ state: 'saved', message: 'Saved! Site par 1-2 second me update dikhega.' });
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 3000);
    } catch (err) {
      setStatus({ state: 'error', message: 'Save fail hua — Firestore rules/connection check karo.' });
    }
  }

  async function handleLogout() {
    await signOut(auth);
    navigate('/admin/login');
  }

  if (!draft) {
    return <div className="min-h-screen flex items-center justify-center text-text-dim font-mono text-sm">Loading content…</div>;
  }

  const ActiveEditor = TABS.find((t) => t.key === activeTab)?.Editor;

  return (
    <div className="min-h-screen bg-bg text-text flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-line bg-bg-raised flex flex-col">
        <div className="px-5 py-5 border-b border-line flex items-center gap-2">
          <LayoutGrid size={17} className="text-amber" />
          <span className="font-mono font-bold text-sm">Admin Panel</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`w-full text-left px-5 py-2.5 text-sm font-mono transition-colors ${
                activeTab === t.key ? 'bg-bg text-amber border-r-2 border-amber' : 'text-text-dim hover:text-text'
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-line flex flex-col gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-teal font-mono"
          >
            <ExternalLink size={13} /> View live site
          </a>
          <button onClick={handleLogout} className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-red-400 font-mono">
            <LogOut size={13} /> Sign out
          </button>
        </div>
      </aside>

      {/* Main panel */}
      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-line px-8 py-4 flex items-center justify-between">
          <span className="font-mono text-xs text-text-dim">Editing: {TABS.find((t) => t.key === activeTab)?.label}</span>
          <div className="flex items-center gap-3">
            {status.state === 'saved' && (
              <span className="inline-flex items-center gap-1.5 text-xs text-teal font-mono">
                <Check size={14} /> {status.message}
              </span>
            )}
            {status.state === 'error' && (
              <span className="inline-flex items-center gap-1.5 text-xs text-red-400 font-mono">
                <AlertTriangle size={14} /> {status.message}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={status.state === 'saving'}
              className="inline-flex items-center gap-1.5 bg-amber hover:bg-amber-hover text-bg font-mono font-bold text-xs px-4 py-2 rounded-lg transition-colors disabled:opacity-60"
            >
              <Save size={14} /> {status.state === 'saving' ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </div>

        <div className="max-w-[720px] px-8 py-8">
          {ActiveEditor && (
            <ActiveEditor value={draft[activeTab]} onChange={(v) => setDraft((d) => ({ ...d, [activeTab]: v }))} />
          )}
        </div>
      </main>
    </div>
  );
}
