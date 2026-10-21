import Link from "next/link";
import { Activity, Phone, MapPin, ChevronRight, Shield, Heart } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#081a30] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Clinic Branding & Doctor Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-sm">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  ORTHO<span className="text-teal-400">CARE</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-teal-300">
                  Orthopaedic Clinic &bull; Sendhwa
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Specialised orthopaedic consultation and musculoskeletal care led by <strong className="text-white font-medium">{CLINIC_INFO.doctor.name}</strong> ({CLINIC_INFO.doctor.qualifications}). Dedicated to mobility, joint comfort, and fracture rehabilitation in Sendhwa.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-teal-300 font-medium">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>Verified Specialist: M.B.B.S., M.S. Orthopedics</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {CLINIC_INFO.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Clinic Contact &amp; Location
            </h4>
            
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <span>
                  {CLINIC_INFO.contact.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.contact.phoneTel}
                  className="text-white font-bold hover:text-teal-300 transition-colors"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={CLINIC_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 text-xs font-semibold border border-teal-500/30 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Sendhwa Location Map</span>
              </a>
            </div>
          </div>

        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and general informational purposes only and does not constitute a doctor-patient relationship, medical diagnosis, or personalized treatment plan. In case of acute trauma, severe pain, or medical emergency, please visit the nearest hospital emergency department or contact emergency medical services immediately.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            &copy; {currentYear} Orthocare Orthopaedic Clinic. Dr. Tanveer Sheikh. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Specialised Orthopaedic Care &bull; Sendhwa, M.P.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
