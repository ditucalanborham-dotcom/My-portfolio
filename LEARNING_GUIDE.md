# 📚 Portfolio Website - Complete Learning Guide

## **Table of Contents**
1. [How It All Works](#how-it-all-works)
2. [Project Structure Explained](#project-structure-explained)
3. [Component Architecture](#component-architecture)
4. [Data Flow - How Information Moves](#data-flow)
5. [How to Modify & Extend](#how-to-modify--extend)
6. [Deployment to Vercel](#deployment-to-vercel)

---

## **How It All Works**

### **The Big Picture (Data Flow)**

```
┌─────────────────────────────────────────────┐
│ 1. Browser loads index.html                  │
│    └─> This is your entry HTML file         │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│ 2. index.html runs src/main.jsx            │
│    └─> This boots up your React app        │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│ 3. main.jsx renders App component          │
│    └─> App.jsx is your main page           │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│ 4. App imports & displays all components:   │
│    ├─> Navbar                               │
│    ├─> Hero                                 │
│    ├─> About                                │
│    ├─> Skills                               │
│    ├─> Projects                             │
│    ├─> Contact                              │
│    └─> Footer                               │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│ 5. Each component gets data from            │
│    src/data/portfolio.js                    │
│    └─> Centralized info storage             │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│ 6. Components render on screen              │
│    └─> User sees your beautiful portfolio! │
└─────────────────────────────────────────────┘
```

---

## **Project Structure Explained**

```
portfolio-website/
├── src/
│   ├── components/          👈 Your building blocks
│   │   ├── Navbar.jsx       (Navigation menu)
│   │   ├── Navbar.css       (Navbar styles)
│   │   ├── Hero.jsx         (Welcome section)
│   │   ├── Hero.css         (Hero styles)
│   │   ├── About.jsx        (Your story)
│   │   ├── About.css
│   │   ├── Skills.jsx       (What you can do)
│   │   ├── Skills.css
│   │   ├── Projects.jsx     (Your work)
│   │   ├── Projects.css
│   │   ├── Contact.jsx      (Contact form)
│   │   ├── Contact.css
│   │   ├── Footer.jsx       (Bottom section)
│   │   └── Footer.css
│   │
│   ├── data/                👈 Your information
│   │   └── portfolio.js     (Centralized data storage)
│   │
│   ├── pages/               👈 For future pages (if needed)
│   ├── styles/              👈 Global styles folder
│   │
│   ├── App.jsx              👈 Main page (combines all)
│   ├── App.css              👈 Global styles
│   ├── main.jsx             👈 React entry point
│   ├── index.css            👈 Basic styles
│   └── assets/              (images, icons, etc.)
│
├── public/                  (Static files)
├── index.html               👈 HTML entry point
├── package.json             (Dependencies list)
└── vite.config.js          (Build configuration)
```

### **Key Folders Explained:**

| Folder | Purpose | Example |
|--------|---------|---------|
| `components/` | Reusable UI pieces (building blocks) | `<Navbar />`, `<Hero />` |
| `data/` | Your information (centralized) | Name, email, projects list |
| `styles/` | Global CSS files | Animations, colors, themes |
| `pages/` | Full page components (future use) | Home, Blog, Portfolio pages |

---

## **Component Architecture**

A **component** is like a LEGO block. You build small blocks, then combine them to make something big.

### **Example: How Components Work**

```jsx
// Step 1: Create a component (e.g., Hero.jsx)
function Hero() {
  return (
    <section id="home">
      <h1>Hi, I'm Borham</h1>
      <p>Frontend Developer</p>
    </section>
  );
}

// Step 2: Export it
export default Hero;

// Step 3: Import in App.jsx
import Hero from "./components/Hero";

// Step 4: Use it
function App() {
  return (
    <div>
      <Hero />  {/* It displays here! */}
    </div>
  );
}
```

### **Component Communication (How Data Flows In)**

```jsx
// data/portfolio.js 📦 (Data source)
export const personalInfo = {
  name: "Borham Ditucalan",
  title: "Front-end Dev",
  email: "ditucalan.borham@s.msumain.edu.php",
};

// components/Hero.jsx 👇 (Component that uses data)
import { personalInfo } from "../data/portfolio";

function Hero() {
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
      <a href={`mailto:${personalInfo.email}`}>Email Me</a>
    </div>
  );
}
```

**Why this structure?**
- ✅ **Easy to update**: Change name in one place, updates everywhere
- ✅ **Clean code**: Components only show data, don't store it
- ✅ **Professional**: Real projects work this way
- ✅ **Scalable**: Easy to add features later

---

## **Data Flow - How Information Moves**

### **1. Where Your Information Lives**

File: `src/data/portfolio.js`

```javascript
export const personalInfo = {
  name: "Borham Ditucalan",
  title: "Front-end Dev",
  email: "ditucalan.borham@s.msumain.edu.php",
  // ... more info
};
```

### **2. How Components Use This Data**

```jsx
// In any component:
import { personalInfo } from "../data/portfolio";

function MyComponent() {
  return <p>Email: {personalInfo.email}</p>;
  // Displays: Email: ditucalan.borham@s.msumain.edu.php
}
```

### **3. Real Examples in Your Project**

#### **Example 1: Skills Display**
```jsx
// Data (portfolio.js)
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.JS"],
};

// Component (Skills.jsx)
{skills.frontend.map((skill, idx) => (
  <span key={idx}>{skill}</span> // Shows each skill
))}
```

#### **Example 2: Projects Display**
```jsx
// Data (portfolio.js)
export const projects = [
  {
    id: 1,
    name: "LearnCICS",
    technologies: ["React", "Python"],
  }
];

// Component (Projects.jsx)
{projects.map((project) => (
  <div key={project.id}>
    <h4>{project.name}</h4>
    {project.technologies.map(tech => <span>{tech}</span>)}
  </div>
))}
// Shows each project with its technologies
```

---

## **How to Modify & Extend**

### **Scenario 1: Update Your Name**

**Location**: `src/data/portfolio.js`

```javascript
export const personalInfo = {
  name: "YOUR NEW NAME", // 👈 Change here
  title: "Front-end Dev",
  // ...
};
```

**Result**: Name updates everywhere on the site! (Hero, Navbar, Footer)

### **Scenario 2: Add a New Project**

**Location**: `src/data/portfolio.js`

```javascript
export const projects = [
  {
    id: 1,
    name: "LearnCICS: A Moodle-Based LMS",
    description: "...",
    technologies: ["React", "Python", "Django"],
    githubLink: "https://github.com/yourlink",
    liveLink: "#",
    image: "/project1.jpg",
  },
  {
    id: 2, // 👈 Add new project
    name: "My New Project",
    description: "What it does...",
    technologies: ["React", "Node.js"],
    githubLink: "#",
    liveLink: "#",
    image: "/project2.jpg",
  }
];
```

**Result**: New project automatically shows in the Projects section!

### **Scenario 3: Change Colors/Styling**

**Location**: Component CSS files or `src/App.css`

```css
/* Current colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your favorite colors */
background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
```

### **Scenario 4: Add Social Links**

**Location**: `src/data/portfolio.js`

```javascript
export const personalInfo = {
  // ...
  socials: {
    github: "https://github.com/Borham02",
    linkedin: "https://linkedin.com/in/yourprofile", // 👈 Add
    twitter: "https://twitter.com/yourhandle",      // 👈 Add
  },
};
```

### **Scenario 5: Add a New Section**

**Step 1**: Create component file
```jsx
// src/components/Blog.jsx
function Blog() {
  return (
    <section id="blog">
      <h2>Latest Blog Posts</h2>
      {/* Your content */}
    </section>
  );
}
export default Blog;
```

**Step 2**: Import in App.jsx
```jsx
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* ... other components ... */}
      <Blog /> {/* 👈 Add here */}
      <Contact />
      <Footer />
    </>
  );
}
```

### **Scenario 6: Add a Contact Form Backend**

Currently, the form just shows a success message. To make it actually send emails:

**Option A: Using EmailJS (Easy)**
```bash
npm install @emailjs/browser
```

Then update Contact.jsx:
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

**Option B: Using Formspree (Easiest)**
- Go to formspree.io
- Create account
- Get form endpoint
- Change `<form>` to post to formspree

---

## **Deployment to Vercel**

### **Step 1: Push to GitHub**

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio setup"

# Create new repo on github.com then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### **Step 2: Deploy on Vercel**

1. Go to **https://vercel.com**
2. Click "**New Project**"
3. Import your GitHub repository
4. Click "**Deploy**"
5. Done! Your site is live! 🎉

Your URL will be: `https://portfolio-website.vercel.app`

### **Step 3: Custom Domain (Optional)**

1. In Vercel dashboard, go to **Settings**
2. Click **Domains**
3. Add your custom domain
4. Update DNS settings (Vercel will guide you)

### **Step 4: Auto-Deploy Updates**

Whenever you push changes to GitHub:
```bash
git add .
git commit -m "Update portfolio info"
git push
```

Vercel automatically rebuilds and deploys! ✨

---

## **Common Issues & Fixes**

### **Issue: Image broken on portfolio**

**Solution**: Add images to `public/` folder
```bash
# Copy images to public folder
public/
├── profile.jpg
├── project1.jpg
└── project2.jpg
```

Then update `portfolio.js`:
```javascript
profileImage: "/profile.jpg", // ← Correct path
```

### **Issue: Styling looks weird**

**Solution**: Make sure Bootstrap is imported in `App.jsx`:
```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

### **Issue: Links not working**

**Solution**: Make sure all links start with `#` for internal sections:
```javascript
socials: {
  github: "https://github.com/Borham02", // External link
  linkedin: "#about", // Internal link (starts with #)
}
```

---

## **Your Learning Checklist**

- [x] Understand component architecture
- [x] Learn how data flows from `portfolio.js` to components
- [x] Know where each section lives (Navbar, Hero, Skills, etc.)
- [ ] Try changing your name (in `portfolio.js`)
- [ ] Try adding a new skill
- [ ] Try adding a new project
- [ ] Try changing the colors
- [ ] Add your profile image
- [ ] Deploy to Vercel
- [ ] Share your portfolio!

---

## **Next Steps to Keep Learning**

1. **Add dark mode toggle** (Check Hero component for hints)
2. **Add smooth scroll animations** (CSS can do this!)
3. **Create a Blog section** (Follow the pattern in existing components)
4. **Add email functionality** (Use EmailJS)
5. **Create a GitHub API integration** (Show your real GitHub projects)

---

## **Quick Reference**

### **To modify YOUR information:**
- Location: `src/data/portfolio.js`
- Update: name, email, phone, bio, skills, projects, etc.

### **To change STYLING:**
- Global: `src/App.css`
- Per-section: `src/components/[SectionName].css`

### **To add a NEW COMPONENT:**
- Create: `src/components/MyComponent.jsx`
- Import in: `src/App.jsx`
- Add to: App's return statement

### **To deploy updates:**
```bash
git add .
git commit -m "Your message"
git push
# Vercel auto-deploys!
```

---

**You now understand EXACTLY how your portfolio works!**
**Go customize it and make it YOUR own!** 🚀
