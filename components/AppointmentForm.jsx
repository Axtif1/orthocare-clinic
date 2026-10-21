"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  PhoneCall,
  RotateCcw
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    preferredDate: "",
    preferredSlot: "Morning (10:00 AM – 02:00 PM)",
    concern: "Joint & Knee Concerns",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long.";
    }

    // Indian phone number validation (10 digits, optional +91 or 0 prefix)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred consultation date.";
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Selected date cannot be in the past.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate instant client-side processing for the frontend demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: "",
      phone: "",
      preferredDate: "",
      preferredSlot: "Morning (10:00 AM – 02:00 PM)",
      concern: "Joint & Knee Concerns",
      message: "",
    });
    setErrors({});
  };

  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultation Enquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Schedule an Orthopaedic Visit
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Submit your enquiry below or directly contact our clinic desk for immediate slot verification.
          </p>
        </div>

        {/* Demo Disclaimer Alert */}
        <div className="mb-8 bg-sky-50/80 border border-sky-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-sky-950">
          <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sky-950">Frontend Demonstration Note:</p>
            <p className="text-sky-900/90 mt-0.5">
              This form is a client-side prototype. It does not transmit patient medical data or finalize an official clinic appointment. For actual bookings, please call Dr. Tanveer Sheikh directly at <a href={CLINIC_INFO.contact.phoneTel} className="font-bold underline hover:text-sky-800">{CLINIC_INFO.contact.phone}</a>.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submittedData ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Patient Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patel"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                            : "border-slate-300 focus:border-teal-500 focus:ring-teal-200"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                            : "border-slate-300 focus:border-teal-500 focus:ring-teal-200"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={minDate || undefined}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.preferredDate
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/30"
                            : "border-slate-300 focus:border-teal-500 focus:ring-teal-200"
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Time Session */}
                  <div>
                    <label htmlFor="preferredSlot" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                      Preferred Session
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="preferredSlot"
                        name="preferredSlot"
                        value={formData.preferredSlot}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                      >
                        <option value="Morning (10:00 AM – 02:00 PM)">
                          Morning Session (10:00 AM – 02:00 PM)
                        </option>
                        <option value="Evening (05:00 PM – 08:30 PM)">
                          Evening Session (05:00 PM – 08:30 PM)
                        </option>
                        <option value="Flexible / First Available">
                          Flexible / First Available Time
                        </option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Primary Concern / Reason for Visit */}
                <div>
                  <label htmlFor="concern" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Primary Orthopaedic Concern
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  >
                    <option value="Joint & Knee Concerns">Joint &amp; Knee Concerns (Pain, Stiffness, Cartilage)</option>
                    <option value="Back & Spine Concerns">Back &amp; Spine Concerns (Neck/Lumbar Strain, Sciatica)</option>
                    <option value="Fractures & Trauma">Fractures &amp; Trauma (Impact, Cracks, Splinting)</option>
                    <option value="Sports & Activity Injuries">Sports &amp; Activity Injuries (Sprains, Ligaments)</option>
                    <option value="General Consultation">General Orthopaedic Consultation / Second Opinion</option>
                  </select>
                </div>

                {/* Message / Symptoms Notes */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Brief Notes or Symptoms <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms, duration of discomfort, or if you already have previous X-rays/MRI..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    Lead Specialist: <strong className="text-slate-700">{CLINIC_INFO.doctor.name}</strong> ({CLINIC_INFO.doctor.qualifications})
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0b2545] to-[#10335e] hover:from-[#071a30] hover:to-[#0b2545] shadow-md hover:shadow-lg transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Validating Details...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-teal-300" />
                        <span>Send Demo Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              /* Demo Confirmation Screen */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold text-xs uppercase tracking-wider">
                  Demo Confirmation Only
                </span>

                <h3 className="text-2xl font-bold text-[#0b2545] mt-3 mb-2">
                  Enquiry Form Validated Successfully!
                </h3>

                <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. This demo verified your enquiry for <strong className="text-slate-900">{submittedData.concern}</strong> on <strong className="text-slate-900">{submittedData.preferredDate}</strong> ({submittedData.preferredSlot}).
                </p>

                {/* Frontend Disclaimer Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-xl mx-auto text-left text-xs sm:text-sm text-slate-700 mb-8 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0b2545]">
                    <AlertCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Important Notice: No Backend Connected</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    This website is a frontend showcase. No actual patient data has been stored or transmitted over the internet. To confirm your real consultation with Dr. Tanveer Sheikh, please dial the clinic desk directly:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={CLINIC_INFO.contact.phoneTel}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b2545] text-white text-xs font-bold hover:bg-[#07172b]"
                    >
                      <PhoneCall className="w-4 h-4 text-teal-400" />
                      <span>Call {CLINIC_INFO.contact.phone}</span>
                    </a>
                    <span className="text-xs text-slate-500">
                      Sendhwa, New Bus Stand Square
                    </span>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-teal-900 focus:outline-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Demo Test</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
