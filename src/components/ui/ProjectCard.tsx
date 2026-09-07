import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden shadow-xs">
      {/* Project Image Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 font-mono text-xs">
            No preview available
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Project Info & Description */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-5">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60 text-xs font-mono text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/60">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors py-1"
                aria-label={`View code for ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-1"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
