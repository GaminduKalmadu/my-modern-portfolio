# Portfolio Website - Next.js

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🌓 Dark mode support
- 🎨 Tailwind CSS for styling
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Next.js
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend (optional):** Supabase

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/            # About page
│   ├── projects/         # Projects page
│   ├── skills/           # Skills page
│   ├── contact/          # Contact page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx
│   └── Footer.tsx
└── context/              # React context
    └── ThemeContext.tsx  # Theme management

```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Customization

### Update Personal Information

1. Edit the content in each page file (`src/app/*/page.tsx`)
2. Update contact information in `src/app/contact/page.tsx`
3. Add your own projects in `src/app/projects/page.tsx`
4. Modify skills in `src/app/skills/page.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Theme colors and dark mode: Modify Tailwind classes

## License

This project is open source and available under the MIT License.
