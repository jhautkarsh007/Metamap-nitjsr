import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  UserCheck,
  CheckCircle
} from 'lucide-react';
import { WHO_AND_WHY, CERTIFICATION_NOTE, WORKSHOP_DETAILS } from '../data/workshopData';

export default function EligibilityCertification() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Eligibility Section (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                Participation Guidelines
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif uppercase">
                WHO SHOULD ATTEND & WHY ATTEND
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Open to motivated participants across all engineering streams, researchers, and core industrial sectors.
              </p>
            </div>

            <div className="space-y-4">
              {/* WHO SHOULD ATTEND */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-700" />
                  <span>WHO SHOULD ATTEND</span>
                </h3>
                <div className="space-y-2">
                  {WHO_AND_WHY.whoShouldAttend.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-amber-500 font-bold text-base">⮚</span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHY ATTEND */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>WHY ATTEND</span>
                </h3>
                <div className="space-y-2">
                  {WHO_AND_WHY.whyAttend.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-blue-700 font-bold text-base">⮚</span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certification Section (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-amber-700 font-extrabold text-xs uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                Official Recognition
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif uppercase">
                CERTIFICATE OF PARTICIPATION
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Accredited certificate issued by Department of MME, NIT Jamshedpur.
              </p>
            </div>

            {/* Certificate Visual Mock Preview */}
            <div className="bg-gradient-to-br from-amber-500/10 via-slate-50 to-blue-50 border-2 border-amber-300/80 rounded-3xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white p-0.5 ring-2 ring-amber-400 overflow-hidden shadow-sm">
                    <img src="/assets/metamap_logo.png" alt="METAMAP 2027 Logo" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase text-slate-900 font-serif">National Institute of Technology</p>
                    <p className="text-[10px] text-blue-800 font-semibold">Department of Metallurgical & Materials Engineering</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              </div>

              <div className="text-center py-2 space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Certificate of Participation</p>
                <h4 className="text-xl font-black text-slate-900 font-serif">{WORKSHOP_DETAILS.acronym}</h4>
                <p className="text-[11px] text-slate-600 italic">{WORKSHOP_DETAILS.dates} • Jamshedpur, India</p>
              </div>

              <div className="mt-4 pt-4 border-t border-dashed border-amber-300 flex items-center justify-between text-[10px] text-slate-600">
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">Director</p>
                  <p className="text-[9px] text-slate-400">Chief Patron</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">HOD, MME</p>
                  <p className="text-[9px] text-slate-400">Chairman</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">Convenors</p>
                  <p className="text-[9px] text-slate-400">METAMAP</p>
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mandatory Requirement
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CERTIFICATION_NOTE} Participants must attend lecture sessions, active laboratory demonstrations, and complete feedback submission to qualify.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
