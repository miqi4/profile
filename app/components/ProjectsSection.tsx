import { ReactElement } from 'react';

const projects = [
  {
    title: "Portofolio Profile Web",
    icon: "code",
    description: "A modern personal portfolio website showcasing projects, skills, and experience. Built with Next.js for optimal performance and SEO with server-side rendering, featuring smooth page transitions and responsive design.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "Web Profile Lab Business Analytic",
    icon: "database",
    description: "A comprehensive business analytics dashboard for laboratory operations. Built with native PHP and MySQL, providing real-time insights on data analysis, reporting, and business metrics management.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    span: "col-span-1"
  },
  {
    title: "Web Digital Printing",
    icon: "printer",
    description: "Full-featured digital printing management system with order processing, inventory tracking, and customer management. Built with Laravel framework and Filament admin panel for seamless operations.",
    tags: ["Laravel", "Filament", "MySQL", "PHP"],
    span: "col-span-1"
  },
  {
    title: "Web Online Ticket Bus",
    icon: "bus",
    description: "A sophisticated online bus ticketing platform enabling passengers to search, book, and manage reservations. Developed with Laravel and Filament for robust backend operations and intuitive admin interface.",
    tags: ["Laravel", "Filament", "MySQL", "PHP"],
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

const iconMap: Record<string, ReactElement> = {
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  printer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm-6-4h.01M7 20h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
    </svg>
  ),
  bus: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zM8 9v6m4-6v6m4-6v6M9 19h6" />
    </svg>
  )
};

export default function ProjectsSection() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-16 xl:px-24 py-8 min-h-[calc(100vh-64px)]">
      <header className="mb-8">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-0.02em] font-bold mb-4 text-primary font-[family-name:var(--font-family-display)]">
          Featured Projects
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
          A selection of projects I've built with modern web technologies, combining Next.js, Laravel, PHP, and MySQL for robust and scalable applications.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article 
            key={project.title}
            className={`${project.span} bg-surface-container border border-white/10 rounded-lg p-6 flex flex-col h-full cursor-pointer transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.02] hover:bg-surface-container-high`}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] font-semibold text-primary-fixed font-[family-name:var(--font-family-display)]">
                {project.title}
              </h2>
              <span className="text-secondary">
                {iconMap[project.icon]}
              </span>
            </div>
            
            <p className="text-base leading-relaxed text-on-surface-variant mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-surface-variant text-on-surface-variant font-mono text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm tracking-wider font-medium text-secondary hover:text-primary transition-colors"
              >
                View Repository
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

