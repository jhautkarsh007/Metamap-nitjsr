import React from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  Building, 
  Sparkles, 
  ShieldCheck, 
  Award,
  ChevronRight
} from 'lucide-react';
import { COMMITTEE } from '../data/workshopData';

export default function CommitteeSection() {
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Organizing Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif uppercase">
            PATRONS & ORGANIZING COMMITTEE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Organized under the esteemed leadership and patronage of National Institute of Technology Jamshedpur.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Leadership Cards (Chief Patron, Patron, Chairman) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Chief Patron */}
          <div className="bg-gradient-to-b from-blue-50/60 to-white border border-blue-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 relative group">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-1 ring-4 ring-blue-600/30 group-hover:ring-blue-600 shadow-md transition-all overflow-hidden">
              <img
                src={COMMITTEE.chiefPatron.image}
                alt={COMMITTEE.chiefPatron.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
              />
            </div>
            <span className="inline-block bg-blue-900 text-white text-[11px] font-black px-3.5 py-1 rounded-full mb-2 uppercase tracking-wider shadow-xs">
              {COMMITTEE.chiefPatron.role}
            </span>
            <h3 className="text-lg font-bold text-slate-900 leading-tight font-serif">
              {COMMITTEE.chiefPatron.name}
            </h3>
            <p className="text-xs text-blue-700 font-semibold mt-1">
              {COMMITTEE.chiefPatron.designation}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {COMMITTEE.chiefPatron.affiliation}
            </p>
          </div>

          {/* Patron */}
          <div className="bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 relative group">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-1 ring-4 ring-amber-500/30 group-hover:ring-amber-500 shadow-md transition-all overflow-hidden">
              <img
                src={COMMITTEE.patron.image}
                alt={COMMITTEE.patron.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
              />
            </div>
            <span className="inline-block bg-amber-600 text-white text-[11px] font-black px-3.5 py-1 rounded-full mb-2 uppercase tracking-wider shadow-xs">
              {COMMITTEE.patron.role}
            </span>
            <h3 className="text-lg font-bold text-slate-900 leading-tight font-serif">
              {COMMITTEE.patron.name}
            </h3>
            <p className="text-xs text-amber-800 font-semibold mt-1">
              {COMMITTEE.patron.designation}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {COMMITTEE.patron.affiliation}
            </p>
          </div>

          {/* Chairman */}
          <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 relative group">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-slate-100 p-1 ring-4 ring-slate-400/30 group-hover:ring-blue-700 shadow-md transition-all overflow-hidden">
              <img
                src={COMMITTEE.chairman.image}
                alt={COMMITTEE.chairman.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
              />
            </div>
            <span className="inline-block bg-slate-800 text-white text-[11px] font-black px-3.5 py-1 rounded-full mb-2 uppercase tracking-wider shadow-xs">
              {COMMITTEE.chairman.role}
            </span>
            <h3 className="text-lg font-bold text-slate-900 leading-tight font-serif">
              {COMMITTEE.chairman.name}
            </h3>
            <p className="text-xs text-slate-700 font-semibold mt-1">
              {COMMITTEE.chairman.designation}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {COMMITTEE.chairman.affiliation}
            </p>
          </div>
        </div>

        {/* Workshop Convenors & Coordinators */}
        <div className="mb-16 space-y-12">
          {/* CONVENORS */}
          <div>
            <div className="text-center mb-8">
              <span className="text-amber-700 font-extrabold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                Key Leadership & Oversight
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2 font-serif uppercase tracking-tight">
                CONVENORS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {COMMITTEE.convenors.map((conv, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-blue-100 hover:border-blue-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5"
                >
                  <div className="w-24 h-24 rounded-2xl bg-slate-100 p-0.5 ring-4 ring-blue-500/20 overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src={conv.image}
                      alt={conv.name}
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1.5">
                    <div className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {conv.role}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-serif">
                      {conv.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-700">
                      {conv.designation}
                    </p>
                    <p className="text-xs text-slate-500">
                      {conv.department}, {conv.institution}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                      <a
                        href={`mailto:${conv.email}`}
                        className="flex items-center justify-center sm:justify-start gap-2 hover:text-blue-700 font-medium transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{conv.email}</span>
                      </a>
                      <a
                        href={`tel:${conv.phone.replace(/\s+/g, '')}`}
                        className="flex items-center justify-center sm:justify-start gap-2 hover:text-blue-700 font-medium transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{conv.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COORDINATORS */}
          <div>
            <div className="text-center mb-8">
              <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                Operational & Academic Coordination
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2 font-serif uppercase tracking-tight">
                COORDINATORS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {COMMITTEE.coordinators.map((coord, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200 hover:border-amber-300 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5"
                >
                  <div className="w-24 h-24 rounded-2xl bg-slate-100 p-0.5 ring-4 ring-amber-500/20 overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src={coord.image}
                      alt={coord.name}
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1.5">
                    <div className="inline-block text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {coord.role}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-serif">
                      {coord.name}
                    </h4>
                    <p className="text-xs font-semibold text-amber-800">
                      {coord.designation}
                    </p>
                    <p className="text-xs text-slate-500">
                      {coord.department}, {coord.institution}
                    </p>

                    <div className="pt-2 border-t border-slate-200 space-y-1 text-xs text-slate-600">
                      <a
                        href={`mailto:${coord.email}`}
                        className="flex items-center justify-center sm:justify-start gap-2 hover:text-blue-700 font-medium transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{coord.email}</span>
                      </a>
                      <a
                        href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                        className="flex items-center justify-center sm:justify-start gap-2 hover:text-blue-700 font-medium transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{coord.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANISING MEMBERS (Photo 2) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-xl sm:text-2xl font-black text-amber-400 font-serif uppercase tracking-wider">
              ORGANISING MEMBERS
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              FACULTY MEMBERS OF DMME, NIT JAMSHEDPUR
            </p>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
            {COMMITTEE.organisingMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl flex items-center justify-center text-center text-slate-200 font-semibold shadow-2xs hover:border-amber-400/60 hover:text-white transition-all"
              >
                <span>{member}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center font-medium">
            Department of Metallurgical and Materials Engineering • National Institute of Technology Jamshedpur
          </div>
        </div>
      </div>
    </section>
  );
}
