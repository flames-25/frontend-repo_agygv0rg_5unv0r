import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import AppDownload from './components/AppDownload'

function Footer() {
  return (
    <footer id="contact" className="w-full bg-slate-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">VividSure</h4>
            <p className="mt-2 text-sm text-slate-300">Modern insurance designed for real life. Simple, transparent, and fast.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200">Company</h5>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200">Support</h5>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Claims</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-200">Legal</h5>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} VividSure Insurance. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <AppDownload />
      <Footer />
    </div>
  )
}
