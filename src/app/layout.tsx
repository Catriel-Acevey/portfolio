import type { Metadata } from 'next';
import './globals.css';
import { userProfile } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: `${userProfile.name} — ${userProfile.title}`,
  description: userProfile.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-zinc-800 selection:text-zinc-100 min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
