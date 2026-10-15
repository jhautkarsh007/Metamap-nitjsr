import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Sparkles, 
  Microscope, 
  Coffee, 
  Award, 
  BookOpen, 
  Layers,
  FileDown
} from 'lucide-react';
import { SCHEDULE, WORKSHOP_DETAILS } from '../data/workshopData';

export default function ScheduleSection({ onOpenBrochure }) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentDay = SCHEDULE[activeDayIndex];

  // Filtering sessions across all days or current day
  const filteredSessions = currentDay.sessions.filter(session => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      session.topic.toLowerCase().includes(q) ||
      (session.speaker && session.speaker.toLowerCase().includes(q)) ||
      session.time.toLowerCase().includes(q)
    );
  });

  const getSessionBadge = (type) => {
    switch (type) {
      case 'ceremony':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            <Award className="w-3 h-3" /> Ceremony
          </span>
        );
      case 'demo':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 animate-pulse">
            <Microscope className="w-3 h-3 text-amber-600" /> Live Demonstration
          </span>
        );
      case 'break':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            <Coffee className="w-3 h-3" /> Refreshment & Networking
          </span>
        );
      case 'registration':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Sparkles className="w-3 h-3" /> Registration
          </span>
        );
      case 'panel':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
            <Layers className="w-3 h-3" /> Panel Discussion
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
            <BookOpen className="w-3 h-3" /> Technical Lecture
          </span>
        );
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Program Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            5-Day Comprehensive Schedule
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Structured timetable featuring expert theoretical sessions, live laboratory demonstrations, and panel dialogues.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Actions Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Day Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {SCHEDULE.map((day, idx) => (
              <button
                key={day.day}
                onClick={() => setActiveDayIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeDayIndex === idx
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{day.day}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  activeDayIndex === idx ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-600'
                }`}>
                  {day.date.split(',')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topic or speaker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Current Day Theme Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-5 sm:p-6 rounded-2xl mb-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentDay.day} • {currentDay.dayName}, {currentDay.date}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              {currentDay.theme}
            </h3>
          </div>
          <button
            onClick={onOpenBrochure}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg border border-white/20 transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-amber-400" />
            <span>Schedule PDF</span>
          </button>
        </div>

        {/* Sessions List */}
        <div className="space-y-3.5">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session, index) => {
              const isBreak = session.type === 'break';
              const isDemo = session.type === 'demo';

              return (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isBreak
                      ? 'bg-slate-50/80 border-slate-200/80 text-slate-600'
                      : isDemo
                      ? 'bg-amber-50/60 border-amber-200 hover:border-amber-300 hover:shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Time & Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{session.time}</span>
                      </div>
                      {getSessionBadge(session.type)}
                    </div>

                    {/* Venue tag */}
                    <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                      {isDemo ? 'DMME Testing Laboratories' : 'Lecture Hall 212, DJLHC'}
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h4 className={`text-base font-bold mt-2.5 ${isBreak ? 'text-slate-700 italic' : 'text-slate-900'}`}>
                    {session.topic}
                  </h4>

                  {/* Speaker Details */}
                  {session.speaker && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-900">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span>Speaker / Lead: </span>
                      <span className="text-slate-700 font-medium">{session.speaker}</span>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No sessions matched "{searchQuery}" in {currentDay.day}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
