import { ReactElement } from 'react';

const projects = [
  {
    title: "Distributed Ledger API",
    icon: "database",
    description: "A high-throughput, fault-tolerant ledger system built in Go. Designed to handle 10,000+ TPS with event-sourced architecture and eventual consistency guarantees.",
    tags: ["Go", "Kafka", "PostgreSQL", "gRPC"],
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "AuthMicro",
    icon: "lock",
    description: "A secure, stateless authentication microservice implementing OAuth2.0 and JWT with Redis-backed token revocation.",
    tags: ["Node.js", "Redis", "Docker"],
    span: "col-span-1"
  },
  {
    title: "GraphSearch Engine",
    icon: "hub",
    description: "Custom search indexing engine utilizing GraphQL for complex relational querying over disparate datastores.",
    tags: ["Python", "GraphQL", "Neo4j"],
    span: "col-span-1"
  },
  {
    title: "Infrastructure as Code Suite",
    icon: "cloud",
    description: "A comprehensive set of Terraform modules defining a scalable, multi-region AWS environment. Includes automated CI/CD pipeline definitions and disaster recovery protocols.",
    tags: ["Terraform", "AWS", "GitHub Actions"],
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

const iconMap: Record<string, ReactElement> = {
  database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  lock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  hub: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  cloud: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  )
};

export default function ProjectsSection() {
  return (
    <section className="w-full px-5 sm:px-8 md:px-16 xl:px-24 py-8 min-h-[calc(100vh-64px)]">
      <header className="mb-8">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-0.02em] font-bold mb-4 text-primary font-[family-name:var(--font-family-display)]">
          System Architectures
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
          A curated gallery of robust, scalable backend systems and robust infrastructure projects engineered for high performance.
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

