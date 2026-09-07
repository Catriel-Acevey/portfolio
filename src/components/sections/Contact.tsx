"use client";

import { Mail, ArrowUpRight, MessageSquare, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { ContactForm } from '@/components/ui/ContactForm';
import { userProfile } from '@/data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(userProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-800/80 scroll-mt-20">
      <div className="rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800 p-8 sm:p-12 md:p-14 relative overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        <div className="space-y-10">
          {/* Header */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>04 // Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
              Let&apos;s build something extraordinary.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              I&apos;m currently available for full-time engineering roles, freelance projects, and technical collaborations. Send me a direct message below or reach out via email.
            </p>
          </div>

          {/* Form & Direct Contact Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="rounded-2xl bg-zinc-950/40 border border-zinc-800/80 p-6 space-y-4">
                <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-zinc-300">
                  Direct Channels
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 min-w-0 flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 text-zinc-200 text-xs font-medium transition-all group">
                      <a
                        href={`mailto:${userProfile.email}`}
                        className="flex items-center gap-2.5 min-w-0 flex-1"
                      >
                        <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{userProfile.email}</span>
                      </a>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors ml-2 shrink-0" />
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-emerald-400 transition-all shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <a
                    href={userProfile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800/80 text-zinc-200 text-xs font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  </a>

                  <a
                    href={userProfile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800/80 text-zinc-200 text-xs font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-zinc-300 shrink-0" />
                      <span>GitHub Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-400 leading-relaxed">
                <span className="text-emerald-400 font-medium font-mono">⚡ Typical response time:</span> within 24 hours. Based in {userProfile.location} (UTC-3), open to remote worldwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
