import { defaultContent } from './defaultContent';

// Projects that were renamed in defaultContent — old saved name → new name.
const RENAMED_PROJECTS = {
  'Multi-Vendor eCommerce': 'Vedic Vaani — Multi-Vendor eCommerce Platform',
  'Support on Wheels — NDIS Service Platform': 'Support on Wheels — NDIS Workforce Platform',
  'ClientSphere — Business CRM APIs': 'Tenon ClientSphere — Attendance & Compliance Platform',
};

// Updates saved projects with the latest default (resume) text while keeping
// what only the admin adds: screenshots, links and the saved order (comments
// are linked to a project by position). Projects the admin deleted are not
// re-added.
function syncProjects(items) {
  const defaults = defaultContent.projects.items;
  return items.map((item, i) => {
    const name = RENAMED_PROJECTS[item.name] || item.name;
    const def = defaults.find((d) => d.name === name);
    const synced = def
      ? {
          ...item,
          ...def,
          screenshots: item.screenshots?.length ? item.screenshots : def.screenshots,
          links: item.links?.length ? item.links : def.links,
        }
      : item;
    // Tag numbers ("01 / Open Source") follow the saved order, not the defaults.
    return { ...synced, tag: (synced.tag || '').replace(/^\d+/, String(i + 1).padStart(2, '0')) };
  });
}

// Replaces resume-driven text (summary, skills, experience, projects, hero
// text, footer subtext) with the latest defaults. Photos, resume file,
// testimonials, header, certifications and education are left untouched.
export function applyResumeContent(draft) {
  const { photoUrl, resumeUrl } = draft.hero;
  return {
    ...draft,
    contentVersion: defaultContent.contentVersion,
    hero: { ...draft.hero, ...defaultContent.hero, photoUrl, resumeUrl },
    summary: defaultContent.summary,
    skills: defaultContent.skills,
    experience: defaultContent.experience,
    projects: { ...draft.projects, items: syncProjects(draft.projects.items || []) },
    footer: { ...draft.footer, subtext: defaultContent.footer.subtext },
  };
}

// Saved content older than the current defaults (contentVersion bumped when
// resume content changes) is upgraded automatically, so the live site never
// shows stale text. Once the admin saves, the new version is stored and later
// admin edits are kept as-is.
export function upgradeContent(saved, merged) {
  return (saved.contentVersion || 1) < defaultContent.contentVersion ? applyResumeContent(merged) : merged;
}
