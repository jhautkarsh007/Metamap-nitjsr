import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, FileText, UserCheck, Sparkles, ChevronRight } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Navbar({ onOpenBrochure }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Course Outline', href: '#modules' },
    { name: 'Features', href: '#features' },
    // { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Committee', href: '#committee' },
    { name: 'Registration & Fees', href: '#registration' },
    { name: 'Venue & Contact', href: '#venue' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-amber-300 text-xs py-1.5 px-4 text-center font-medium border-b border-blue-900/40 relative z-50 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 animate-pulse">
          <Sparkles className="w-3 h-3 text-amber-400" /> Hybrid / In-Person Mode
        </span>
        <span className="hidden sm:inline">5-Day Workshop on Metallurgy & Materials |</span>
        <span className="font-semibold text-white flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-amber-400" /> {WORKSHOP_DETAILS.dates}
        </span>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 text-slate-800'
            : 'bg-slate-900/95 backdrop-blur-sm py-3.5 text-white border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center ring-2 ring-blue-500/30 group-hover:ring-amber-500 transition-all overflow-hidden">
                <img
                  src="/assets/metamap_logo.png"
                  alt="METAMAP 2027 Official Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-base font-extrabold tracking-tight flex items-center gap-1.5 ${scrolled ? 'text-blue-950' : 'text-white'}`}>
                  <span>METAMAP</span>
                  <span className="text-amber-500 font-black">2027</span>
                </span>
                <span className={`text-[10px] uppercase font-bold tracking-wider ${scrolled ? 'text-slate-500' : 'text-slate-400'}`}>
                  Dept. of MME • NIT Jamshedpur
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 text-[13px] font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    scrolled
                      ? 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenBrochure}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  scrolled
                    ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    : 'border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Brochure</span>
              </button>

              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-4 py-2 rounded-lg text-xs font-black shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all uppercase tracking-wider"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Register Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1 bg-amber-500 text-slate-950 px-2.5 py-1.5 rounded-md text-xs font-bold"
              >
                Register
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-slate-800 hover:bg-slate-100'
                    : 'text-white hover:bg-slate-800'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 text-white shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Brochure</span>
              </button>
              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black"
              >
                <UserCheck className="w-4 h-4" />
                <span>Register</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
