"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X, Calendar, Activity, ChevronRight } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro-bar for quick contact and doctor credentials */}
      <div className="bg-[#091a2e] text-slate-200 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Consultant: <strong className="text-white font-medium">{CLINIC_INFO.doctor.name}</strong> ({CLINIC_INFO.doctor.qualifications})
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.contact.address.city}, MP</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href={CLINIC_INFO.contact.phoneTel}
              className="flex items-center gap-1.5 text-teal-300 hover:text-white font-medium transition-colors"
              aria-label={`Call Orthocure at ${CLINIC_INFO.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/80"
            : "bg-white py-4 border-b border-slate-100"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b2545] to-[#0d9488] flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow">
              <Activity className="w-6 h-6 text-teal-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0b2545]">
                ORTHO<span className="text-teal-600">CURE</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                Orthopaedic Clinic &bull; Sendhwa
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {CLINIC_INFO.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors focus:outline-none focus:text-teal-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: Call & Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.contact.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#0b2545] bg-slate-100 hover:bg-slate-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b2545]"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span className="hidden xl:inline">Call Clinic</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#0b2545] to-[#0f3b6c] hover:from-[#091a2e] hover:to-[#0b2545] shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={CLINIC_INFO.contact.phoneTel}
              className="p-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100"
              aria-label="Call clinic directly"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-2 mb-4">
              {CLINIC_INFO.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={CLINIC_INFO.contact.phoneTel}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#0b2545] bg-slate-100 hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call +91 7804031799</span>
              </a>

              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
