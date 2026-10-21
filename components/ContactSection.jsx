"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation, 
  AlertCircle, 
  ShieldAlert, 
  Calendar,
  Building2
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function ContactSection() {
  const { contact, openingHours, doctor } = CLINIC_INFO;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic Location &amp; Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Visit Orthocure in Sendhwa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conveniently located at New Bus Stand Square with straightforward regional road access.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#0b2545]">
                    Clinic Address
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    Orthocure &bull; {doctor.name} ({doctor.qualifications})
                  </p>
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                    {contact.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: New Bus Stand Square, Sendhwa
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900 focus:outline-none"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Open in Google Maps for Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-gradient-to-r from-[#0b2545] to-[#10335e] text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase font-semibold tracking-wider text-teal-300">
                    Phone Consultation &amp; Inquiries
                  </p>
                  <a
                    href={contact.phoneTel}
                    className="text-2xl font-black text-white hover:text-teal-200 transition-colors block mt-1"
                    aria-label={`Call ${contact.phone}`}
                  >
                    {contact.phone}
                  </a>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct line for booking slots, location assistance, or orthopaedic questions.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-700/60">
                    <a
                      href={contact.phoneTel}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#0b2545] text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Click to Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours (Editable Placeholder as requested) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <h3 className="text-base font-bold text-[#0b2545]">
                    Clinic Visiting Hours
                  </h3>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                  Editable Placeholder
                </span>
              </div>

              {/* Editable placeholder warning banner */}
              <div className="mb-4 bg-amber-50 rounded-lg p-2.5 flex items-start gap-2 text-[11px] text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{openingHours.placeholderNotice}</span>
              </div>

              <div className="space-y-3">
                {openingHours.schedule.map((slot, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-100 last:border-none text-xs sm:text-sm"
                  >
                    <span className="font-medium text-slate-700">{slot.dayGroup}</span>
                    <span className="font-semibold text-[#0b2545] mt-0.5 sm:mt-0">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Styled Map View */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-md flex-1 flex flex-col min-h-[420px]">
              
              {/* Map Title Bar */}
              <div className="bg-white p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500 animate-ping" />
                  <span className="text-xs font-bold text-[#0b2545]">
                    New Bus Stand Square, Sendhwa (M.P.)
                  </span>
                </div>
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b2545] text-white text-xs font-semibold hover:bg-[#07172b] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>

              {/* Responsive Google Maps Embed with fallback overlay */}
              <div className="relative w-full flex-1 min-h-[360px] bg-slate-200">
                <iframe
                  title="Orthocure Clinic Location Map - Sendhwa"
                  src="https://maps.google.com/maps?q=New+Bus+Stand+Square,+Sendhwa,+Madhya+Pradesh+451666&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Guidance */}
              <div className="bg-white p-4 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>
                  <strong>Directions Tip:</strong> Centrally accessible from all Sendhwa entry points via New Bus Stand Square.
                </span>
                <a
                  href={contact.phoneTel}
                  className="font-bold text-teal-700 hover:text-teal-900 shrink-0"
                >
                  Need Location Help? Call Us
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
