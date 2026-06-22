# Portfolio Mohammad Iqbal

Portfolio website profesional yang dibangun dengan Next.js 16, menampilkan profil, keahlian, dan proyek-proyek.

## Teknologi

- **Next.js 16.2.9** - React framework dengan App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Next Font** - Optimasi font otomatis dengan Inter & Sora

## Struktur Project

```
├── app/
│   ├── components/      # Komponen reusable (Header, Footer)
│   ├── page.tsx         # Homepage / Profile
│   ├── skills/          # Halaman Skills
│   ├── projects/        # Halaman Projects
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles & Tailwind config
├── import/              # File HTML original (untuk referensi)
└── public/              # Asset statis
```

## Fitur

- ✅ Responsive design (mobile-first)
- ✅ Dark theme dengan custom color palette
- ✅ Font optimization dengan next/font
- ✅ Image optimization dengan next/image
- ✅ Animasi smooth dengan CSS transitions
- ✅ SEO-friendly dengan metadata

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Halaman

- **/** - Homepage dengan profil dan hero section
- **/skills** - Keahlian teknis dengan progress bars
- **/projects** - Portfolio proyek dengan bento grid layout

## Customization

### Warna
Edit custom color palette di `app/globals.css` dalam `@theme` block.

### Konten
- Profile: `app/page.tsx`
- Skills: `app/skills/page.tsx`
- Projects: `app/projects/page.tsx`

### Font
Font dikonfigurasi di `app/layout.tsx` menggunakan `next/font/google`.

## Build & Deploy

```bash
npm run build
```

Output di folder `.next/` siap untuk deploy ke Vercel, Netlify, atau platform lainnya.

---

© 2024 Mohammad Iqbal. Built with Next.js & Tailwind CSS.
