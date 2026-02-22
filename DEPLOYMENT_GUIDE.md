# 🚀 QUICK START & DEPLOYMENT GUIDE

## **What You Have**

Your portfolio has been created with:
- ✅ Beautiful responsive design
- ✅ Mobile-friendly navigation
- ✅ Contact form
- ✅ Skills showcase
- ✅ Projects section
- ✅ Dark professional styling

---

## **Before You Deploy (IMPORTANT!)**

### **1. Add Your Profile Image**

1. Copy your profile photo to: `portfolio-website/public/profile.jpg`
2. Make sure image is **300x300px** (square)
3. The site will create a circular frame automatically

### **2. Update Your Information**

Edit `src/data/portfolio.js` and update:

```javascript
export const personalInfo = {
  name: "Borham Ditucalan",           // Your name
  title: "Front-end Dev",             // Your title
  location: "Xavier Heights, CDO",    // Your location
  email: "your-email@example.com",    // Your email
  phone: "09639207136",               // Your phone
  bio: "Your bio here...",            // Your bio
  socials: {
    github: "https://github.com/Borham02",
    linkedin: "#", // Add your LinkedIn when ready
  },
};
```

### **3. Add/Update Your Projects**

In the same file, update the `projects` array:

```javascript
export const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "What does it do?",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/yourlink",
    liveLink: "https://yourproject.vercel.app",
    image: "/project1.jpg", // Add project screenshot here
  },
];
```

### **4. Add Project Images to Public Folder**

Add your project screenshots to `public/` folder:
```
public/
├── profile.jpg
├── project1.jpg
├── project2.jpg
```

---

## **Test Locally (Before Deploying)**

Your portfolio is already running at **http://localhost:5173/**

**Test these sections:**
- [ ] Navbar - Click all menu items (they should scroll smoothly)
- [ ] Hero section - Check if it looks good
- [ ] All sections are displaying properly
- [ ] Contact form works (shows success message)
- [ ] Responsive design (resize your browser window)
- [ ] Mobile view (use browser dev tools)

---

## **DEPLOYMENT TO VERCEL (Step-by-Step)**

### **STEP 1: Push to GitHub**

**If you already have Git installed:**

```bash
# Navigate to your project
cd "c:\Users\Anzalah\OneDrive\Documents\My-projects\My_portfolio\portfolio-website"

# Initialize git
git init

# Configure git (one time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

# Add all your files
git add .

# Create your first commit
git commit -m "Initial portfolio setup"
```

**If you don't have Git, install it:**
- Download from: https://git-scm.com/download/win
- Install and restart your terminal

### **STEP 2: Create a GitHub Repository**

1. Go to **https://github.com** and sign in (create account if needed)
2. Click **"+"** icon → **"New repository"**
3. Name it: `portfolio-website`
4. Click **"Create repository"**
5. You'll see commands - copy the ones for "push an existing repository"

They look like:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**Paste these in your terminal:**
```bash
cd "c:\Users\Anzalah\OneDrive\Documents\My-projects\My_portfolio\portfolio-website"

git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

It will ask for your GitHub password - enter it.

### **STEP 3: Deploy on Vercel**

1. Go to **https://vercel.com**
2. Click **"Sign Up"** → Continue with GitHub
3. Authorize Vercel to access GitHub
4. You'll be in Vercel dashboard
5. Click **"New Project"**
6. Find your `portfolio-website` repository
7. Click **"Import"**
8. Vercel auto-detects React + Vite settings
9. Click **"Deploy"**
10. Wait 2-3 minutes...
11. **Success!** 🎉 You'll get a live URL!

---

## **Your Live Portfolio URL**

After deployment, Vercel will give you:
- **Default**: `https://portfolio-website.vercel.app`
- **Custom**: You can add your own domain

---

## **How to Update Your Portfolio**

Every time you make changes:

```bash
# 1. Make your changes (edit files)

# 2. Go to your project folder
cd "c:\Users\Anzalah\OneDrive\Documents\My-projects\My_portfolio\portfolio-website"

# 3. Add changes
git add .

# 4. Save your changes
git commit -m "Updated skills"

# 5. Push to GitHub
git push
```

**Vercel automatically rebuilds and deploys!** ✨ (takes ~1 minute)

---

## **Common Update Scenarios**

### **Update Your Bio**
```javascript
// In src/data/portfolio.js
bio: "Updated bio text..."
// Then: git add . → git commit → git push
```

### **Add a New Skill**
```javascript
// In src/data/portfolio.js
frontend: ["HTML", "CSS", "JavaScript", "React.JS", "Tailwind CSS", "Bootstrap"] // Add here
// Then: git add . → git commit → git push
```

### **Add a New Project**
```javascript
// In src/data/portfolio.js
export const projects = [
  // existing projects...
  {
    id: 2,
    name: "New Project",
    description: "...",
    technologies: [...],
    githubLink: "...",
    liveLink: "...",
    image: "/project2.jpg",
  }
];
// Then: git add . → git commit → git push
```

---

## **Add a Custom Domain (Optional)**

**After portfolio is live on Vercel:**

1. Go to **Vercel Dashboard** → Your project
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `borhamdev.com`)
4. Vercel will show DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records Vercel provided
7. Wait 24 hours for DNS to propagate
8. Your domain is live! 🎉

---

## **Troubleshooting**

### **Issue: Vercel shows build error**

**Check:**
1. All dependencies installed? `npm install`
2. Syntax errors? Check the error message
3. Missing imports? Search for the import in files

### **Issue: Images not showing**

**Solution:**
- Images must be in `public/` folder
- Reference them as `/imagename.jpg` not `./imagename.jpg`

### **Issue: Style looks wrong**

**Make sure** in `App.jsx`:
```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

### **Issue: Can't push to GitHub**

**Try:**
```bash
# Check status
git status

# See your remote
git remote -v
```

---

## **Share Your Portfolio!**

Once it's live, share with:
- 📧 Email: Send link to friends/recruiters
- 💼 LinkedIn: Add URL to profile
- 🐙 GitHub profile: Link to both
- 👔 Job applications: Include portfolio URL
- 🚀 Social media: Share the link!

---

## **Celebration! 🎉**

You've made a professional portfolio website!

**You learned:**
- ✅ React components
- ✅ Data management
- ✅ Git & GitHub
- ✅ Web deployment
- ✅ How to update & iterate

**Next:** Keep updating it with new projects and skills!

---

## **Support & Resources**

- **React Docs**: https://react.dev
- **Bootstrap Docs**: https://getbootstrap.com
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com

---

**Your portfolio is ready!** 
**Now go deploy it and show the world what you can do!** 🚀
