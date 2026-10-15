import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Building2, Sparkles } from 'lucide-react';
import { WORKSHOP_DETAILS, CONTACT_PERSONS } from '../data/workshopData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 ring-2 ring-amber-400">
                <img src="/assets/nit_logo.png" alt="NIT Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-lg font-black text-white flex items-center gap-1.5">
                  <span>METAMAP</span>
                  <span className="text-amber-400">2026</span>
                </span>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  National Institute of Technology Jamshedpur
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed text-justify">
              5-Day National Workshop on <em>Metallurgy: Emerging Trends in Advanced Materials, Microstructural Assessment and Performance</em> (METAMAP 2026). Organized by Department of Metallurgical and Materials Engineering, NIT Jamshedpur in collaboration with The Indian Institute of Metals (IIM), Jamshedpur Chapter.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Hybrid Mode Available • January 8 – 12, 2027</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home & Overview</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Workshop & Dept.</a></li>
              <li><a href="#objectives" className="hover:text-amber-400 transition-colors">Objectives & Broad Areas</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Key Features</a></li>
              <li><a href="#schedule" className="hover:text-amber-400 transition-colors">5-Day Schedule</a></li>
              <li><a href="#speakers" className="hover:text-amber-400 transition-colors">Keynote & Resource Speakers</a></li>
              <li><a href="#committee" className="hover:text-amber-400 transition-colors">Patrons & Leadership</a></li>
              <li><a href="#registration" className="hover:text-amber-400 transition-colors">Registration & Fee Structure</a></li>
              <li><a href="#venue" className="hover:text-amber-400 transition-colors">Venue & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Convenors Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Contact Workshop Convenors
            </h4>
            <div className="space-y-3 text-xs">
              {CONTACT_PERSONS.map((person, idx) => (
                <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <p className="font-bold text-white text-sm">{person.name}</p>
                  <p className="text-[11px] text-slate-400">{person.designation}, Dept. of MME</p>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{person.email}</span>
                  </a>
                  <a href={`tel:${person.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{person.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Department of Metallurgical and Materials Engineering, NIT Jamshedpur. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
