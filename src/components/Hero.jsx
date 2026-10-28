import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Award, 
  Microscope, 
  Users, 
  Building2,
  Layers,
  Download,
  Eye
} from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Hero({ onOpenBrochure }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(WORKSHOP_DETAILS.startDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden pt-10 pb-20">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Institute & Department Hierarchy Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-200 text-xs sm:text-sm font-semibold shadow-inner">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-blue-200 tracking-wide">
            Department of Metallurgical and Materials Engineering
          </h3>

          <p className="text-amber-400 font-medium text-xs sm:text-base italic">
            Presents A 5-Day workshop on
          </p>
        </div>

        {/* Main Workshop Title & Tagline */}
        <div className="text-center max-w-5xl mx-auto mt-4 mb-6">
          {/* Official METAMAP 2027 Emblem (First Photo) */}
          <div className="mb-5 inline-flex items-center justify-center">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-blue-500 to-amber-400 ring-4 ring-amber-400/40 shadow-2xl shadow-blue-500/20 backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/metamap_logo.png"
                alt="METAMAP 2027 Official Logo"
                className="w-full h-full object-cover rounded-full shadow-md bg-white"
              />
            </div>
          </div>

          {/* Dates Ribbon */}
          <div className="mb-3">
            <span className="inline-block text-amber-400 font-black text-base sm:text-xl tracking-wider uppercase border-b-2 border-amber-400/80 pb-0.5">
              {WORKSHOP_DETAILS.dates}
            </span>
          </div>

          {/* Full Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase font-serif">
            {WORKSHOP_DETAILS.shortTitle}
          </h1>

          {/* Tagline Box: DESIGN. DECODE. DELIVER. */}
          <div className="mt-5 p-3.5 sm:p-4 bg-gradient-to-r from-blue-900/40 via-amber-500/15 to-blue-900/40 border border-amber-400/30 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-amber-300 font-black text-sm sm:text-lg tracking-widest uppercase">
              {WORKSHOP_DETAILS.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-200 italic mt-0.5 font-light">
              {WORKSHOP_DETAILS.subTagline}
            </p>
          </div>
        </div>

        {/* Key Event Badges (Date & Venue) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm max-w-3xl mx-auto mt-6">
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="font-bold">{WORKSHOP_DETAILS.dates}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>VENUE : {WORKSHOP_DETAILS.venue.room}, {WORKSHOP_DETAILS.venue.institution}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-300">Hybrid / In-Person Mode</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 max-w-lg mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md text-center">
          <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-2.5">
            Workshop Commences In
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-2.5">
              <span className="font-black text-xl sm:text-3xl text-amber-400 block font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Days</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-2.5">
              <span className="font-black text-xl sm:text-3xl text-white block font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hours</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-2.5">
              <span className="font-black text-xl sm:text-3xl text-white block font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Minutes</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-2.5">
              <span className="font-black text-xl sm:text-3xl text-emerald-400 block font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={WORKSHOP_DETAILS.brochurePdfUrl}
            download="METAMAP_2027_Brochure.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all uppercase tracking-wider"
          >
            <Download className="w-5 h-5 text-slate-950" />
            <span>Download Brochure (PDF)</span>
          </a>

          {/* <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base border border-slate-700 shadow-lg hover:border-slate-600 transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>View 2-Page Brochure</span>
          </button> */}

          {/* <a
            href="#modules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base border border-slate-700/80 shadow-lg transition-all"
          >
            <span>Course Outline</span>
          </a> */}

          <a
            href="#registration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-950/70 hover:bg-blue-900/80 text-blue-200 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base border border-blue-800/60 transition-all"
          >
            <span>Fee Details</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-extrabold text-white">5 Days</p>
              <p className="text-xs text-slate-400 font-medium">8th – 12th Jan 2027</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-extrabold text-white">5 Modules</p>
              <p className="text-xs text-slate-400 font-medium">Design to Prediction</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-extrabold text-white">Live Demos</p>
              <p className="text-xs text-slate-400 font-medium">Microscopy & NDT&E</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-extrabold text-white">Certificate</p>
              <p className="text-xs text-slate-400 font-medium">NIT Jamshedpur Awarded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
