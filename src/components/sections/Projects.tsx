import { projectsData } from '@/data/portfolioData';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FolderGit2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-20">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <FolderGit2 className="w-4 h-4" />
          <span>01 // Featured Projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Selected Work & Projects
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl">
          Web applications and microservices engineered with a focus on modern architecture, clean code, and scalable systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
