import { defaultContent } from '../defaultContent';

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
  return items.map((item) => {
    const name = RENAMED_PROJECTS[item.name] || item.name;
    const def = defaults.find((d) => d.name === name);
    if (!def) return item;
    return {
      ...item,
      ...def,
      screenshots: item.screenshots?.length ? item.screenshots : def.screenshots,
      links: item.links?.length ? item.links : def.links,
    };
  });
}

// Replaces resume-driven text (summary, skills, experience, projects, hero
// text, footer subtext) with the latest defaults. Photos, resume file,
// testimonials, header, certifications and education are left untouched.
export function applyResumeContent(draft) {
  const { photoUrl, resumeUrl } = draft.hero;
  return {
    ...draft,
    hero: { ...draft.hero, ...defaultContent.hero, photoUrl, resumeUrl },
    summary: defaultContent.summary,
    skills: defaultContent.skills,
    experience: defaultContent.experience,
    projects: { ...draft.projects, items: syncProjects(draft.projects.items || []) },
    footer: { ...draft.footer, subtext: defaultContent.footer.subtext },
  };
}
