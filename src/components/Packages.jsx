import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Check, Zap } from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    price: 19,
    accent: 'from-indigo-500 to-blue-500',
    features: ['Basic coverage', 'Standard support', 'Flexible billing'],
    highlight: false,
  },
  {
    name: 'Plus',
    price: 39,
    accent: 'from-cyan-500 to-teal-500',
    features: ['Extended coverage', 'Priority support', 'Smart device perks'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: 79,
    accent: 'from-fuchsia-500 to-pink-500',
    features: ['Max coverage', 'Concierge support', 'Best claim rates'],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Choose a package that fits</h2>
          <p className="mt-2 text-slate-300">Transparent pricing with flexible upgrades anytime.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10 ${p.highlight ? 'shadow-[0_0_0_1px] shadow-cyan-400/30' : ''}`}
            >
              <div className={`absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    {p.highlight && (
                      <div className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-300 ring-1 ring-cyan-500/20">
                        <Star className="h-3 w-3" /> Popular choice
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold">${p.price}<span className="text-base font-medium text-slate-300">/mo</span></div>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-300" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white px-4 py-2.5 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20">
                Get {p.name}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 p-6 ring-1 ring-white/10 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-emerald-300" />
            <span className="text-sm text-slate-300">Instant policy activation</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-cyan-300" />
            <span className="text-sm text-slate-300">Cancel anytime</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-indigo-300" />
            <span className="text-sm text-slate-300">No paperwork hassle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
