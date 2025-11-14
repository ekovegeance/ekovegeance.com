# ekovegeance.com 🚀

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.22-f69220?style=flat-square&logo=pnpm)](https://pnpm.io/)

Personal portfolio website built with modern web technologies. Fast, responsive, and optimized for performance.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and minimalist design with smooth animations
- ⚡ **Lightning Fast** - Built with Next.js 16 and Turbopack
- 📱 **Fully Responsive** - Optimized for all devices
- 🌗 **Dark Mode** - Built-in theme switching with next-themes
- 🔍 **SEO Optimized** - Server-side rendering and metadata API
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 📊 **Analytics** - Integrated with Vercel Analytics and Speed Insights
- 🧪 **Tested** - Unit tests with Vitest and Testing Library

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)

### Development Tools
- **Package Manager:** [pnpm 10.22](https://pnpm.io/)
- **Linting:** [ESLint 9](https://eslint.org/) with Next.js config
- **Testing:** [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- **Type Checking:** TypeScript strict mode

### Analytics & Monitoring
- [Vercel Analytics](https://vercel.com/analytics)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## 📦 Installation

### Prerequisites

- **Node.js** 20.9 or later
- **pnpm** 10.22 or later

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ekovegeance/ekovegeance.com.git
   cd ekovegeance.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration.

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm test` | Run unit tests with Vitest |

## 📁 Project Structure

```
ekovegeance.com/
├── app/                    # Next.js App Router
│   ├── bio/               # Bio page
│   ├── books/             # Books showcase
│   ├── certificates/      # Certificates page
│   ├── cv/                # CV/Resume page
│   ├── projects/          # Projects portfolio
│   ├── search/            # Search functionality
│   ├── templates/         # Templates showcase
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                   # Utility functions
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── __test__/             # Test files
└── next.config.mjs       # Next.js configuration
```

## 🎨 Key Pages

- **`/`** - Home page with introduction
- **`/bio`** - Personal biography
- **`/projects`** - Project portfolio
- **`/books`** - Book recommendations/reviews
- **`/certificates`** - Professional certificates
- **`/cv`** - Resume/CV
- **`/templates`** - Code templates and snippets
- **`/search`** - Global search

## 🔧 Configuration

### Next.js Config
The project uses Next.js 16 with Turbopack enabled by default. See `next.config.mjs` for configuration.

### Tailwind CSS
Tailwind CSS v4 is configured with custom design tokens. Check `tailwind.config.js` for customization.

### TypeScript
Strict mode is enabled for better type safety. Configuration in `tsconfig.json`.

## 🧪 Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test --watch
```

## 📈 Performance

- **Lighthouse Score:** 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** All metrics in green
- **Bundle Size:** Optimized with automatic code splitting
- **Image Optimization:** Next.js Image component with remote patterns

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ekovegeance/ekovegeance.com)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Eko**

- Website: [ekovegeance.com](https://ekovegeance.com)
- GitHub: [@ekovegeance](https://github.com/ekovegeance)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting Platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Radix UI](https://www.radix-ui.com/) - Accessible Components
- [shadcn/ui](https://ui.shadcn.com/) - UI Component Library

---

<div align="center">
  Made with ❤️ by Eko
</div>
