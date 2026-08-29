// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site —
// you shouldn't need to touch the component files for text changes.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Muhammad Arham',
  firstName: 'Muhammad',
  lastName: 'Arham',
  role: 'Front-End Developer / Software Engineer',
  tagline:
    'I build responsive, scalable, and user-centric web applications with clean, maintainable code.',
  location: 'Lahore, Pakistan',
  email: 'muhammadarham2177@gmail.com',
  phone: '+92-336-6641190',
  linkedin: 'https://www.linkedin.com/in/muhammad-arham-b12683331',
  github: 'https://github.com/muhammad-arham-dev',
  resumeUrl: '/Muhammad-Arham-Resume.pdf',
  avatar: '/profile.jpg',
  available: true,
}

export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stack = [
  'React.js',
  'Next.js',
  'JavaScript',
  'TailwindCSS',
  'HTML5',
  'CSS3',
  'Python',
  'Django',
  'REST APIs',
  'Git',
  'GitHub',
  'Vercel',
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a results-driven Software Engineer with hands-on experience in front-end development and modern JavaScript tooling. I recently completed a Software Engineering Internship at Grayphite, through the CMIT Internship Program, building responsive and user-centric web applications from the ground up.",
    "I care about writing clean, maintainable code and enjoy the process of turning a rough idea into a polished, working interface — then figuring out how to make it a little faster or a little clearer. Currently looking for a Front-End or Full-Stack role where I can keep building real products and keep growing as an engineer.",
  ],
  details: [
    { label: 'Name', value: 'Muhammad Arham' },
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Based in', value: 'Lahore, Pakistan' },
    { label: 'Phone', value: '+92-336-6641190' },
    { label: 'Email', value: 'muhammadarham2177@gmail.com' },
    { label: 'Focus', value: 'Front-End / Full-Stack' },
  ],
}

export const education = [
  {
    id: 'matric',
    degree: 'Marticulation',
    field: 'Computer Science',
    school: 'Al-Noor Group of Schools and Colleges, Lahore',
    period: '2017 — 2019',
    meta: '890 / 1100 Marks',
    status: 'Completed',
  },
  {
    id: 'ics',
    degree: 'Intermediate in Computer Science',
    field: 'Pre-Engineering / Computer Science',
    school: 'Govt. Islamia College, Civil Lines, Lahore',
    period: '2019 — 2021',
    meta: '791 / 1100 Marks',
    status: 'Completed',
  },
  {
    id: 'bs-it',
    degree: 'BS Information Technology',
    field: 'Information Technology',
    school: 'University of the Punjab',
    period: '2021 — 2025',
    meta: 'GPA 3.04 / 4.0',
    status: 'Completed',
  },
]

export const certifications = [
  {
    id: 'meta-fe',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
  },
  {
    id: 'ibm-py',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM · Coursera',
  },
]

export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Next.js'],
  backend: ['Python', 'Django', 'REST APIs'],
  tools: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Figma', 'VS Code'],
  soft: [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Adaptability',
    'Time Management',
    'Continuous Learning',
  ],
}

export const experience = [
  {
    id: 'grayphite',
    company: 'Grayphite — CMIT Internship Program 2025',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Worked as a Front-End Developer Intern focusing on modern web technologies and responsive UI development.',
      'Developed and maintained responsive web pages using HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js.',
      'Built multiple mini-projects to strengthen core front-end development concepts.',
      'Worked on real-world applications including a React-based e-commerce platform and a Lenz Pricing & Product webpage.',
      'Built and deployed projects using GitHub, Vercel, and Netlify.',
      'Gained practical experience in component-based architecture and reusable UI development.',
      'Collaborated in an internship environment focused on clean code practices and version control using GitHub.',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
]

//  swap `repo` / `live` with your real links, and drop a screenshot into
// /public for each project (see the `image` field) once you have one.
export const projects = [
  {
    id: 'ecommerce',
    index: '01',
    title: 'React E-Commerce Platform',
    description:
      'A React-based online store built during the Grayphite internship — product listings, cart flow, and a fully responsive shopping UI.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    type: 'Front-End',
    repo: 'https://github.com/muhammad-arham-dev/E-Commerce_Store.git',
    live: '',
    featured: false,
  },
  {
    id: 'lenz-pricing',
    index: '02',
    title: 'Lenz Pricing & Product Webpage',
    description:
      'A pricing and product showcase page focused on clean layout, clear hierarchy, and a conversion-friendly component structure.',
    tags: ['Next.js', 'Tailwind CSS'],
    type: 'Front-End',
    repo: profile.github,
    live: '',
    featured: false,
  },
  {
    id: 'more',
    index: '03',
    title: 'More on GitHub',
    description:
      'Mini-projects built while sharpening core front-end fundamentals — components, layouts, and small JavaScript utilities.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'Self-Learning',
    repo: profile.github,
    live: '',
    featured: false,
  },
]

export const contact = {
  heading: "Let's build something.",
  sub: "Have a role, a project, or just want to say hi? My inbox is open.",
}
