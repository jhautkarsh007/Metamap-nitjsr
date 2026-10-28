import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Building2, Sparkles, Globe } from 'lucide-react';
import { WORKSHOP_DETAILS, COMMITTEE } from '../data/workshopData';

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
              <div className="w-14 h-14 rounded-full bg-white p-0.5 ring-2 ring-amber-400 overflow-hidden shadow-md">
                <img src="/assets/metamap_logo.png" alt="METAMAP 2027 Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <span className="text-lg font-black text-white flex items-center gap-1.5 font-serif">
                  <span>METAMAP</span>
                  <span className="text-amber-400">2027</span>
                </span>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  National Institute of Technology Jamshedpur
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed text-justify">
              A 5-Day Workshop on <em>{WORKSHOP_DETAILS.shortTitle}</em> ({WORKSHOP_DETAILS.acronym}). Organized by Department of Metallurgical and Materials Engineering, NIT Jamshedpur in collaboration with The Indian Institute of Metals (IIM), Jamshedpur Chapter.
            </p>

            <div className="pt-1 flex flex-col gap-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-2 text-amber-400 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{WORKSHOP_DETAILS.dates} • {WORKSHOP_DETAILS.venue.room}, NIT Jamshedpur</span>
              </span>
              <a
                href={WORKSHOP_DETAILS.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{WORKSHOP_DETAILS.websiteUrl}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home & Overview</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Objective & About</a></li>
              <li><a href="#modules" className="hover:text-amber-400 transition-colors">Course Outline (Modules I–V)</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Key Features</a></li>
              <li><a href="#schedule" className="hover:text-amber-400 transition-colors">5-Day Schedule</a></li>
              <li><a href="#speakers" className="hover:text-amber-400 transition-colors">Speakers</a></li>
              <li><a href="#committee" className="hover:text-amber-400 transition-colors">Patrons & Committee</a></li>
              <li><a href="#registration" className="hover:text-amber-400 transition-colors">Registration Fee Structure</a></li>
              <li><a href="#venue" className="hover:text-amber-400 transition-colors">Contact Us & Venue</a></li>
            </ul>
          </div>

          {/* Col 3: Convenors & Coordinators Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs">
              {/* Convenors */}
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-amber-400">Convenors</p>
                {COMMITTEE.convenors.map((c, i) => (
                  <div key={i} className="pt-1 first:pt-0">
                    <p className="font-bold text-white">{c.name} <span className="text-[10px] text-slate-400 font-normal">({c.phone})</span></p>
                    <a href={`mailto:${c.email}`} className="text-[11px] text-slate-400 hover:text-amber-400 transition-colors block">
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Coordinators */}
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-blue-400">Coordinators</p>
                {COMMITTEE.coordinators.map((c, i) => (
                  <div key={i} className="pt-1 first:pt-0">
                    <p className="font-bold text-white">{c.name} <span className="text-[10px] text-slate-400 font-normal">({c.phone})</span></p>
                    <a href={`mailto:${c.email}`} className="text-[11px] text-slate-400 hover:text-amber-400 transition-colors block">
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2027 Department of Metallurgical and Materials Engineering, NIT Jamshedpur. All rights reserved.</p>
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
