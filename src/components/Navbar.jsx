import React from 'react';
import { Shield, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white backdrop-blur">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">VividSure</span>
          </a>
          <nav className="hidden items-center gap-6 sm:flex">
            <a href="#services" className="text-sm text-slate-200 hover:text-white">Services</a>
            <a href="#packages" className="text-sm text-slate-200 hover:text-white">Packages</a>
            <a href="#app" className="text-sm text-slate-200 hover:text-white">Mobile App</a>
            <a href="#contact" className="text-sm text-slate-200 hover:text-white">Contact</a>
            <a href="#packages" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Get Started</a>
          </nav>
          <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white backdrop-blur sm:hidden">
            <a href="#services" className="text-sm" onClick={() => setOpen(false)}>Services</a>
            <a href="#packages" className="text-sm" onClick={() => setOpen(false)}>Packages</a>
            <a href="#app" className="text-sm" onClick={() => setOpen(false)}>Mobile App</a>
            <a href="#contact" className="text-sm" onClick={() => setOpen(false)}>Contact</a>
            <a href="#packages" className="rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
