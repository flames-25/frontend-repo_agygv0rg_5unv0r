import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Download, Smartphone } from 'lucide-react';

export default function AppDownload() {
  return (
    <section id="app" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Protect more with our mobile app</h2>
            <p className="mt-3 text-slate-300">Manage policies, file claims, and get real-time support — all with delightful animations and instant notifications.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20"
              >
                <Download className="h-4 w-4" /> Download for iOS
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-4 py-2.5 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-slate-900/70"
              >
                <Smartphone className="h-4 w-4" /> Download for Android
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">Coming soon to tablets and wearables.</p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-2xl">
                <div className="aspect-[9/19] w-full rounded-[1.5rem] bg-slate-900 ring-1 ring-white/10">
                  <div className="flex h-full flex-col p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded bg-slate-700" />
                      <div className="h-2 w-10 rounded bg-slate-700" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="h-2 w-20 rounded bg-slate-700" />
                      <div className="h-2 w-8 rounded bg-slate-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
