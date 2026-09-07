import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '@/data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <Briefcase className="w-4 h-4" />
          <span>02 // Career Path</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Work Experience
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl">
          Professional track record building software solutions, optimizing performance, and engineering full-stack web architectures.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

            {/* Experience Content Card */}
            <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <p className="text-sm font-medium text-emerald-400">{exp.company}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-700/60 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements / Description Bullets */}
              <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed list-disc list-inside marker:text-emerald-500">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-1">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag List */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-800/80 text-xs font-mono text-zinc-400 border border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
