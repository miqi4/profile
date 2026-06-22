# Quick Start Guide

## Prerequisites

- Node.js 18.17 atau lebih baru
- npm, pnpm, yarn, atau bun

## Installation

```bash
# Clone repository (jika dari git)
git clone <repository-url>
cd profile

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Available Scripts

```bash
# Development dengan hot reload
npm run dev

# Type checking
npm run lint

# Build untuk production
npm run build

# Start production server
npm start
```

## Project Structure

```
profile/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   ├── page.tsx            # Homepage (Profile)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── import/                 # Original HTML files
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration
```

## Editing Content

### Homepage (Profile)
Edit `app/page.tsx`:
- Update nama, deskripsi
- Ganti profile image URL
- Ubah social links

### Skills
Edit `app/skills/page.tsx`:
- Tambah/hapus skill cards
- Update proficiency percentages
- Tambah tech stack di "Additional Arsenal"

### Projects
Edit `app/projects/page.tsx`:
- Tambah project baru ke array `projects`
- Update description, tags, links

### Header/Footer
Edit `app/components/Header.tsx` dan `app/components/Footer.tsx`:
- Update navigation links
- Ganti social media URLs
- Customize branding

### Colors & Theme
Edit `app/globals.css` di section `@theme`:
- Ubah color palette
- Adjust spacing values
- Customize font settings

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Tips

1. **Hot Reload**: Changes akan otomatis ter-reload di browser
2. **TypeScript**: IDE akan memberikan autocomplete dan type checking
3. **Images**: Letakkan di `public/` folder untuk static images
4. **SEO**: Update metadata di `app/layout.tsx`
5. **Performance**: Next.js otomatis optimize images dan fonts

## Common Issues

### Port 3000 already in use
```bash
# Kill existing process
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

### CSS not updating
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run 