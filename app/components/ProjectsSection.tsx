import Link from 'next/link';
import { projects } from '../projects/project-data';

const iconMap = {
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
  ),
};

export default function ProjectsSection() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-16 xl:px-24 py-8 min-h-[calc(100vh-64px)]">
      <header className="mb-12 border-b-4 border-ink pb-6">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-tight font-bold mb-4 text-ink uppercase font-[family-name:var(--font-family-display)]">
          Featured Projects
        </h1>
        <p className="text-lg leading-relaxed text-ink-muted max-w-2xl font-mono">
          A selection of projects I've built with modern web technologies, combining Next.js, Laravel, PHP, and MySQL for robust and scalable applications.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`${
              index === 0 || index === 3
                ? 'md:col-span-2 lg:col-span-2'
                : 'col-span-1'
            } bg-canvas border-2 border-ink p-6 flex flex-col h-full transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_var(--ink)]`}
          >
            <div className="flex justify-between items-start mb-4 gap-3">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex w-fit items-center border border-ink bg-ink text-canvas px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                    {project.projectType}
                  </span>
                  {project.statusLabel ? (
                    <span className="inline-flex w-fit items-center border border-ink bg-canvas text-ink px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                      {project.statusLabel}
                    </span>
                  ) : null}
                </div>
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] font-bold text-ink uppercase font-[family-name:var(--font-family-display)]">
                  {project.title}
                </h2>
              </div>
              <span className="text-ink shrink-0">
                {iconMap[project.icon]}
              </span>
            </div>

            <p className="text-base leading-relaxed text-ink-muted mb-8 flex-grow font-mono">
              {project.description}
            </p>

            <div className="mt-auto pt-4 border-t-2 border-ink/20">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-ink/30 text-ink-muted font-mono text-xs uppercase px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.previewEnabled ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-between w-full border-2 border-ink bg-canvas hover:bg-ink hover:text-canvas text-ink px-4 py-3 text-sm tracking-widest font-bold uppercase transition-colors"
                >
                  <span>Preview Web</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <span className="inline-flex items-center justify-center w-full border-2 border-ink-muted text-ink-muted px-4 py-3 text-sm tracking-widest font-bold uppercase">
                  Preview unavailable
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
