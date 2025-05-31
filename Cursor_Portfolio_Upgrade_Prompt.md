# 🧠 Cursor AI Prompt: Portfolio Optimization & Upgrade

## 🔧 Project Context
You're upgrading a personal portfolio built in **Next.js** (with TypeScript and Tailwind CSS), hosted on **Netlify or Vercel**. The goal is to scale the project, track analytics, and enable dynamic content with CMS capabilities — all while keeping the code clean and modular.

---

## 🎯 Objectives

1. Enable easy management of projects and blog posts (via JSON or Markdown)
2. Track resume downloads and page views with analytics
3. Prepare for optional CMS integration (Sanity/Contentful)
4. Make the site mobile-responsive and accessible
5. Maintain current code quality and modular structure

---

## 📁 Required Folder Structure

```
/public
  └── resume.pdf
  └── images/

/components
  ├── ProjectCard.tsx
  ├── BlogPostPreview.tsx
  └── TagFilter.tsx

/pages
  ├── index.tsx
  ├── projects/index.tsx
  ├── projects/[slug].tsx
  ├── blog/index.tsx
  ├── blog/[slug].tsx
  ├── api/download-resume.ts
  └── contact.tsx (optional)

/data
  ├── projects.json
  └── blogPosts.json

/lib
  ├── analytics.ts
  └── markdownParser.ts (optional)

/styles
  └── globals.css
```

---

## 📦 Install Packages

Run the following:
```bash
npm install plausible-tracker gray-matter remark remark-html firebase
```

---

## 📊 Analytics Setup

Use [Plausible.io](https://plausible.io/) or Google Analytics.

Create `/lib/analytics.ts` and track:
- Page views
- Resume downloads (as custom events)

---

## 📁 Dynamic Content System

Use `.json` or `.md` files inside `/data` for projects and blog posts. Each project should follow this format:

```json
{
  "title": "CrewLay",
  "slug": "crewhub",
  "description": "Layover planner for flight crews",
  "techStack": ["Next.js", "Firebase", "Tailwind"],
  "github": "https://github.com/goatsy/crewhub",
  "live": "https://crewhub.vercel.app",
  "image": "/images/crewhub-thumb.jpg",
  "date": "2025-05-20"
}
```

Implement `[slug].tsx` pages for both blogs and projects.

---

## 📄 Resume Download Tracking

Create `/pages/api/download-resume.ts`:
```ts
export default async function handler(req, res) {
  // Log the event to Firestore or local file
  res.redirect("/resume.pdf");
}
```

Update resume download link in the UI:
```tsx
<a href="/api/download-resume" download>Download Resume</a>
```

---

## 🧱 CMS Integration (Optional)

Setup Sanity or Contentful and link to your project:
- Add `lib/sanityClient.ts`
- Pull in data via GROQ or GraphQL
- Fallback to local `/data` files if CMS is unavailable

---

## ♿ Accessibility & Responsiveness

- Add `alt` attributes to all images
- Use semantic HTML and `aria` roles where appropriate
- Make all components responsive using Tailwind utilities

---

## 🛑 Implementation Rules

- Do not overwrite or break existing working code
- Keep code modular: use components and utility files
- Use TypeScript for all files
- Leave comments explaining all new or changed code

---

## ✅ Outcome

A fully upgraded, analytics- and CMS-ready personal portfolio, with tracked downloads, dynamic project/blog content, mobile-first responsiveness, and accessibility support — perfect for showcasing to recruiters or hiring managers.
