# 🚀 Muhammad Arham — Portfolio

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- 🌙 Dark & Light mode with persistent preference
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎨 Smooth animations & scroll effects
- 📧 Working contact form (FormSubmit.co)
- 🎯 All content in one file for easy updates

---

## 🛠️ Tech Stack

- **React 18+** — UI Framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **FormSubmit.co** — Form handling

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup & Run

```bash
# Clone repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📝 Customization

### Update Content

All portfolio content is in a single file:
```
src/data/portfolioData.js
```

Edit to update:
- Personal info & contact details
- Education, skills, experience
- Projects
- Social media links

### Replace Images

- **Profile Photo:** `public/profile.jpg` (1000x1000px recommended)
- **Resume:** `public/Muhammad-Arham-Resume.pdf`

### Customize Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --color-bg: 11 15 20;        /* Dark mode background */
  --color-text: 245 247 250;   /* Dark mode text */
}

html.light {
  --color-bg: 240 250 248;     /* Light mode background */
  --color-text: 40 45 60;      /* Light mode text */
}
```

### Setup Contact Form

The form sends to `muhammadarham2177@gmail.com`.

To change email, update `src/components/Contact.jsx`:
```javascript
await fetch('https://formsubmit.co/YOUR_EMAIL@gmail.com', {
```

---

## 📂 Project Structure

```
src/
├── components/          # React components
├── data/
│   └── portfolioData.js # Content file
├── hooks/
│   └── useReveal.js    # Scroll animation hook
├── App.jsx             # Main app
└── index.css           # Global styles
```

---

## 🚀 Deploy

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Set framework to **Vite**
5. Click Deploy

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Build: `npm run build` | Publish: `dist`
5. Deploy

---

## 📞 Contact

- 📧 Email: [muhammadarham2177@gmail.com](mailto:muhammadarham2177@gmail.com)
- 📱 Phone: [+92-336-6641190](tel:+92-336-6641190)
- 💼 LinkedIn: [linkedin.com/in/muhammad-arham-b12683331](https://www.linkedin.com/in/muhammad-arham-b12683331)
- 🐙 GitHub: [github.com/muhammad-arham-dev](https://github.com/muhammad-arham-dev)

---

**Made with ❤️ by Muhammad Arham**
