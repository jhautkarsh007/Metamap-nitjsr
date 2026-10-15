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
    <section id="speakers" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Distinguished Faculty & Scientists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Keynote & Resource Speakers
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Learn directly from eminent metallurgical experts, senior scientists, and industrial technology leaders.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search speaker by name, topic..."
              value={speakerSearch}
              onChange={(e) => setSpeakerSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 p-0.5 ring-2 ring-blue-500/20 overflow-hidden flex-shrink-0 group-hover:ring-amber-500 transition-all">
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
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-1">
                      {speaker.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                      {speaker.name}
                    </h3>
                  </div>
                </div>

                {/* Designation & Institute */}
                <div className="space-y-1 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
                  <p className="font-semibold text-slate-800">{speaker.designation}</p>
                  <p className="flex items-center gap-1.5 text-slate-500">
                    <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{speaker.institution}</span>
                  </p>
                </div>

                {/* Topic */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-500" /> Focus Area / Topic
                  </p>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {speaker.topic}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>METAMAP 2026</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No speakers matched your search criteria.
          </div>
        )}
      </div>
    </section>
  );
}
