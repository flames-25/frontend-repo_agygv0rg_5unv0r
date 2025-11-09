import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32 md:pt-40">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Shield className="h-4 w-4" />
          Trusted coverage for every chapter
        </span>
        <h1 className="text-balance font-extrabold tracking-tight text-white drop-shadow-sm [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
          Insurance that moves with you
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-slate-200">
          Simple, flexible, and transparent protection for your life, home, and journeys — designed with delightful experiences and powerful technology.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#packages" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:shadow-xl hover:shadow-white/20">
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-slate-900/70">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
