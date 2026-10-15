import React from 'react';
import { X, Printer, Download, Sparkles, Building2, Calendar, MapPin, Award } from 'lucide-react';
import { 
  WORKSHOP_DETAILS, 
  ABOUT_TEXTS, 
  KEY_FEATURES, 
  COMMITTEE, 
  REGISTRATION_FEES, 
  BANK_DETAILS 
} from '../data/workshopData';

export default function BrochureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">METAMAP 2026 Official Workshop Brochure</span>
            <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded">PDF Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Brochure Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:p-0 print:max-h-none space-y-8 text-slate-900">
          {/* Brochure Header */}
          <div className="text-center border-b-2 border-blue-900 pb-6 space-y-2">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img src="/assets/nit_logo.png" alt="NIT Logo" className="w-16 h-16 object-contain" />
              <div className="text-left">
                <h2 className="text-lg sm:text-xl font-black text-blue-950 uppercase tracking-tight">
                  National Institute of Technology Jamshedpur
                </h2>
                <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wide">
                  Department of Metallurgical and Materials Engineering
                </h3>
                <p className="text-xs text-slate-500">Adityapur, Jamshedpur - 831014, Jharkhand, India</p>
              </div>
            </div>

            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pt-1">
              Presents 5-Day National Workshop on
            </p>

            <h1 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
              Metallurgy: Emerging Trends in Advanced Materials, Microstructural Assessment and Performance
            </h1>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-4 py-1 rounded-full text-sm mt-1 shadow-xs">
              {WORKSHOP_DETAILS.acronym}
            </div>

            <div className="flex items-center justify-center gap-6 text-xs font-bold text-slate-700 pt-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-600" /> {WORKSHOP_DETAILS.dates}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" /> {WORKSHOP_DETAILS.venue.room}, {WORKSHOP_DETAILS.venue.building}
              </span>
            </div>
          </div>

          {/* Workshop Objective */}
          <div>
            <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-amber-500 pl-2">
              Objective of the Workshop
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {ABOUT_TEXTS.workshop.objective}
            </p>
          </div>

          {/* Key Features & Broad Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-blue-600 pl-2">
                Key Features
              </h4>
              <ul className="space-y-1.5 text-slate-700">
                {KEY_FEATURES.map((kf) => (
                  <li key={kf.id} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">⮚</span>
                    <span><strong>{kf.title}:</strong> {kf.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-emerald-600 pl-2">
                Registration Fee Structure
              </h4>
              <div className="space-y-1.5">
                {REGISTRATION_FEES.map((fee, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-semibold text-slate-800 text-[11px]">{fee.category}</span>
                    <span className="font-mono font-bold text-[11px] text-blue-900">{fee.fee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Committee Leadership */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-3 text-center">
              Patrons & Workshop Leadership
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">Chief Patron</p>
                <p className="font-bold text-slate-900 mt-0.5">{COMMITTEE.chiefPatron.name}</p>
                <p className="text-[10px] text-slate-600">{COMMITTEE.chiefPatron.designation}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">Patron</p>
                <p className="font-bold text-slate-900 mt-0.5">{COMMITTEE.patron.name}</p>
                <p className="text-[10px] text-slate-600">{COMMITTEE.patron.designation}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">Chairman</p>
                <p className="font-bold text-slate-900 mt-0.5">{COMMITTEE.chairman.name}</p>
                <p className="text-[10px] text-slate-600">{COMMITTEE.chairman.designation}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">Convenors</p>
                <p className="font-bold text-slate-900 mt-0.5">Dr. Anushree Dutta & Dr. Amit Patel</p>
                <p className="text-[10px] text-slate-600">Asst. Professors, DMME</p>
              </div>
            </div>
          </div>

          {/* Bank Payment Information */}
          <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/60 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-blue-950 uppercase text-[11px]">Bank Account for Fee Transfer:</p>
              <p className="text-slate-700 mt-0.5">
                Account Name: <strong>{BANK_DETAILS.accountName}</strong> | A/C No: <strong>{BANK_DETAILS.accountNumber}</strong>
              </p>
              <p className="text-slate-600 text-[11px]">
                Bank: {BANK_DETAILS.bankName}, {BANK_DETAILS.branch} | IFSC: <strong>{BANK_DETAILS.ifscCode}</strong>
              </p>
            </div>
            <div className="text-center sm:text-right flex-shrink-0 text-[11px] text-slate-600">
              <p>Convenor Contact:</p>
              <p className="font-bold text-blue-900">+91 8017265397 / +91 8305026990</p>
              <p>anushreedutta.met@nitjsr.ac.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
