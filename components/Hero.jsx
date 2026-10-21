"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-medium mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Orthocare Orthopaedic Clinic &bull; Sendhwa</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545] tracking-tight leading-[1.18] mb-5">
              Specialised <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2545] via-teal-700 to-teal-600">Bone, Joint &amp; Spine</span> Care in Sendhwa
            </h1>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl font-normal">
              Consult with <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctor.name}</strong>,{" "}
              <span className="text-teal-700 font-medium">({CLINIC_INFO.doctor.qualifications})</span>. 
              Orthocare offers comprehensive orthopaedic evaluations for joint aches, back discomfort, fracture recovery, and movement health.
            </p>

            {/* Verified Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>M.B.B.S., M.S. Orthopedics Qualified</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Joint, Spine, Fracture &amp; Trauma Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>New Bus Stand Square, Sendhwa</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/90 backdrop-blur-xs px-3 py-2 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Direct Inquiries &amp; Consultations</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0b2545] to-[#10335e] hover:from-[#081a30] hover:to-[#0b2545] shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <Calendar className="w-5 h-5 text-teal-300" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={CLINIC_INFO.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-[#0b2545] bg-white border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 shadow-xs hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#0b2545]"
                aria-label={`Call Dr. Tanveer Sheikh at ${CLINIC_INFO.contact.phone}`}
              >
                <Phone className="w-5 h-5 text-teal-600" />
                <span>Call {CLINIC_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Bottom Location Snippet */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
              <span>{CLINIC_INFO.contact.address.full}</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Doctor & Clinic Imagery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic/Consultation Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[16/10]">
                <Image
                  src="/images/hero-orthocare.jpg"
                  alt="Dr. Tanveer Sheikh reviewing orthopaedic joint model at Orthocare clinic"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a2e]/60 via-transparent to-transparent" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-white/50 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0b2545]">Orthocare Clinic Consultation</p>
                      <p className="text-[11px] text-slate-600">Sendhwa, Madhya Pradesh</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 font-medium text-[10px]">
                      Specialised Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating verified badge card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0b2545]">Dr. Tanveer Sheikh</p>
                    <p className="text-[11px] text-teal-700 font-semibold">M.S. Orthopedics</p>
                  </div>
                </div>
              </div>

              {/* Floating quick-call indicator card */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-gradient-to-r from-[#0b2545] to-[#10335e] text-white p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-teal-300" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-teal-300">Direct Inquiries</p>
                  <p className="text-xs font-bold">{CLINIC_INFO.contact.phone}</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
