import { userProfile, projectsData, experienceData, skillCategories } from '@/data/portfolioData';

export default function Home() {
  return (
    <main className="flex-grow px-6 py-12 max-w-5xl mx-auto w-full">
      <section className="py-20 flex flex-col items-start gap-4">
        <span className="text-sm font-mono tracking-wider text-zinc-400">PORTFOLIO BASE / NEXT.JS</span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{userProfile.name}</h1>
        <p className="text-xl sm:text-2xl text-zinc-400 font-medium">{userProfile.title}</p>
        <p className="text-zinc-500 max-w-xl text-base sm:text-lg leading-relaxed">{userProfile.bio}</p>
        <div className="pt-4 text-xs font-mono text-zinc-500 border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
          ✨ Arquitectura base lista. Los componentes visuales y dirección de arte se definirán próximamente mediante la skill <strong className="text-zinc-300">Impeccable</strong>.
        </div>
      </section>
    </main>
  );
}
