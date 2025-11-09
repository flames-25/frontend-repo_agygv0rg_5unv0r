import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Home, Car, Rocket } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Comprehensive Coverage',
    desc: 'End-to-end protection with zero hidden clauses and fast claims.'
  },
  {
    icon: HeartPulse,
    title: 'Health & Wellness',
    desc: 'Preventive care perks, telemedicine access, and wellness rewards.'
  },
  { icon: Home, title: 'Home Protection', desc: 'Smart device discounts and 24/7 emergency assistance.' },
  { icon: Car, title: 'Auto Insurance', desc: 'Usage-based pricing and instant roadside support.' },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Services built around you</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Personalized protection with delightful interactions and seamless support.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">
            <Rocket className="h-4 w-4" />
            Powered by smart risk models
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 ring-1 ring-white/10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-cyan-300 ring-1 ring-white/10">
                  {React.createElement(s.icon, { className: 'h-6 w-6' })}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-sm text-cyan-300/90 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
