# Swissperiences 🇨🇭

Premium curated Swiss experiences platform - connecting discerning travelers with exclusive, invite-only hosts across Switzerland.

## 🚀 Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth)
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Project Structure

```
src/
├── pages/           # Route pages (Home, Experiences, Corporate, About, ExperienceDetail)
├── components/      # Reusable components (Navbar, Footer, ExperienceCard, InquiryModal)
├── lib/            # Utilities (Supabase client)
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component with routing
├── main.tsx        # Application entry point
└── index.css       # Global styles & Tailwind imports
```

## 🛠️ Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swissperiences/swissperiences-app.git
   cd swissperiences-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:5173 in your browser.

## 🗄️ Database Schema

### Tables
- **experiences** - Curated Swiss experiences
- **bookings** - Experience reservations
- **users** - Platform users (via Supabase Auth)

Row Level Security (RLS) is enabled on all tables.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

Build settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 🎨 Features

- ✅ Modern hero section with Swiss branding
- ✅ Search bar with category filters
- ✅ Responsive design (mobile-first)
- ✅ Experience catalog with filtering
- ✅ Individual experience detail pages
- ✅ Corporate retreats section
- ✅ Inquiry/booking modal
- ✅ Supabase integration (Auth + Database)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔐 Security

- Environment variables are used for sensitive data
- `.env` file is gitignored
- Supabase RLS policies protect data access

## 📄 License

Proprietary - Swissperiences © 2025

## 🤝 Contributing

This is a private project. Contact the team for access.

---

**Built with ❤️ in Switzerland**
