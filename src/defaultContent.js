// This is the fallback content shown on the live site whenever Firestore
// has no saved data yet (or a field wasn't edited). Once you save changes
// from /admin, Firestore data overrides these defaults automatically.

export const defaultContent = {
  header: {
    brand: 'VK',
    brandSuffix: '.dev',
    links: [
      { href: '#summary', label: 'summary' },
      { href: '#skills', label: 'skills' },
      { href: '#experience', label: 'experience' },
      { href: '#projects', label: 'projects' },
      { href: '#testimonials', label: 'testimonials' },
      { href: '#certifications', label: 'certifications' },
      { href: '#education', label: 'education' },
      { href: '#contact', label: 'contact' },
    ],
  },

  hero: {
    headingBefore: 'Vishwjeet Kumar — building',
    headingHighlight: 'scalable Laravel & AI-powered systems',
    headingAfter: 'for product & SaaS teams.',
    photoUrl: '',
    resumeUrl: '/resume.pdf',
    githubUrl: 'https://github.com/vishwjeet-45',
    phone: '+91 9546977391',
    email: 'bishwjitkumaraur@gmail.com',
    location: 'Aurangabad, Bihar, India',
    liveProjectLabel: 'Portfolio / Live Project',
    liveProjectUrl: 'https://hms.startupwebsupport.com/login',
    terminalLines: [
      { t: 'whoami', out: 'vishwjeet-kumar — laravel developer' },
      { t: 'cat experience.txt', out: '3+ years · multi-tenant SaaS · AI chatbots · REST APIs' },
      { t: 'php artisan stack:list', out: 'Laravel · Livewire · Vue.js · React · MySQL · Redis' },
      { t: 'status', out: 'open to mid-level roles — product / SaaS / remote' },
    ],
  },

  summary: {
    heading: 'Summary',
    text: "Full Stack Laravel Developer with 3+ years of hands-on experience building scalable SaaS applications, RESTful APIs, AI-powered solutions, and enterprise web platforms using Laravel, Livewire, Vue.js, React, MySQL, PostgreSQL, MSSQL, and Redis. Strong expertise in multi-tenant architecture, AI chatbot integration, authentication & authorization, database optimization, and open-source Laravel package development. Currently leading backend work on AI-integrated SaaS products at DDT Software & Ecommerce Pvt Ltd, with a proven track record delivering Hospital Management Systems, Job Portals, CRMs, and eCommerce platforms.",
  },

  skills: {
    heading: 'Technical Stack',
    groups: [
      { title: 'Languages', items: ['PHP', 'JavaScript', 'HTML5', 'CSS3'] },
      { title: 'Backend Frameworks', items: ['Laravel', 'Livewire', 'CodeIgniter'] },
      { title: 'Frontend', items: ['Vue.js', 'React.js'] },
      { title: 'Database', items: ['MySQL', 'PostgreSQL', 'MSSQL'] },
      { title: 'Auth & Security', items: ['JWT', 'Sanctum', 'RBAC'] },
      { title: 'Performance & Caching', items: ['Redis', 'Eager Loading', 'Query Optimization'] },
      { title: 'AI & LLM', items: ['OpenAI / OpenRouter', 'AI Agents', 'LLM Apps'] },
      { title: 'Tools & Cloud', items: ['Git', 'GitHub', 'Postman', 'Composer', 'Docker', 'Kubernetes', 'AWS'] },
    ],
  },

  experience: {
    heading: 'Professional Experience',
    jobs: [
      {
        role: 'Laravel Developer',
        company: 'DDT Software & Ecommerce Pvt Ltd',
        date: 'Sep 2025 — Present',
        current: true,
        points: [
          'Leading backend development for AI-integrated SaaS products, including multi-tenant platforms and chatbot systems.',
          'Architected and maintain the JobBot open-source Laravel AI chatbot package, published on Packagist.',
          'Built LLM-powered resume parsing and candidate-search features using OpenRouter AI integration.',
          'Own database design and query optimization across MySQL, PostgreSQL, and Redis-backed caching.',
        ],
      },
      {
        role: 'Laravel / PHP Developer',
        company: 'Ipistis Technologies',
        date: 'Aug 2024 — Sep 2025',
        current: false,
        points: [
          'Developed enterprise-grade Laravel applications with role-based authentication and authorization.',
          'Built scalable REST APIs and Livewire-based dynamic interfaces.',
          'Improved application performance using Redis, eager loading, caching, and optimized SQL queries.',
          'Worked with MySQL, PostgreSQL, and Microsoft SQL Server in production environments.',
          'Participated in deployment, code reviews, and production support.',
        ],
      },
      {
        role: 'Laravel / PHP Developer',
        company: 'Hilt Web Solutions',
        date: 'Mar 2023 — Aug 2024',
        current: false,
        points: [
          'Developed Laravel and CodeIgniter applications with secure authentication systems.',
          'Built reusable backend modules and optimized database queries.',
          'Collaborated with frontend developers and integrated payment gateways & third-party APIs.',
        ],
      },
    ],
  },

  projects: {
    heading: 'Key Projects',
    items: [
      {
        tag: '01 / Open Source',
        name: 'JobBot — Laravel AI Chatbot Package',
        desc: 'Open-source Laravel package powering AI chatbots for recruitment platforms — resume parsing, candidate search, and voice input, distributed via Packagist.',
        feats: ['AI Chatbot', 'Resume Parser', 'Voice Input', 'Custom Intents'],
        tech: 'Laravel Package · OpenRouter AI · PHP',
        links: [
          { label: 'Packagist', href: 'https://packagist.org/packages/ddt/jobbot' },
          { label: 'GitHub', href: 'https://github.com/vishwjeet-45' },
        ],
        highlight: true,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '02 / Boilerplate',
        name: 'Laravel API Boilerplate',
        desc: 'Production-ready Laravel starter kit with authentication, RBAC, and a standardized REST API response layer — reused as the foundation across client projects.',
        feats: ['Sanctum Auth', 'RBAC', 'API Responses', 'Rate Limiting'],
        tech: 'Laravel · Sanctum · MySQL',
        links: [],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '03 / AI Integration',
        name: 'AI Chatbot Engine',
        desc: 'Reusable AI chatbot engine integrating OpenRouter / OpenAI models into Laravel apps, with intent detection and conversational context handling.',
        feats: ['Intent Detection', 'Context Memory', 'OpenRouter API'],
        tech: 'Laravel · OpenAI · Livewire',
        links: [],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '04 / Multi-Tenant SaaS',
        name: 'Multi-Tenant Hospital Management System',
        desc: 'Super-admin controlled, subdomain-based multi-tenant HMS with isolated tenant data, dynamic theming, and role-based access control.',
        feats: ['Tenant Isolation', 'Custom Domains', 'Dynamic Theming'],
        tech: 'Laravel · Vue.js · MySQL · Multi-Tenancy',
        links: [{ label: 'View project', href: 'https://hms.startupwebsupport.com/login' }],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '05 / Recruitment',
        name: 'AI Job Portal',
        desc: 'Full recruitment platform with an AI-powered chatbot for candidate assistance, resume parsing, skill extraction, and job recommendations.',
        feats: ['Job Recommendations', 'Resume Parsing', 'Employer Dashboard'],
        tech: 'Laravel · Livewire · AI · MySQL',
        links: [],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '06 / Food-Tech',
        name: 'MealBoy — Restaurant Ordering System',
        desc: 'Complete food ordering platform with cart, checkout, order lifecycle, user roles, and admin order tracking.',
        feats: ['Cart & Checkout', 'Order Tracking', 'Admin Dashboard'],
        tech: 'Laravel · Livewire · MySQL · REST API',
        links: [{ label: 'View project', href: 'https://mealboy.ipistisdemo.com' }],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '07 / Marketplace',
        name: 'Multi-Vendor eCommerce',
        desc: 'Backend APIs for a React-based multi-vendor eCommerce platform with vendor management and order workflows.',
        feats: ['Vendor Mgmt', 'Product APIs', 'React Integration'],
        tech: 'Laravel · React · MySQL · REST API',
        links: [{ label: 'View project', href: 'https://vedicvaani-front.vercel.app/' }],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
      {
        tag: '08 / Booking System',
        name: 'AutoInspectPro',
        desc: 'Appointment booking platform with calendar integration, real-time notifications, and role-based access.',
        feats: ['Calendar Booking', 'Notifications', 'RBAC'],
        tech: 'Laravel · MySQL',
        links: [{ label: 'View project', href: 'https://booking.smartcctvguard.com/login' }],
        highlight: false,
        longDescription: '',
        screenshots: [],
      },
    ],
  },

  testimonials: {
    heading: 'Testimonials',
    items: [],
  },
  // Note: each testimonial item shape: { name, role, quote, imageUrl, rating (1-5) }

  certifications: {
    heading: 'Certifications & Learning',
    items: [
      { label: 'AWS', sub: 'Cloud fundamentals' },
      { label: 'Docker', sub: 'Containerization' },
      { label: 'LLM Application Development', sub: 'Prompting & RAG' },
      { label: 'OpenAI / OpenRouter APIs', sub: 'AI integration' },
      { label: 'Laravel Package Development', sub: 'Publishing on Packagist' },
    ],
  },

  education: {
    heading: 'Education',
    items: [
      { title: 'Diploma in Computer Science', school: 'Suresh Gyan Vihar University', meta: '2024 · 7.5 CGPA' },
      { title: '10th Standard', school: 'Bihar School Examination Board (BSEB)', meta: '2021 · 63.4%' },
    ],
    highlightsHeading: 'Additional Highlights',
    highlights: [
      'Strong experience with multi-tenant SaaS systems',
      'Hands-on with AI chatbot & LLM integration',
      'Comfortable with product-based architectures',
      'Hands-on with performance optimization & debugging',
    ],
  },

  footer: {
    heading: "Let's build something scalable.",
    subtext: 'Open to mid-level Laravel Developer roles — product-based, SaaS, and remote-first teams building with AI.',
    ctaEmail: 'bishwjitkumaraur@gmail.com',
    ctaPhone: '+91 9546977391',
    ctaProjectLabel: 'View live HMS project',
    ctaProjectUrl: 'https://hms.startupwebsupport.com/login',
    socials: [
      { label: 'GitHub', href: 'https://github.com/vishwjeet-45' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/vishwjeet-kumar' },
      { label: 'Email', href: 'mailto:bishwjitkumaraur@gmail.com' },
      { label: 'LeetCode', href: 'https://leetcode.com/vishwjeet-45' },
      { label: 'Packagist', href: 'https://packagist.org/packages/ddt/jobbot' },
    ],
    copyright: '© 2026 Vishwjeet Kumar · Aurangabad, Bihar, India · Built with Laravel-grade attention to detail.',
  },
};
