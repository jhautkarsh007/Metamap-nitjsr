import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  Sparkles, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import { ELIGIBILITY, CERTIFICATION_INFO } from '../data/workshopData';

export default function EligibilityCertification() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Eligibility Section (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Participation Guidelines
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Eligibility for Participation
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Open to motivated participants across academia, research institutions, and core industrial sectors.
              </p>
            </div>

            <div className="space-y-3.5">
              {ELIGIBILITY.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <UserCheck className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-base">
                      {item.group}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 ml-7 leading-relaxed text-justify">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Section (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-amber-700 font-extrabold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Official Recognition
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Certification & Evaluation
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Accredited certificate issued by Department of MME, NIT Jamshedpur.
              </p>
            </div>

            {/* Certificate Visual Mock Preview */}
            <div className="bg-gradient-to-br from-amber-500/10 via-slate-50 to-blue-50 border-2 border-amber-300/80 rounded-3xl p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1 ring-1 ring-amber-400">
                    <img src="/assets/nit_logo.png" alt="NIT Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase text-slate-900">National Institute of Technology</p>
                    <p className="text-[10px] text-blue-800 font-semibold">Department of Metallurgical & Materials Engineering</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              </div>

              <div className="text-center py-2 space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Certificate of Participation</p>
                <h4 className="text-lg font-black text-slate-900">METAMAP 2026</h4>
                <p className="text-[11px] text-slate-600 italic">January 8 – 12, 2027 • Jamshedpur, India</p>
              </div>

              <div className="mt-4 pt-4 border-t border-dashed border-amber-300 flex items-center justify-between text-[10px] text-slate-600">
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">Director</p>
                  <p className="text-[9px] text-slate-400">Chief Patron</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">HoD, MME</p>
                  <p className="text-[9px] text-slate-400">Chairman</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-1" />
                  <p className="font-bold">Convenors</p>
                  <p className="text-[9px] text-slate-400">METAMAP</p>
                </div>
              </div>
            </div>

            {/* Criteria Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mandatory Certification Criteria
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                {CERTIFICATION_INFO.criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
