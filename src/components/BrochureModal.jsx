import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Download, 
  Eye, 
  FileCheck, 
  FileText,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { 
  WORKSHOP_DETAILS, 
  ABOUT_TEXTS, 
  KEY_FEATURES, 
  COURSE_MODULES,
  COMMITTEE, 
  REGISTRATION_FEES, 
  PAYMENT_DETAILS,
  CERTIFICATION_NOTE
} from '../data/workshopData';

export default function BrochureModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'text'
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="bg-slate-950 text-white px-4 sm:px-6 py-3.5 sm:py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white">METAMAP 2027 Workshop Brochure</span>
                <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  2-Page PDF
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                National Institute of Technology Jamshedpur • Dept. of Metallurgical & Materials Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Direct Download PDF Button */}
            <a
              href={WORKSHOP_DETAILS.brochurePdfUrl}
              download="METAMAP_2027_Brochure.pdf"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-black shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* View Fullscreen PDF in Tab */}
            <a
              href={WORKSHOP_DETAILS.brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            {/* Open Canva */}
            <a
              href={WORKSHOP_DETAILS.brochureCanvaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Canva</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 ml-1 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 px-4 sm:px-6 py-2 border-b border-slate-200 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'pdf'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Official 2-Page Brochure (PDF)
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'text'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Printable Text Details
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === 'text' && (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 bg-white border border-slate-300 px-3 py-1 rounded-lg text-xs font-bold shadow-sm transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-blue-600" />
                <span>Print View</span>
              </button>
            )}
            <span className="text-[11px] text-slate-500 font-mono hidden md:inline">
              Document: METAMAP_2027_Brochure.pdf (982 KB)
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-6">
          {/* TAB 1: 2-Page Visual PDF View */}
          {activeTab === 'pdf' && (
            <div className="space-y-6">
              {/* Info banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                    PDF
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-blue-950">
                      Official Workshop Tri-Fold Brochure (Pages 1 & 2)
                    </h3>
                    <p className="text-xs text-slate-600">
                      High-resolution brochure generated from NIT Jamshedpur DMME. Ready for print and distribution.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={WORKSHOP_DETAILS.brochurePdfUrl}
                    download="METAMAP_2027_Brochure.pdf"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download PDF File</span>
                  </a>
                  <a
                    href={WORKSHOP_DETAILS.brochurePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <span>View in Fullscreen</span>
                  </a>
                </div>
              </div>

              {/* Page 1: Outer Tri-Fold */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded">
                      PAGE 1 OF 2
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-slate-200">
                      Front & Outside Tri-Fold (Objective • Workshop Title & Dates • About Institute & Dept)
                    </span>
                  </div>
                  <a
                    href="/assets/brochure_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </a>
                </div>
                <div className="p-2 sm:p-4 bg-slate-100 flex justify-center">
                  <img
                    src="/assets/brochure_page1.png"
                    alt="METAMAP 2027 Brochure Page 1"
                    className="w-full max-w-4xl rounded-lg shadow-sm border border-slate-200 object-contain hover:shadow-md transition-shadow"
                  />
                </div>
              </div>

              {/* Page 2: Inside Tri-Fold */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white text-[10px] font-black px-2 py-0.5 rounded">
                      PAGE 2 OF 2
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-slate-200">
                      Inside Tri-Fold (Key Highlights • Modules 01-05 • Fees & Payment • Leadership & QR Code)
                    </span>
                  </div>
                  <a
                    href="/assets/brochure_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </a>
                </div>
                <div className="p-2 sm:p-4 bg-slate-100 flex justify-center">
                  <img
                    src="/assets/brochure_page2.png"
                    alt="METAMAP 2027 Brochure Page 2"
                    className="w-full max-w-4xl rounded-lg shadow-sm border border-slate-200 object-contain hover:shadow-md transition-shadow"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Printable Text Format */}
          {activeTab === 'text' && (
            <div className="space-y-7 text-slate-900 font-sans print:p-0">
              {/* Brochure Header */}
              <div className="text-center border-b-2 border-blue-900 pb-5 space-y-2">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <img src="/assets/metamap_logo.png" alt="METAMAP 2027 Logo" className="w-20 h-20 object-cover rounded-full shadow-md ring-2 ring-blue-900" />
                  <div className="text-left">
                    <h2 className="text-lg sm:text-xl font-black text-blue-950 uppercase tracking-tight font-serif">
                      NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR
                    </h2>
                    <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wide">
                      Department of Metallurgical and Materials Engineering
                    </h3>
                    <p className="text-xs text-slate-500">Presents A 5-Day workshop on</p>
                  </div>
                </div>

                <div className="inline-block px-5 py-1 rounded-full border-2 border-blue-600 bg-blue-50 text-blue-950 font-serif font-black text-xl">
                  {WORKSHOP_DETAILS.acronym}
                </div>

                <p className="text-amber-600 font-black text-sm uppercase tracking-wider">
                  {WORKSHOP_DETAILS.dates}
                </p>

                <h1 className="text-lg sm:text-xl font-black text-slate-950 leading-tight uppercase font-serif">
                  {WORKSHOP_DETAILS.shortTitle}
                </h1>

                <p className="text-xs text-slate-600 font-semibold italic">
                  {WORKSHOP_DETAILS.tagline} — {WORKSHOP_DETAILS.subTagline}
                </p>

                <div className="flex items-center justify-center gap-6 text-xs font-bold text-slate-700 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-600" /> {WORKSHOP_DETAILS.dates}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" /> VENUE : {WORKSHOP_DETAILS.venue.room}, {WORKSHOP_DETAILS.venue.institution}
                  </span>
                </div>
              </div>

              {/* Objective of the Workshop */}
              <div>
                <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-amber-500 pl-2 font-serif">
                  OBJECTIVE OF THE WORKSHOP
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {ABOUT_TEXTS.workshop.objectivesList.map((obj, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-bold text-slate-900">{obj.title}:</p>
                      <p className="text-slate-600 mt-0.5">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Outline Modules 01 to 05 */}
              <div>
                <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-blue-700 pl-2 font-serif">
                  COURSE OUTLINE / MODULES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  {COURSE_MODULES.map((mod) => (
                    <div key={mod.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="font-mono text-[10px] text-amber-600 font-bold uppercase">{mod.moduleNumber}</p>
                      <p className="font-bold text-slate-900 text-xs mb-1.5 font-serif">{mod.title}</p>
                      <ul className="space-y-1 text-[11px] text-slate-600">
                        {mod.topics.map((t, i) => (
                          <li key={i}>• {t}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Fee & Payment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {/* Fee table */}
                <div>
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-emerald-600 pl-2 font-serif">
                    REGISTRATION FEE (GST INCLUDED)
                  </h4>
                  <div className="space-y-1.5">
                    {REGISTRATION_FEES.map((fee, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="font-semibold text-slate-800 text-[11px]">{fee.category}</span>
                        <span className="font-mono font-bold text-[11px] text-blue-900">{fee.fee}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-amber-800 font-bold mt-2">
                    NOTE : {CERTIFICATION_NOTE}
                  </p>
                </div>

                {/* Payment Details */}
                <div>
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 border-l-4 border-amber-600 pl-2 font-serif">
                    PAYMENT DETAILS
                  </h4>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
                    <p>Account Name : <strong>{PAYMENT_DETAILS.accountName}</strong></p>
                    <p>Account Number : <strong className="font-mono text-blue-900 text-xs">{PAYMENT_DETAILS.accountNumber}</strong></p>
                    <p>IFSC Code : <strong className="font-mono text-emerald-800">{PAYMENT_DETAILS.ifscCode}</strong></p>
                    <p>Bank Name : {PAYMENT_DETAILS.bankName}</p>
                    <p>Branch : {PAYMENT_DETAILS.branch}</p>
                  </div>

                  <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Registration Link</span>
                    <a href={WORKSHOP_DETAILS.registrationFormUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-700 underline break-all">
                      {WORKSHOP_DETAILS.registrationFormUrl}
                    </a>
                  </div>
                </div>
              </div>

              {/* Committee Leadership */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-3 text-center font-serif">
                  ORGANISING LEADERSHIP
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
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
                    <p className="text-[10px] text-slate-600">Asst. Profs, DMME</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-slate-500">Coordinators</p>
                    <p className="font-bold text-slate-900 mt-0.5">Dr. Prakash Sarkar & Dr. Jichil Majhi</p>
                    <p className="text-[10px] text-slate-600">Asst. Profs, DMME</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
