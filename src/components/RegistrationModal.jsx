import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Copy, 
  Check, 
  Building, 
  Mail, 
  Phone, 
  User, 
  FileCheck2, 
  Printer, 
  AlertCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { REGISTRATION_FEES, BANK_DETAILS, WORKSHOP_DETAILS } from '../data/workshopData';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    categoryIndex: 0,
    institution: '',
    department: '',
    designationOrRoll: '',
    modeOfParticipation: 'In-Person',
    transactionId: '',
    transactionDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const selectedCategory = REGISTRATION_FEES[formData.categoryIndex] || REGISTRATION_FEES[0];
  const isInternal = selectedCategory.feeAmount === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `METAMAP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegId(generatedId);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white p-0.5 overflow-hidden ring-2 ring-amber-400">
              <img src="/assets/metamap_logo.png" alt="METAMAP Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>METAMAP 2027 Registration</span>
                <span className="text-xs bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-bold">Portal</span>
              </h3>
              <p className="text-xs text-blue-200">5-Day Workshop • NIT Jamshedpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Direct Google Form Banner */}
            <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
              <div className="text-center sm:text-left">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">Official Google Form</span>
                <p className="text-xs text-blue-100 mt-0.5">You can also register directly via the official Google Form:</p>
              </div>
              <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Select Participant Category *
              </label>
              <select
                value={formData.categoryIndex}
                onChange={(e) => setFormData({ ...formData, categoryIndex: Number(e.target.value) })}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none bg-slate-50"
              >
                {REGISTRATION_FEES.map((cat, i) => (
                  <option key={i} value={i}>
                    {cat.category} — {cat.fee}
                  </option>
                ))}
              </select>
            </div>

            {/* Fee summary badge */}
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${
              isInternal ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}>
              <div>
                <span className="font-semibold block">Applicable Registration Fee:</span>
                <span className="text-xs text-slate-500">{selectedCategory.description}</span>
              </div>
              <span className={`text-base font-black px-3 py-1 rounded-lg ${
                isInternal ? 'bg-emerald-600 text-white' : 'bg-blue-950 text-amber-400 font-mono'
              }`}>
                {selectedCategory.fee}
              </span>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name (as on Certificate) *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Prof. / Dr. / Mr. / Ms."
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Contact / WhatsApp Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Participation Mode</label>
                <select
                  value={formData.modeOfParticipation}
                  onChange={(e) => setFormData({ ...formData, modeOfParticipation: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none bg-white focus:border-blue-600"
                >
                  <option value="In-Person">In-Person at NIT Jamshedpur</option>
                  <option value="Hybrid / Online">Online / Hybrid Mode</option>
                </select>
              </div>
            </div>

            {/* Academic / Institutional Affiliation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Institute / Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NIT Jamshedpur / Tata Steel"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department / Branch</label>
                <input
                  type="text"
                  placeholder="e.g. Metallurgical & Materials Engg."
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Payment Verification section (if not waived) */}
            {!isInternal ? (
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400">SBI Payment Information:</span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(`A/C: ${BANK_DETAILS.accountNumber}, IFSC: ${BANK_DETAILS.ifscCode}, Name: ${BANK_DETAILS.accountName}`);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Bank Details'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-300 font-mono">
                  A/C: {BANK_DETAILS.accountNumber} | IFSC: {BANK_DETAILS.ifscCode} | SBI NIT Jamshedpur
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">NEFT / UPI / UTR Ref ID *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 432109876543"
                      value={formData.transactionId}
                      onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                      className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white font-mono outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Payment Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.transactionDate}
                      onChange={(e) => setFormData({ ...formData, transactionDate: e.target.value })}
                      className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white outline-none"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Internal NIT Jamshedpur participants do not require payment. Simply provide your NIT Roll / Employee ID.</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Confirm & Submit Registration</span>
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt View */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-4 ring-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-slate-500">
                Welcome to METAMAP 2027. A confirmation receipt has been generated.
              </p>
            </div>

            {/* Generated Acknowledgment Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="font-bold text-slate-500 uppercase tracking-wider">Registration Number</span>
                <span className="font-mono font-black text-sm text-blue-900 bg-blue-100 px-3 py-1 rounded-md">
                  {regId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <p><strong>Participant:</strong> {formData.fullName}</p>
                <p><strong>Category:</strong> {selectedCategory.badge}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Affiliation:</strong> {formData.institution}</p>
                <p><strong>Mode:</strong> {formData.modeOfParticipation}</p>
                <p><strong>Fee Status:</strong> {isInternal ? 'Fee Waived (Internal)' : 'Verified Paid'}</p>
                <p><strong>Dates:</strong> {WORKSHOP_DETAILS.dates}</p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 italic">
                Venue: {WORKSHOP_DETAILS.venue.room}, {WORKSHOP_DETAILS.venue.building}, NIT Jamshedpur
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Slip</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
              >
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
