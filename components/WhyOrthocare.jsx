"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, MapPin, Users, PhoneCall, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

function getFeatureIcon(iconName) {
  switch (iconName) {
    case "Award":
      return <Award className="w-5 h-5 text-teal-600" />;
    case "MapPin":
      return <MapPin className="w-5 h-5 text-teal-600" />;
    case "Users":
      return <Users className="w-5 h-5 text-teal-600" />;
    case "PhoneCall":
    default:
      return <PhoneCall className="w-5 h-5 text-teal-600" />;
  }
}

export default function WhyOrthocare() {
  const { whyUs } = CLINIC_INFO;

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Verified Clinic Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Why Patients Choose Orthocare
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Committed to medical integrity, accessible care, and specialized orthopaedic consultations in Sendhwa.
          </p>
        </div>

        {/* Content Grid: Features & Clinic Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 4 Verified Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyUs.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 hover:bg-white shadow-2xs hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors shadow-2xs">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-base font-bold text-[#0b2545] mb-2 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}

            {/* Verified Statement Banner */}
            <div className="sm:col-span-2 bg-teal-50/70 border border-teal-200/70 rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-teal-950">
                <p className="font-semibold">Pure Medical Standards</p>
                <p className="text-teal-900/90 mt-0.5">
                  Orthocare strictly adheres to ethical medical practices. Every patient receives attentive examination, clear explanation of X-rays or findings, and realistic recovery steps.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Clinic Facility & Atmosphere Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-[4/3]">
              <Image
                src="/images/clinic-facility.jpg"
                alt="Orthocare Clinic facility and welcoming consultation environment in Sendhwa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a2e]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 rounded-md bg-teal-600 text-white font-semibold text-[10px] uppercase tracking-wider">
                  Patient Comfort
                </span>
                <p className="text-base font-bold mt-1.5">
                  Serene &amp; Professional Environment
                </p>
                <p className="text-xs text-slate-300">
                  New Bus Stand Square, Sendhwa, MP
                </p>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="mt-4 flex items-center justify-between px-4 py-3 bg-slate-100/80 rounded-xl text-xs text-slate-600 border border-slate-200/70">
              <span className="font-semibold text-slate-800">Primary Speciality:</span>
              <span className="text-teal-700 font-bold">Orthopaedics &amp; Joint Care</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
