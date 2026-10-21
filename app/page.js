import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import Treatments from "@/components/Treatments";
import WhyOrthocare from "@/components/WhyOrthocare";
import AppointmentForm from "@/components/AppointmentForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Doctor Profile Section */}
        <DoctorProfile />

        {/* Treatments & Clinical Services Section */}
        <Treatments />

        {/* Why Orthocare Section (Verified Facts Only) */}
        <WhyOrthocare />

        {/* Appointment Enquiry Form Section */}
        <AppointmentForm />

        {/* Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
