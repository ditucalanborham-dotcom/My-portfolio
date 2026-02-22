# Borham Ditucalan - Portfolio Website 🚀

A modern, responsive portfolio website built with **React**, **Vite**, and **Bootstrap**.

[**Live Demo**](https://portfolio-website.vercel.app)

---

## 📸 Features

✨ **Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Smooth scrolling navigation
- Beautiful gradient theme
- Professional typography

🎯 **Fully Functional Sections**
- Hero Section - Eye-catching introduction
- About - Your story and education
- Skills - Technical abilities showcase
- Projects - Portfolio of work
- Contact Form - Direct communication
- Social Links - GitHub, LinkedIn, Email

⚡ **Performance**
- Fast load time (Vite + React)
- Optimized images
- Smooth animations
- Mobile-first design

🚀 **Deployment Ready**
- Deployed on Vercel
- Auto-updating from GitHub
- Zero-downtime deployments
- Custom domain support

---

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 8
- **Styling**: Bootstrap 5 + Custom CSS
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

---

## 📂 Project Structure

```
portfolio-website/
├── src/
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx & .css
│   │   ├── Hero.jsx & .css
│   │   ├── About.jsx & .css
│   │   ├── Skills.jsx & .css
│   │   ├── Projects.jsx & .css
│   │   ├── Contact.jsx & .css
│   │   └── Footer.jsx & .css
│   ├── data/
│   │   └── portfolio.js        # Your information (centralized)
│   ├── App.jsx & .css          # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                      # Static files (images)
├── index.html                   # HTML entry
├── package.json                 # Dependencies
└── vite.config.js              # Build config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Borham02/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "1234567890",
  // ... more info
};
```

### Add Your Projects

In the same file:

```javascript
export const projects = [
  {
    id: 1,
    name: "Project Title",
    description: "What it does",
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/yourlink",
    liveLink: "https://yourproject.com",
    image: "/project1.jpg",
  },
];
```

### Add Images

Place images in `public/` folder:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg` - Project screenshots

---

## 📝 Scripts

```bash
npm run dev       # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 🌐 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! 🎉

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed steps.

### Update Your Portfolio

```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push

# Vercel automatically rebuilds and deploys!
```

---

## 📚 Learning Resources

- **[LEARNING_GUIDE.md](./LEARNING_GUIDE.md)** - Comprehensive guide on how everything works
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **React Docs**: https://react.dev
- **Bootstrap Docs**: https://getbootstrap.com
- **Vercel Docs**: https://vercel.com/docs

---

## 🎯 What You Learned

By building this portfolio, you understand:

✅ **React Components** - Building reusable UI pieces
✅ **Data Management** - Centralizing information
✅ **CSS Styling** - Creating beautiful designs
✅ **Responsive Design** - Mobile-first approach
✅ **Git & GitHub** - Version control
✅ **Web Deployment** - Getting live on the internet
✅ **Best Practices** - Professional code structure

---

## 🚀 Next Steps

- [ ] Add more projects
- [ ] Implement email functionality (EmailJS)
- [ ] Add dark mode toggle
- [ ] Create a blog section
- [ ] Connect GitHub API
- [ ] Add animations
- [ ] Customize colors/theme
- [ ] Get your own domain

---

## 💡 Tips & Tricks

### Changing Colors
Edit `src/App.css` and change the gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Animations
All components have CSS animations. Modify `.css` files to customize them.

### Mobile Testing
Use DevTools (F12) → Click mobile icon → Select device

### SEO Optimization
Edit `index.html` → Change `<title>` and meta tags

---

## 🐛 Troubleshooting

### Issue: Build fails
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run build
```

### Issue: Images not loading
- Ensure images are in `public/` folder
- Use `/filename.jpg` path (not `./`)

### Issue: Styles not applied
- Make sure Bootstrap import is in `App.jsx`
- Check browser console for CSS errors

---

## 📧 Contact

**Name**: Borham Ditucalan  
**Email**: ditucalan.borham@s.msumain.edu.php  
**Phone**: 09639207136  
**Location**: Xavier Heights, Cagayan De Oro  
**GitHub**: https://github.com/Borham02

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🎉 Acknowledgments

Built with ❤️ using:
- React - UI Library
- Vite - Build Tool
- Bootstrap - CSS Framework
- Vercel - Hosting

---

**Ready to show the world your amazing skills?** 🚀
**Deploy your portfolio now and start getting noticed!**
