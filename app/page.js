import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import Treatments from "@/components/Treatments";
import WhyOrthocure from "@/components/WhyOrthocure";
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

        {/* Why Orthocure Section (Verified Facts Only) */}
        <WhyOrthocure />

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
