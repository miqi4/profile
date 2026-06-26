import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../project-data';

type ProjectPageParams = Promise<{
  slug: string;
}>;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: ProjectPageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Preview',
    };
  }

  return {
    title: `${project.title} - Preview`,
    description: `Preview image for ${project.title}`,
  };
}

export default async function ProjectPreviewPage({
  params,
}: {
  params: ProjectPageParams;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-[calc(100vh-128px)] px-5 sm:px-8 md:px-16 xl:px-24 py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-3">
            Project Preview
          </p>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-tight md:tracking-[-0.02em] font-bold text-primary font-[family-name:var(--font-family-display)]">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
            {project.description}
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-surface-container px-5 py-3 text-sm font-medium tracking-wider text-on-surface-variant transition-colors hover:text-primary hover:bg-surface-container-high"
        >
          Back to projects
        </Link>
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface-container-low p-3 sm:p-4 shadow-2xl shadow-black/20">
        <div className="max-h-[calc(100vh-320px)] overflow-auto rounded-xl border border-white/10 bg-surface-container-high">
          <div className="min-w-full p-3 sm:p-6">
            <Image
              src={encodeURI(project.previewImage)}
              alt={project.previewImageAlt}
              width={1600}
              height={2400}
              priority
              sizes="100vw"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-surface-container px-3 py-1 text-sm text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
