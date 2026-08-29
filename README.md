# 🚀 Muhammad Arham — Professional Portfolio

> A modern, fully-responsive personal portfolio showcasing expertise in **Front-End Development** and **Software Engineering**. Built with cutting-edge technologies and designed for maximum impact.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Open%20to%20Work-2FD3AE?style=flat-square)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Portfolio Sections](#-portfolio-sections)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Build & Deploy](#-build--deploy)
- [📝 Customization](#-customization)
- [📂 Project Structure](#-project-structure)
- [👤 About](#-about)
- [📞 Contact](#-contact)

---

## ✨ Features

- ✅ **Dark Mode & Light Mode** — Seamless theme switching with persistent user preference
- ✅ **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- ✅ **Performance Optimized** — Fast load times with Vite bundler
- ✅ **Smooth Animations** — Elegant scroll-triggered reveal effects and floating animations
- ✅ **Interactive UI** — Hover effects, smooth transitions, and engaging micro-interactions
- ✅ **SEO Ready** — Semantic HTML and meta tags for discoverability
- ✅ **Contact Form** — FormSubmit.co integration for direct email notifications
- ✅ **One-File Configuration** — Easy content updates without touching components

---

## 🎯 Portfolio Sections

### 🏠 **Hero Section**
- Eye-catching introduction with gradient text effect
- Animated profile photo with orbiting decorations
- Call-to-action buttons (Explore Work, Download CV)
- Social media links (GitHub, LinkedIn, Email)
- Floating terminal card with developer info
- "Available for work" status badge
- Tech stack marquee with smooth scrolling

### 👤 **About Section**
- Professional bio and tagline
- Circular profile photo with spinning border effect
- Achievement badges (2+ Years of Learning, Frontend Developer)
- Detailed information grid (Name, Role, Location, Phone, Email, Focus)
- Two engaging paragraphs about professional background

### 🎓 **Education Section**
- Three-column education timeline with connecting line
- **Matriculation** — Al-Noor Group of Schools (2017-2019) | 890/1100 Marks
- **Intermediate in Computer Science** — Govt. Islamia College (2019-2021) | 791/1100 Marks
- **BS Information Technology** — University of the Punjab (2021-2025) | GPA 3.04/4.0
- Visual timeline design with status indicators
- **Certifications:** Meta Front-End Developer Certificate, IBM Python for Data Science

### 💡 **Skills Section**
Organized into 4 categories:

- **Frontend:** HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js
- **Backend:** Python, Django, REST APIs
- **Tools & Workflow:** Git, GitHub, Vercel, Netlify, Figma, VS Code
- **Soft Skills:** Problem Solving, Communication, Team Collaboration, Adaptability, Time Management, Continuous Learning

### 💼 **Experience Section**
- **Company:** Grayphite — CMIT Internship Program 2025
- **Role:** Software Engineer Intern
- **Period:** Jan 2026 — Jun 2026
- **Key Achievements:**
  - Front-End Developer Intern focusing on modern web technologies
  - Developed responsive web pages using React.js, Next.js, and Tailwind CSS
  - Built mini-projects and real-world applications
  - E-commerce platform and Lenz Pricing webpage development
  - Deployed projects using GitHub, Vercel, and Netlify
  - Learned component-based architecture and reusable UI development
  - Collaborated in professional environment with GitHub version control

### 🎨 **Projects Section**
- **Project 1:** React E-Commerce Platform
  - Technologies: React.js, Tailwind CSS, JavaScript
  - Description: Online store with product listings and cart flow
  - Repository: GitHub link provided

- **Project 2:** Lenz Pricing & Product Webpage
  - Technologies: Next.js, Tailwind CSS
  - Description: Pricing showcase with clean layout and conversion-friendly structure
  
- **Project 3:** More on GitHub
  - Technologies: HTML, CSS, JavaScript
  - Description: Mini-projects for learning core fundamentals

### 📧 **Contact Section**
- Professional contact heading: "Let's build something"
- **Multiple Contact Methods:**
  - 📍 **Location:** Lahore, Pakistan (with Google Maps link)
  - 📧 **Email:** muhammadarham2177@gmail.com
  - 📞 **Phone:** +92-336-6641190
- **Functional Contact Form:**
  - Name, Email, Message fields (all required)
  - Form validation
  - Direct email delivery via FormSubmit.co
  - Success/Error feedback messages
  - Auto-clear after submission

### 🔗 **Footer Section**
- Three-column layout: Navigation | Profile Info | Social Links
- Quick navigation links to all portfolio sections
- Profile summary with avatar
- Social media buttons (GitHub, LinkedIn, Email)
- Copyright information
- Centered background "ARHAM" watermark

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18+ (with Hooks)
- **Build Tool:** Vite (lightning-fast development)
- **Styling:** Tailwind CSS 3.0+
- **Language:** JavaScript (modern ES6+)

### Utilities & Features
- **Form Handling:** FormSubmit.co API
- **Animations:** CSS animations & Tailwind utilities
- **Icons:** Custom SVG components
- **Reveal Effects:** Scroll-triggered animations with Intersection Observer
- **Theme Management:** localStorage-based dark/light mode toggle

### Development
- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** Vercel / Netlify

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will open at `http://localhost:5173`

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Framework preset: **Vite**
5. Click "Deploy"

Your portfolio is now live! 🎉

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

---

## 📝 Customization

### 🎨 Easy Content Updates

**All portfolio content is centralized in one file:**

```
src/data/portfolioData.js
```

Simply edit this file to update:
- Personal information (name, role, bio, contact details)
- Education history and certifications
- Skills and technologies (organized by category)
- Work experience and achievements
- Projects showcase
- Social media links

No need to modify component files for content changes!

### 🖼️ Replace Images

- **Profile Photo:** `public/profile.jpg` (used in Hero, About, Footer)
  - Recommended size: 1000x1000px or larger
  
- **Resume PDF:** `public/Muhammad-Arham-Resume.pdf`
  - Update filename and link in `portfolioData.js` if needed

### 🎨 Customize Styling

- **Colors:** Edit CSS variables in `src/index.css`
  - Dark mode colors
  - Light mode colors
  - Supports full theme switching
  
- **Fonts:** Update Google Fonts link in `index.html`
- **Layout:** Modify component files in `src/components/`
- **Animations:** Adjust Tailwind animation utilities in component classNames

### 🌙 Theme System

The portfolio uses a robust theme system with automatic switching:
- **Dark Mode:** Default (dark background with light text)
- **Light Mode:** Soft, readable light theme
- Toggle in navbar - preference saved to localStorage

Edit CSS variables in `src/index.css`:

```css
:root {
  /* Dark mode colors (default) */
  --color-bg: 11 15 20;
  --color-text: 245 247 250;
  /* ... more variables ... */
}

html.light {
  /* Light mode colors */
  --color-bg: 250 250 252;
  --color-text: 40 45 60;
  /* ... more variables ... */
}
```

### 📧 Setup Contact Form

The contact form uses FormSubmit.co for email delivery:

1. Form is pre-configured for: `muhammadarham2177@gmail.com`
2. To change recipient, update in `src/components/Contact.jsx`:
   ```javascript
   await fetch('https://formsubmit.co/YOUR_EMAIL@gmail.com', {
   ```
3. Emails are sent directly to your inbox with sender information

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg                 # Profile photo (Hero, About, Footer)
│   ├── Muhammad-Arham-Resume.pdf   # Resume file for download
│   └── favicon.svg                 # Site favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar & theme toggle
│   │   ├── Hero.jsx                # Hero section with intro
│   │   ├── About.jsx               # About with photo & details
│   │   ├── Education.jsx           # Education timeline
│   │   ├── Skills.jsx              # Skills by category
│   │   ├── Experience.jsx          # Work experience
│   │   ├── Projects.jsx            # Project showcase
│   │   ├── Contact.jsx             # Contact form
│   │   ├── Footer.jsx              # Footer with links
│   │   ├── TypedRole.jsx           # Typing animation
│   │   ├── ThemeToggle.jsx         # Dark/light toggle
│   │   └── Icons.jsx               # SVG icon components
│   │
│   ├── hooks/
│   │   └── useReveal.js            # Scroll reveal animation hook
│   │
│   ├── data/
│   │   └── portfolioData.js        # ⭐ ALL CONTENT HERE
│   │
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles & theme variables
│   └── main.jsx                    # React entry point
│
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite build configuration
├── .stylelintrc.json               # Style linting rules
├── package.json                    # Dependencies & scripts
└── README.md                       # This file
```

---

## 👤 About

**Muhammad Arham** — Front-End Developer & Software Engineer

- 📍 **Location:** Lahore, Pakistan
- 💼 **Status:** Open to Front-End / Full-Stack opportunities
- 🎓 **Education:** BS Information Technology (University of the Punjab)
- 📈 **Experience:** 2+ Years of Learning, Grayphite Internship (2025-2026)
- 🎯 **Specialization:** Modern web development, component architecture, responsive design

### Professional Summary

I'm a results-driven Software Engineer with hands-on experience in front-end development and modern JavaScript tooling. I recently completed a Software Engineering Internship at Grayphite through the CMIT Internship Program, building responsive and user-centric web applications from the ground up.

I care about writing clean, maintainable code and enjoy the process of turning rough ideas into polished, working interfaces. Currently seeking a Front-End or Full-Stack role where I can keep building real products and keep growing as an engineer.

**Key Strengths:**
- ⚡ Fast learner with strong problem-solving skills
- 🔧 Hands-on experience with modern web technologies
- 📱 Responsive and mobile-first development
- 🎨 Clean code and component-based architecture
- 👥 Effective team collaboration and communication

---

## 📞 Contact & Connect

Feel free to reach out for opportunities, collaborations, or just to say hello!

| Method | Link |
|--------|------|
| 📧 **Email** | [muhammadarham2177@gmail.com](mailto:muhammadarham2177@gmail.com) |
| 📱 **Phone** | [+92-336-6641190](tel:+92-336-6641190) |
| 💼 **LinkedIn** | [linkedin.com/in/muhammad-arham-b12683331](https://www.linkedin.com/in/muhammad-arham-b12683331) |
| 🐙 **GitHub** | [github.com/muhammad-arham-dev](https://github.com/muhammad-arham-dev) |
| 📝 **Portfolio Form** | Available in Contact section |

---

## 📄 License

This portfolio is open source and available under the MIT License. Feel free to use this as a template for your own portfolio!

---

## 🙌 Credits & Technologies

- Built with [React](https://react.dev) & [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons created with custom SVG components
- Form handling via [FormSubmit.co](https://formsubmit.co)
- Animations using CSS & JavaScript
- Deployed on [Vercel](https://vercel.com)

---

## 📌 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Web Accessibility](https://www.w3.org/WAI/)

---

**Made with ❤️ by Muhammad Arham**

*Last updated: August 2026*

**Status:** Open to work | **Available:** January 2026 onwards
