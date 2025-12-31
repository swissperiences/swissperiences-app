# Photi Studios - Professional Podcast Production

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

> Premium landing page for Photi Studios, a professional podcast production company.

## 🎯 Project Overview

This is a high-performance, SEO-optimized landing page built with modern web technologies. The design follows a minimal, premium aesthetic inspired by industry-leading podcast studios.

### Key Features

- ⚡ **Performance First**: Lighthouse score > 95
- 📱 **Fully Responsive**: Mobile-first design approach
- ♿ **Accessible**: WCAG 2.1 AA compliance
- 🎨 **Smooth Animations**: Framer Motion powered interactions
- 🔍 **SEO Optimized**: Comprehensive meta tags and structured data
- 🎭 **Modern Design**: Clean, professional aesthetic

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Libraries

- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Google Fonts via next/font)

### Code Quality

- **Linting**: ESLint
- **Type Safety**: TypeScript Strict Mode
- **Formatting**: Prettier (recommended)

## 📁 Project Structure

```
photi-studios/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Fixed header with logo
│   │   ├── HeroSection.tsx      # Main hero with CTA
│   │   ├── ClientsMarquee.tsx   # Infinite scroll logos
│   │   └── Button.tsx           # Reusable button component
│   ├── fonts/                   # Font files (if needed)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles & design system
├── public/
│   └── logos/                   # Client logos (SVG/PNG)
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd photistudios

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Color Palette

```css
--color-primary: #000000;      /* Black */
--color-background: #F7F7F7;   /* Light Gray */
--color-text-primary: #000000; /* Black */
--color-text-secondary: #666666; /* Gray */
--color-accent: #FFFFFF;       /* White */
```

### Typography

- **Primary Font**: Inter (sans-serif)
- **Secondary Font**: Georgia (serif)

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📊 Performance

### Optimization Strategies

- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle
- ✅ CSS-in-JS with Tailwind (JIT)

### Target Metrics (Lighthouse)

- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

## ♿ Accessibility

This project follows WCAG 2.1 Level AA standards:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ ARIA labels where needed
- ✅ Color contrast ratio 4.5:1+
- ✅ Reduced motion support

## 🧪 Testing

```bash
# Run TypeScript type checking
npm run typecheck

# Run linting
npm run lint
```

## 📝 Component Documentation

### Header

Fixed position header with logo. Includes fade-in animation on page load.

```tsx
import { Header } from './components/Header';
```

### Hero Section

Main landing section with headline, subtitle, and CTA button. Implements staggered animation.

```tsx
import { HeroSection } from './components/HeroSection';
```

### Clients Marquee

Infinite horizontal scrolling showcase of client logos with hover effects.

```tsx
import { ClientsMarquee } from './components/ClientsMarquee';
```

### Button

Reusable button component with multiple variants and animations.

```tsx
import { Button } from './components/Button';

<Button variant="primary" showArrow>
  Click Me
</Button>
```

## 🚢 Deployment

### Recommended Platforms

- [Vercel](https://vercel.com) (Optimized for Next.js)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://photistudios.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, reach out to [contact@photistudios.com](mailto:contact@photistudios.com)

---

**Built with ❤️ by the Photi Studios team**
