export type Project = {
  slug: string;
  title: string;
  icon: 'code' | 'database' | 'printer' | 'bus';
  description: string;
  tags: string[];
  previewImage: string;
  previewImageAlt: string;
  previewEnabled: boolean;
  projectType: 'Personal Project' | 'Team Project';
  statusLabel?: string;
};

export const projects: Project[] = [
  {
    slug: 'portofolio-profile-web',
    title: 'Portofolio Profile Web',
    icon: 'code',
    description:
      'A modern personal portfolio website showcasing projects, skills, and experience. Built with Next.js for optimal performance and SEO with server-side rendering, featuring smooth page transitions and responsive design.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    previewImage: '/profil.jpeg',
    previewImageAlt: 'Preview Portofolio Profile Web',
    previewEnabled: false,
    projectType: 'Personal Project',
  },
  {
    slug: 'laboratory-business-analytics-website',
    title: 'Laboratory Business Analytics Website',
    icon: 'database',
    description:
      'A comprehensive business analytics dashboard for laboratory operations. Built with native PHP and MySQL, providing real-time insights on data analysis, reporting, and business metrics management.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    previewImage: '/Laboratory Business Analytics Website.png',
    previewImageAlt: 'Preview Laboratory Business Analytics Website',
    previewEnabled: true,
    projectType: 'Team Project',
  },
  {
    slug: 'digital-printing-website',
    title: 'Digital Printing Website',
    icon: 'printer',
    description:
      'Full-featured digital printing management system with order processing, inventory tracking, and customer management. Built with Laravel framework and Filament admin panel for seamless operations.',
    tags: ['Laravel', 'Filament', 'MySQL', 'PHP'],
    previewImage: '/Digital Printing Website.png',
    previewImageAlt: 'Preview Digital Printing Website',
    previewEnabled: true,
    projectType: 'Team Project',
  },
  {
    slug: 'bus-ticket-booking-website',
    title: 'Bus Ticket Booking Website',
    icon: 'bus',
    description:
      'A sophisticated online bus ticketing platform enabling passengers to search, book, and manage reservations. Developed with Laravel and Filament for robust backend operations and intuitive admin interface.',
    tags: ['Laravel', 'Filament', 'MySQL', 'PHP'],
    previewImage: '/Bus Ticket Booking Website.png',
    previewImageAlt: 'Preview Bus Ticket Booking Website',
    previewEnabled: true,
    projectType: 'Personal Project',
    statusLabel: 'On Going Project',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
