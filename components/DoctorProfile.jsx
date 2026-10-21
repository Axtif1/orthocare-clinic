"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle, Phone, Calendar, Stethoscope, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function DoctorProfile() {
  const { doctor, contact } = CLINIC_INFO;

  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultant Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Meet Your Orthopaedic Consultant
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Professional clinical care for joint mobility, trauma evaluation, and spine health in Sendhwa.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left: Doctor Portrait */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.qualifications}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091a2e]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-bold">{doctor.name}</p>
                    <p className="text-xs text-teal-300 font-medium">{doctor.qualifications}</p>
                  </div>
                </div>

                {/* Verified Qualification Pill */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0b2545] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>{doctor.regStatus}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Doctor Qualifications and Clinical Scope */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="mb-2">
                <span className="text-sm font-semibold tracking-wider uppercase text-teal-700">
                  {doctor.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] mt-1">
                  {doctor.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-teal-700 mt-1">
                  {doctor.qualifications}
                </p>
              </div>

              {/* Verified Credentials Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                {doctor.verifiedCredentials.map((cred, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-bold text-[#0b2545]">{cred.title}</span>
                    </div>
                    <p className="text-xs text-slate-600">{cred.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bio & Approach - strict adherence: verified only */}
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {doctor.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Consultation Scope Summary */}
              <div className="bg-teal-50/70 border border-teal-100 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wide">
                      Clinical Focus Areas
                    </h4>
                    <p className="text-xs text-slate-700 mt-0.5">
                      Knee &amp; Joint Discomfort &bull; Spinal Strain &bull; Bone Fractures &amp; Casting &bull; Sports Strains &bull; Orthopaedic Evaluations
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#0b2545] hover:bg-[#07172b] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Request Appointment</span>
                </a>

                <a
                  href={contact.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0b2545] bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
                  aria-label={`Call Dr. Tanveer Sheikh at ${contact.phone}`}
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
