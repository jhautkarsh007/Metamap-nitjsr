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
  CheckCircle2,
  Building2
} from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

export default function Hero({ onOpenRegister, onOpenBrochure }) {
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
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden pt-12 pb-20">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Institute & Department Hierarchy Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-200 text-xs sm:text-sm font-semibold shadow-inner">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>National Institute of Technology Jamshedpur</span>
            <span className="text-blue-400">•</span>
            <span className="text-amber-300 font-bold">Est. 1960</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-blue-200 tracking-wide">
            Department of Metallurgical and Materials Engineering
          </h3>

          <p className="text-amber-400 font-medium text-sm sm:text-base italic">
            presents a 5-Day National Workshop on
          </p>
        </div>

        {/* Main Workshop Title */}
        <div className="text-center max-w-5xl mx-auto mt-4 mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Metallurgy: Emerging Trends in Advanced Materials, Microstructural Assessment and Performance
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-lg sm:text-2xl px-6 py-1.5 rounded-full shadow-lg shadow-amber-500/30 tracking-wider">
              <Sparkles className="w-5 h-5 text-slate-950" />
              {WORKSHOP_DETAILS.acronym}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-500/30 text-blue-200 font-semibold text-sm px-4 py-2 rounded-full">
              In Collaboration with The Indian Institute of Metals (IIM)
            </span>
          </div>
        </div>

        {/* Key Event Badges (Date & Venue) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm max-w-3xl mx-auto mt-6">
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="font-bold">{WORKSHOP_DETAILS.dates}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{WORKSHOP_DETAILS.venue.building}, NIT Jamshedpur</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-300">Hybrid / In-Person Mode</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-10 max-w-xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
            Workshop Commences In
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-3">
              <span className="font-black text-2xl sm:text-4xl text-amber-400 block font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Days</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-3">
              <span className="font-black text-2xl sm:text-4xl text-white block font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hours</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-3">
              <span className="font-black text-2xl sm:text-4xl text-white block font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Minutes</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700/70 rounded-xl p-2 sm:p-3">
              <span className="font-black text-2xl sm:text-4xl text-emerald-400 block font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all group"
          >
            <span>Register For Workshop</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-bold px-7 py-4 rounded-xl text-base border border-slate-700 shadow-lg hover:border-slate-600 transition-all"
          >
            <FileText className="w-5 h-5 text-blue-400" />
            <span>Download Brochure</span>
          </button>

          {/* <a
            href="#schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-950/70 hover:bg-blue-900/80 text-blue-200 font-bold px-6 py-4 rounded-xl text-base border border-blue-800/60 transition-all"
          >
            <span>View 5-Day Schedule</span>
          </a> */}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">5 Days</p>
              <p className="text-xs text-slate-400 font-medium">Intensive Curriculum</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">15+ Sessions</p>
              <p className="text-xs text-slate-400 font-medium">Lectures & Live Labs</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">Premier Experts</p>
              <p className="text-xs text-slate-400 font-medium">NIT, CSIR & Tata Steel</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3.5 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-white">Certification</p>
              <p className="text-xs text-slate-400 font-medium">NIT Jamshedpur Endorsed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
