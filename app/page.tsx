import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

export default function HomePage() {
  return (
    <main className="h-full w-full overflow-y-auto snap-y snap-mandatory">
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
