import { FileDown, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { userProfile } from '@/data/portfolioData';

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 flex flex-col items-start gap-8">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for new projects & opportunities</span>
      </div>

      {/* Main Headlines */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1]">
          Hi, I&apos;m <span className="text-zinc-100">{userProfile.name}</span>.
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-zinc-300">
          {userProfile.title} — <span className="text-zinc-400 font-normal">{userProfile.subtitle}</span>
        </p>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl pt-2">
          {userProfile.bio}
        </p>
      </div>

      {/* Call to Actions */}
      <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10 transition-all active:scale-98"
        >
          <span>Let&apos;s talk</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* CV Download Button */}
        <a
          href={userProfile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-200 font-medium text-sm transition-all shadow-xs"
        >
          <FileDown className="w-4 h-4 text-emerald-400" />
          <span>View CV</span>
        </a>

        {/* Social Quick Links */}
        <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-zinc-800">
          <a
            href={userProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={userProfile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
