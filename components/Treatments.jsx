"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  ShieldCheck, 
  Flame, 
  Stethoscope, 
  AlertCircle, 
  Check, 
  ArrowRight,
  Crosshair
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

// Icon resolver helper for treatments
function getTreatmentIcon(iconName) {
  switch (iconName) {
    case "Activity":
      return <Activity className="w-6 h-6 text-teal-600" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-teal-600" />;
    case "Bone":
      return <Crosshair className="w-6 h-6 text-teal-600" />;
    case "Flame":
      return <Flame className="w-6 h-6 text-teal-600" />;
    case "Stethoscope":
    default:
      return <Stethoscope className="w-6 h-6 text-teal-600" />;
  }
}

export default function Treatments() {
  const { treatments } = CLINIC_INFO;

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Comprehensive Orthopaedic Care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated evaluations and care plans tailored to musculoskeletal health and mobility recovery.
          </p>
        </div>

        {/* Required Confirmation Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-amber-950">
              Notice: Confirm actual services before publishing
            </p>
            <p className="text-amber-800/90 mt-0.5">
              The services below reflect standard orthopaedic consultation areas provided by Dr. Tanveer Sheikh. Specific clinical procedures, splinting materials, and session availability can be verified directly via phone at <a href={CLINIC_INFO.contact.phoneTel} className="font-semibold underline hover:text-amber-950">+91 7804031799</a>.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <span className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                      {getTreatmentIcon(item.icon)}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-[#0b2545] mb-2.5 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.shortDesc}
                </p>

                {/* Key Points */}
                <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 group/link focus:outline-none"
                >
                  <span>Inquire for Consultation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
                <span className="text-[11px] text-slate-400 font-medium">Sendhwa Clinic</span>
              </div>
            </motion.div>
          ))}

          {/* Quick Consultation Call Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: treatments.length * 0.08 }}
            className="bg-gradient-to-br from-[#0b2545] to-[#10335e] rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-5">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unsure Which Specialist Care You Need?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Directly discuss your symptoms or schedule an evaluation with Dr. Tanveer Sheikh at Orthocare.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-700/60">
              <a
                href={CLINIC_INFO.contact.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#0b2545] font-bold text-sm transition-colors shadow"
              >
                <span>Call {CLINIC_INFO.contact.phone}</span>
              </a>
              <p className="text-[11px] text-center text-slate-400">
                New Bus Stand Square, Sendhwa
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
