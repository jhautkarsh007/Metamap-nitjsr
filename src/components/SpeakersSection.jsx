import React, { useState } from 'react';
import { Search, Building, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { SPEAKERS } from '../data/workshopData';

export default function SpeakersSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [speakerSearch, setSpeakerSearch] = useState('');

  const categories = ['All', 'Academic / NIT', 'R&D Institute', 'Industry Leader', 'Defense R&D'];

  const filteredSpeakers = SPEAKERS.filter((speaker) => {
    const matchesCategory = selectedCategory === 'All' || speaker.category === selectedCategory;
    const matchesSearch =
      speaker.name.toLowerCase().includes(speakerSearch.toLowerCase()) ||
      speaker.institution.toLowerCase().includes(speakerSearch.toLowerCase()) ||
      speaker.topic.toLowerCase().includes(speakerSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="speakers" className="py-24 bg-black text-white relative overflow-hidden border-t border-zinc-900">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-zinc-900/90 px-4 py-1.5 rounded-full border border-zinc-800 shadow-inner">
            Distinguished Faculty & Scientists
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight font-serif">
            Keynote & Resource Speakers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Renowned experts from academia, premier national research laboratories, and leading metallurgical corporations.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters and Search - Sleek Dark Theme */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black'
                    : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search speaker by name or topic..."
              value={speakerSearch}
              onChange={(e) => setSpeakerSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-800 text-xs text-white bg-zinc-900/90 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
            />
          </div>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800/90 hover:border-amber-400/70 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Photo & Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 p-0.5 ring-2 ring-zinc-700 overflow-hidden flex-shrink-0 group-hover:ring-amber-400 transition-all">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = '/assets/nit_logo.png';
                      }}
                    />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 mb-1">
                      {speaker.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {speaker.name}
                    </h3>
                  </div>
                </div>

                {/* Designation & Institute */}
                <div className="space-y-1 text-xs text-zinc-400 mb-3 pb-3 border-b border-zinc-800">
                  <p className="font-semibold text-zinc-200">{speaker.designation}</p>
                  <p className="flex items-center gap-1.5 text-zinc-400">
                    <Building className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                    <span>{speaker.institution}</span>
                  </p>
                </div>

                {/* Topic */}
                <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800/80">
                  <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-400" /> Focus Area / Topic
                  </p>
                  <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                    {speaker.topic}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                <span className="text-zinc-400 font-mono">METAMAP 2027</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="text-center py-16 bg-zinc-950 rounded-2xl border border-zinc-800 text-zinc-400 text-sm">
            No speakers matched your search criteria.
          </div>
        )}
      </div>
    </section>
  );
}
