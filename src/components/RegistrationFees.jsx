import React, { useState } from 'react';
import { 
  CreditCard, 
  Copy, 
  Check, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2,
  Award,
  ExternalLink
} from 'lucide-react';
import { REGISTRATION_FEES, PAYMENT_DETAILS, WORKSHOP_DETAILS, CERTIFICATION_NOTE } from '../data/workshopData';

export default function RegistrationFees() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="registration" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Fee & Payment Schedule
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight font-serif uppercase">
            REGISTRATION FEE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Inclusive GST fee structure. Complete fee waiver for internal NIT Jamshedpur students, research scholars, and faculty.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Fee Table (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-serif">
                <CreditCard className="w-5 h-5 text-blue-700" />
                <span>Category Fee Structure</span>
              </h3>
              <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-semibold">
                GST Included
              </span>
            </div>

            <div className="space-y-3.5">
              {REGISTRATION_FEES.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.highlighted
                      ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-slate-50 border-slate-200/90 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {item.highlighted ? (
                        <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0" />
                      )}
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.category}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 ml-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                    <span
                      className={`text-sm sm:text-base font-black px-3.5 py-1.5 rounded-xl font-mono ${
                        item.highlighted
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-blue-950 text-amber-400'
                      }`}
                    >
                      {item.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note from Photo 2 & 3 */}
            <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200/90 rounded-2xl text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-2.5">
              <Award className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>NOTE : </strong> {CERTIFICATION_NOTE}
              </span>
            </div>
          </div>

          {/* Official Bank Account Details (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-400/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-400 font-serif">
                    PAYMENT DETAILS
                  </h3>
                  <p className="text-xs text-slate-400">NEFT / RTGS / IMPS / UPI</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">
                SBI Official
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Account Name */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  Account Name
                </span>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="font-mono text-xs sm:text-sm font-bold text-white break-all">
                    {PAYMENT_DETAILS.accountName}
                  </span>
                  <button
                    onClick={() => handleCopy(PAYMENT_DETAILS.accountName, 'accountName')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Account Name"
                  >
                    {copiedField === 'accountName' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  Account Number
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-lg font-black text-amber-400 tracking-wider">
                    {PAYMENT_DETAILS.accountNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(PAYMENT_DETAILS.accountNumber, 'accountNumber')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy Account Number"
                  >
                    {copiedField === 'accountNumber' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Bank & Branch */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                    Bank Name
                  </span>
                  <span className="font-bold text-white text-xs block mt-1">
                    {PAYMENT_DETAILS.bankName}
                  </span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                    Branch
                  </span>
                  <span className="font-bold text-white text-xs block mt-1">
                    {PAYMENT_DETAILS.branch}
                  </span>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                  IFSC Code
                </span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-base font-black text-emerald-400 tracking-wider">
                    {PAYMENT_DETAILS.ifscCode}
                  </span>
                  <button
                    onClick={() => handleCopy(PAYMENT_DETAILS.ifscCode, 'ifscCode')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifscCode' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

           

            {/* Action CTA Button */}
            <a
              href={WORKSHOP_DETAILS.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 transition-all text-center"
            >
              <span>Fill Registration Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
