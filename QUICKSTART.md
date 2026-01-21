# Quick Start Guide

## ✅ Migration Complete!

Your project has been successfully converted from Vite + React Router to **Next.js 15** with TypeScript and Tailwind CSS.

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📁 New Project Structure

- `src/app/` - All your pages (file-based routing)
  - `page.tsx` - Home page (/)
  - `about/page.tsx` - About page (/about)
  - `projects/page.tsx` - Projects (/projects)
  - `skills/page.tsx` - Skills (/skills)
  - `contact/page.tsx` - Contact (/contact)
  - `layout.tsx` - Root layout (wraps all pages)
  - `globals.css` - Global styles

- `src/components/` - Reusable components
  - `Navigation.tsx` - Site navigation with dark mode
  - `Footer.tsx` - Site footer

- `src/context/` - React contexts
  - `ThemeContext.tsx` - Dark/light theme management

## 🎨 Key Features

✅ **Dark Mode** - Toggle in the navigation bar
✅ **Responsive Design** - Mobile-friendly
✅ **Fast Performance** - Next.js optimizations
✅ **TypeScript** - Type safety
✅ **Tailwind CSS** - Utility-first styling
✅ **SEO Ready** - Metadata API support

## 🔧 What Changed?

### Routing
- **Before:** React Router with `<BrowserRouter>` and `<Routes>`
- **After:** File-based routing in `src/app/` directory

### Links
- **Before:** `<Link to="/about">` from react-router-dom
- **After:** `<Link href="/about">` from next/link

### Navigation
- **Before:** `useLocation()` hook
- **After:** `usePathname()` hook

## 📝 Next Steps

1. **Customize Content:**
   - Update your name in `src/app/page.tsx`
   - Add your projects in `src/app/projects/page.tsx`
   - Update contact info in `src/app/contact/page.tsx`

2. **Add Images:**
   - Place images in `public/` folder
   - Use Next.js `<Image>` component for optimization

3. **Environment Variables:**
   - Create `.env.local` file
   - Prefix public variables with `NEXT_PUBLIC_`

4. **Deploy:**
   - Push to GitHub
   - Deploy to [Vercel](https://vercel.com) (one-click deployment)
   - Or use Netlify, AWS, etc.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### Type Errors
If you see TypeScript errors about `@types/node` or `@types/ws`, restart your editor or run:
```bash
npm install
```

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.)

### Dark Mode Not Working
Make sure your browser allows localStorage. The theme preference is saved there.

## 💡 Tips

- **Hot Reload:** Changes are reflected instantly during development
- **Client Components:** Add `'use client'` at the top of files that use hooks or browser APIs
- **Server Components:** Components are server components by default (faster)
- **Styling:** Use `dark:` prefix for dark mode styles

---

**Happy Coding! 🎉**

Your portfolio is now powered by Next.js!
