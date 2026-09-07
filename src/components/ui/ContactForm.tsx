'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { userProfile } from '@/data/portfolioData';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Trigger mail client with structured pre-filled data
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${userProfile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-950/60 border border-zinc-800/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
      {status === 'success' ? (
        <div className="py-8 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-zinc-100">Message Ready!</h4>
            <p className="text-sm text-zinc-400 max-w-sm">
              Your default email client has been opened with your message. If it didn&apos;t open automatically, you can also write directly to{' '}
              <a href={`mailto:${userProfile.email}`} className="text-emerald-400 hover:underline font-mono">
                {userProfile.email}
              </a>.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded-lg transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                Your Name <span className="text-emerald-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                Email Address <span className="text-emerald-400">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
              Subject / Topic
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration / Opportunity"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
              Message <span className="text-emerald-400">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Catriel, I'd like to discuss a project..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-y min-h-[100px]"
            />
          </div>

          {/* Error Notice */}
          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40 active:scale-98 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Opening email client...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
