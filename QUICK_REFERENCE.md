# ⚡ QUICK REFERENCE - Common Tasks

## 📝 Update Information (Easy Tasks)

### Change Your Name
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  name: "YOUR NEW NAME", // 👈 Change here
```

### Change Your Title  
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  title: "Full-Stack Developer", // 👈 Change here
```

### Change Your Email
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  email: "newemail@example.com", // 👈 Change here
```

### Change Your Phone
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  phone: "09XXXXXXXXX", // 👈 Change here
```

### Change Your Bio
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  bio: "Your new bio text goes here...", // 👈 Change here
```

---

## 🎨 Add/Update Skills

### Add a New Skill
```javascript
// File: src/data/portfolio.js
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.JS", "Tailwind CSS", "NEW_SKILL"], // 👈 Add here
```

### Add a New Skill Category
```javascript
// File: src/data/portfolio.js
export const skills = {
  frontend: [...],
  backend: [...],
  mobile: ["Flutter", "React Native"], // 👈 Add new category
};
```

---

## 📁 Add/Update Projects

### Add a New Project
```javascript
// File: src/data/portfolio.js
export const projects = [
  {
    id: 1,
    name: "LearnCICS: A Moodle-Based LMS",
    // ... existing project
  },
  {
    id: 2, // 👈 New project
    name: "Project Name",
    description: "What does this project do?",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourlink",
    liveLink: "https://yourproject.vercel.app",
    image: "/project2.jpg",
  }
];
```

### Add Project Image
1. Create image (square format recommended)
2. Save as `/project2.jpg` in `public/` folder
3. Update `image: "/project2.jpg"` in portfolio.js

---

## 🔗 Add/Update Social Links

### Add LinkedIn
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  socials: {
    github: "https://github.com/Borham02",
    linkedin: "https://linkedin.com/in/yourprofile", // 👈 Add here
  },
};
```

### Add Twitter
```javascript
// File: src/data/portfolio.js
export const personalInfo = {
  socials: {
    github: "https://github.com/Borham02",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle", // 👈 Add here
  },
};
```

---

## 🎨 Change Colors

### Change Main Gradient Color
```css
/* File: src/App.css - line ~49 */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
  /* 👆 Change these colors (HEX codes) */
}

/* Change to something like: */
background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
```

### Hex Color Suggestions
- Purple: `#7c3aed`
- Blue: `#3b82f6`
- Green: `#10b981`
- Pink: `#ec4899`
- Orange: `#f97316`
- Use [colorhexa.com](https://colorhexa.com) to find colors

### Change Text Color
```css
/* File: src/App.css */
.text-primary {
  color: #667eea !important; /* 👈 Change here */
}
```

---

## 🌟 Add New Sections

### Add Section Template
```jsx
// File: src/components/NewSection.jsx
import React from "react";
import "./NewSection.css";

function NewSection() {
  return (
    <section id="newsection">
      <div className="container">
        <h2>Section Title</h2>
        {/* Your content */}
      </div>
    </section>
  );
}

export default NewSection;
```

### Create CSS File
```css
/* File: src/components/NewSection.css */
#newsection {
  background-color: #f8f9fa;
  padding: 80px 0;
}

#newsection h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
```

### Add to App.jsx
```jsx
// File: src/App.jsx
import NewSection from "./components/NewSection"; // 👈 Add import

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewSection /> {/* 👈 Add here */}
      <Contact />
      <Footer />
    </>
  );
}
```

### Add to Navbar
```jsx
// File: src/components/Navbar.jsx - in the nav links
<li className="nav-item">
  <a className="nav-link" href="#newsection"> {/* 👈 Add */}
    New Section
  </a>
</li>
```

---

## 📤 Upload & Deploy Changes

### Save Changes to GitHub

**Step 1**: Add changes
```bash
cd "c:\Users\Anzalah\OneDrive\Documents\My-projects\My_portfolio\portfolio-website"
git add .
```

**Step 2**: Describe changes
```bash
git commit -m "Updated skills and projects"
```

**Step 3**: Push to GitHub
```bash
git push
```

**Result**: Vercel automatically rebuilds your site! ✨

---

## 🐛 Testing Changes Locally

### View Changes Before Deploying

```bash
# Start server (if not already running)
cd "c:\Users\Anzalah\OneDrive\Documents\My-projects\My_portfolio\portfolio-website"
npx vite
```

Visit `http://localhost:5173` in browser and check:
- [ ] Changes look good
- [ ] Mobile view works (press F12, click device icon)
- [ ] Links work
- [ ] Images display

### Check for Errors

Look at browser console:
- Open DevTools: `F12`
- Click **Console** tab
- Look for red error messages

---

## 📱 Mobile Responsive Testing

### Test on Different Devices

In DevTools (F12):
1. Click device icon
2. Select device:
   - iPhone 12
   - iPad
   - Galaxy S21
3. Check if looks good

### Common Responsive Issues
- Text too small? Increase font size in CSS
- Image broken? Check path in portfolio.js
- Layout weird? Check Bootstrap classes

---

## 🔍 SEO & Meta Tags

### Change Website Title
```html
<!-- File: index.html -->
<title>Borham Ditucalan - Portfolio</title> <!-- 👈 Change here -->
```

### Add Description
```html
<!-- File: index.html -->
<meta name="description" content="Full-stack developer showcasing projects and skills">
```

---

## 🔐 Security & Best Practices

### NEVER Commit Sensitive Data
Don't include:
- ❌ API keys
- ❌ Passwords
- ❌ Private tokens

### Keep Dependencies Updated
```bash
npm outdated          # See what's outdated
npm update            # Update packages
npm audit            # Check security
```

---

## 📧 Setup Email (Optional)

### Using EmailJS (Free)

1. Go to [emailjs.com](https://emailjs.com) and sign up
2. Get your Service ID, Template ID, Public Key
3. Install package:
```bash
npm install @emailjs/browser
```

4. Update Contact.jsx:
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

---

## 🚀 Deploy New Domain

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add domain (e.g., `yourname.com`)
5. Follow DNS instructions
6. Wait 24 hours for DNS propagation

---

## 🆘 Quick Troubleshooting

### Nothing shows up
- Check console for errors (F12)
- Is the server running? (`http://localhost:5173`)
- Try refresh (Ctrl+R)

### Styles look broken
- Clear browser cache: `Ctrl+Shift+Delete`
- Rebuild: `npm run build`

### Images not showing
- Are they in `public/` folder?
- Check path: `/image.jpg` not `./image.jpg`

### Deploy failed
- Check Vercel dashboard for error
- Ensure no syntax errors: `npm run build`

---

## 📞 Need Help?

**Error Message?**
1. Copy the error
2. Search it on Google
3. Check component file for typos

**Code not updating?**
1. Save file (Ctrl+S)
2. Check live server is running
3. Refresh browser (Ctrl+R)

**Stuck?**
- Check [LEARNING_GUIDE.md](./LEARNING_GUIDE.md)
- Check component code for examples
- Ask ChatGPT: "How to [task] in React"

---

**This is your quick reference!**
**Bookmark this for common tasks!** 📚
