import { Terminal, Code2, Server, Cpu } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

export function Skills() {
  const getSkillImage = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name === 'javascript') return '/images/js.png';
    if (name === 'typescript') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
    if (name === 'python') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
    if (name === 'fastapi') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg';
    if (name === 'react') return '/images/react.png';
    if (name === 'next.js') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg';
    if (name === 'redux') return '/images/redux.png';
    if (name === 'node.js') return '/images/node.png';
    if (name === 'express') return '/images/express.png';
    if (name === 'postgresql') return '/images/postgresql.png';
    if (name === 'sqlalchemy') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg';
    if (name === 'docker') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg';
    if (name === 'git') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
    if (name === 'agile / scrum') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg';
    if (name === 'tailwind css') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg';
    if (name === 'sass') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg';
    if (name === 'html5') return '/images/html5.png';
    if (name === 'css3') return '/images/css3.png';
    return null;
  };

  const getCategoryIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('frontend')) {
      return <Code2 className="w-5 h-5 text-sky-400" />;
    } else if (lower.includes('backend')) {
      return <Server className="w-5 h-5 text-emerald-400" />;
    } else {
      return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-800/80 scroll-mt-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-emerald-400 shadow-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>03 // Tech Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
          Skills & Technologies
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Comprehensive engineering stack featuring authentic technology logos, robust full-stack development, modern interfaces, and reliable scalability.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-3xl bg-zinc-900/30 border border-zinc-800/80 p-8 shadow-xl relative overflow-hidden backdrop-blur-xs"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800/80">
              <div className="p-2.5 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 shadow-xs">
                {getCategoryIcon(category.name)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-100 tracking-tight">{category.name}</h3>
                <span className="text-xs font-mono text-zinc-400">{category.skills.length} core technologies</span>
              </div>
            </div>

            {/* Skills Logo Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill) => {
                const imageSrc = getSkillImage(skill.name);
                return (
                  <a
                    key={skill.name}
                    href={skill.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-emerald-500/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="mb-3.5 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                      {imageSrc ? (
                        <img src={imageSrc} alt={skill.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <Code2 className="w-10 h-10 text-emerald-400" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white tracking-wide text-center">
                      {skill.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
