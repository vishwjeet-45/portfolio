# Vishwjeet Kumar — Portfolio (React + Tailwind CSS)

Yeh aapke original `index2.html` ka **React + Tailwind CSS** version hai, jisme requested sab updates add kiye gaye hain.

## Kya-kya update hua hai

1. **Hero Section** — GitHub stats card (live `github-readme-stats` widget) + **Resume Download** button add kiya gaya (`public/resume.pdf`).
2. **Skills Section** — Ab plain text pills ki jagah har skill ke saath **icon** hai (react-icons + lucide-react).
3. **Experience** — Naya timeline:
   - **DDT Software & Ecommerce Pvt Ltd** — Laravel Developer — *Sep 2025 – Present* (Current badge ke saath)
   - **Ipistis Technologies** — *Aug 2024 – Sep 2025*
   - **Hilt Web Solutions** — *Mar 2023 – Aug 2024*
   - Modern vertical timeline design (icon markers, current-role highlight).
4. **Projects** — Naye projects add kiye:
   - JobBot (Open Source Laravel AI Chatbot Package) — Packagist + GitHub links
   - Laravel API Boilerplate
   - AI Chatbot Engine
   - Multi-Tenant HMS
   - + baaki purane projects (MealBoy, Multi-Vendor eCommerce, AutoInspectPro, AI Job Portal)
5. **Certifications / Learning** — AWS, Docker, LLM Application Development, OpenAI/OpenRouter, Laravel Package Development — icon cards ke sath.
6. **Footer** — GitHub, LinkedIn, Email, LeetCode, Packagist links add kiye.
7. **Resume PDF** — Naye experience ke hisaab se resume bhi update karke `public/resume.pdf` me rakha gaya hai (Hero button se downloadable).

> Note: LinkedIn aur LeetCode ke links placeholder hain (`linkedin.com/in/vishwjeet-kumar`, `leetcode.com/vishwjeet-45`) — apna actual username daal ke `src/components/Footer.jsx` me update kar dena.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (dist/ folder)
npm run preview   # preview production build
```

Requires Node.js 18+.

## Project Structure

```
src/
  components/
    Header.jsx        — sticky nav
    Hero.jsx           — typing terminal, GitHub stats, resume download
    Summary.jsx
    Skills.jsx         — icon-based skill grid
    Experience.jsx     — modern timeline
    Projects.jsx       — project cards incl. new projects
    Certifications.jsx — learning/certification chips
    Education.jsx
    Footer.jsx         — social links
  hooks/
    useReveal.js        — scroll-reveal animation hook
  App.jsx
  index.css             — Tailwind v4 theme (dark navy / amber / teal palette, matches original design)
public/
  resume.pdf           — downloadable resume
```

## Tech

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- lucide-react + react-icons for iconography
- Same dark "terminal" visual identity as the original HTML (navy background, amber/teal accents, Space Mono + Manrope fonts)

## Editing content

All copy lives directly in the component files as small JS arrays/objects (e.g. `JOBS` in `Experience.jsx`, `PROJECTS` in `Projects.jsx`) — edit those to update text without touching markup/styles.
