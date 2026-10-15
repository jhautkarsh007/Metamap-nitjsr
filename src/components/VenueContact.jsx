import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Navigation, 
  Plane, 
  Train, 
  Car, 
  Building,
  Clock,
  Sparkles
} from 'lucide-react';
import { CONTACT_PERSONS, HOW_TO_REACH, WORKSHOP_DETAILS } from '../data/workshopData';

const TRANSPORT_ICONS = {
  Plane: Plane,
  Train: Train,
  Car: Car
};

export default function VenueContact() {
  return (
    <section id="venue" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-widest bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Location & Contacts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Venue & How to Reach
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Located in the industrial heart of India. Contact convenors for inquiries and logistical assistance.
          </p>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Convenors Contact Cards */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            Get In Touch With Workshop Convenors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CONTACT_PERSONS.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-slate-100 ring-4 ring-blue-500/20 overflow-hidden flex-shrink-0 shadow-sm">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/assets/nit_logo.png'; }}
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {person.role}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{person.name}</h4>
                  <p className="text-xs text-blue-700 font-semibold">{person.designation}</p>
                  <p className="text-xs text-slate-500">{person.department}, NIT Jamshedpur</p>

                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1 text-xs">
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 text-slate-700 hover:text-blue-700 font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>{person.email}</span>
                    </a>
                    <a
                      href={`tel:${person.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 text-slate-700 hover:text-blue-700 font-medium transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{person.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Venue Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 bg-blue-600/30 text-blue-400 rounded-xl border border-blue-500/40">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Event Venue</h3>
                <p className="text-xs text-slate-400">NIT Jamshedpur Campus</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">Lecture Hall</p>
                <p className="text-white font-bold">{WORKSHOP_DETAILS.venue.room}</p>
                <p className="text-slate-300 text-xs mt-0.5">{WORKSHOP_DETAILS.venue.building}</p>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">Demonstration Labs</p>
                <p className="text-white font-bold">Physical Metallurgy & Characterization Laboratories</p>
                <p className="text-slate-300 text-xs mt-0.5">Department of Metallurgical and Materials Engineering</p>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">Postal Address</p>
                <p className="text-white font-medium">
                  National Institute of Technology Jamshedpur,<br />
                  Adityapur, Jamshedpur - 831014, Jharkhand, India.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>PIN: 831014</span>
              <span className="text-amber-400 font-semibold">Tatanagar Rly ~7 km</span>
            </div>
          </div>

          {/* Interactive Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 h-[380px] relative">
            <iframe
              title="NIT Jamshedpur Location Map"
              src="https://maps.google.com/maps?q=National+Institute+of+Technology+Jamshedpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Travel Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_TO_REACH.map((item, idx) => {
            const Icon = TRANSPORT_ICONS[item.icon] || Navigation;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all space-y-2.5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{item.mode}</h4>
                <p className="text-xs font-semibold text-blue-900">{item.route}</p>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {item.instructions}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
