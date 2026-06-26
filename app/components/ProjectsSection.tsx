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
      <header className="mb-8">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-0.02em] font-bold mb-4 text-primary font-[family-name:var(--font-family-display)]">
          Featured Projects
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
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
            } bg-surface-container border border-white/10 rounded-lg p-6 flex flex-col h-full transition-all duration-200 hover:translate-y-[-2px] hover:scale-[1.01] hover:bg-surface-container-high`}
          >
            <div className="flex justify-between items-start mb-3 gap-3">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-surface-container-high px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-secondary">
                    {project.projectType}
                  </span>
                  {project.statusLabel ? (
                    <span className="inline-flex w-fit items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-secondary">
                      {project.statusLabel}
                    </span>
                  ) : null}
                </div>
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] font-semibold text-primary-fixed font-[family-name:var(--font-family-display)]">
                  {project.title}
                </h2>
              </div>
              <span className="text-secondary shrink-0">
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

              {project.previewEnabled ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm tracking-wider font-medium text-secondary hover:text-primary transition-colors"
                >
                  Preview Web
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm tracking-wider font-medium text-on-surface-variant/60">
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
