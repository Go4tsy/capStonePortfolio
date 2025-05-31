# Sean Etienne Portfolio

A modern, responsive portfolio website showcasing 3+ years of full-stack engineering experience.

## 🚀 Features

### ✨ Recent Improvements
- **Modern Home Page**: Enhanced hero section with animated tech stack showcase and professional statistics
- **Improved About Page**: Comprehensive skills display, experience timeline, and core values
- **User-Friendly Contact Form**: Modern form with validation, better UX, and professional layout
- **Enhanced Project Showcase**: Detailed project cards with technologies, GitHub links, and filtering
- **Fixed Mobile Navigation**: Resolved hamburger menu conflicts and improved responsive design
- **Easy Project Management**: JSON-based project system for easy updates

### 🛠 Technologies Used
- **Frontend**: React, JavaScript, HTML5, CSS3, Framer Motion
- **Styling**: Custom CSS with modern gradients and animations
- **Email**: EmailJS for contact form functionality
- **Deployment**: Netlify/Vercel ready
- **Analytics**: Google Analytics integration

## 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions
- Professional typography and spacing

## 🎨 Design Features
- Modern gradient backgrounds
- Smooth hover effects and animations
- Professional color scheme
- Clean, minimalist layout
- Accessible design principles

## 📂 Project Structure
```
src/
├── Components/
│   ├── AboutMe.js          # Enhanced about page
│   ├── Contact.js          # Improved contact form
│   └── Menu.js             # Fixed mobile navigation
├── Banner/
│   └── Banner.js           # Enhanced home page
├── Project Components/
│   ├── ProjectGrid.js      # Project showcase
│   ├── ProjectCard.js      # Individual project cards
│   └── projects.json       # Project data (moved to public/)
└── App.js                  # Main application
```

## 🔧 Adding New Projects

To add a new project, simply update the `public/projects.json` file:

```json
{
  "id": 7,
  "title": "Your Project Name",
  "description": "Detailed project description...",
  "image": "/Photos/project-image.png",
  "link": "https://your-project-link.com",
  "github": "https://github.com/username/repo",
  "technologies": ["React", "Node.js", "MongoDB"],
  "category": "Full-Stack",
  "featured": true,
  "completedDate": "2024",
  "challenges": "What challenges you faced...",
  "solutions": "How you solved them..."
}
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:
1. Create an EmailJS account
2. Update the service ID and template ID in `Contact.js`
3. Configure your email template

## 🎯 Performance Optimizations
- Lazy loading for components
- Optimized images
- Efficient animations
- Minimal bundle size

## 📈 Analytics
Google Analytics is integrated for tracking portfolio performance and user engagement.

---

Built with ❤️ by Sean Etienne | Full-Stack Engineer
