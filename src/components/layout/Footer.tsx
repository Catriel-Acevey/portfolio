import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { userProfile } from '@/data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/60 py-12 px-6 sm:px-8 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-medium text-zinc-400">
            {userProfile.name} <span className="text-zinc-600">/</span> {userProfile.title}
          </p>
          <p className="text-xs text-zinc-600">
            Designed & built with Next.js, TypeScript, and Tailwind CSS. © {currentYear}
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={userProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={userProfile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${userProfile.email}`}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-zinc-800 mx-1" />
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-1.5 rounded-md hover:bg-zinc-800/60"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
