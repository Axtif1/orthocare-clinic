import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Orthocare Orthopaedic Clinic | Dr. Tanveer Sheikh (M.B.B.S., M.S. Orthopedics) Sendhwa",
  description:
    "Orthocare is an orthopaedic clinic in Sendhwa, Madhya Pradesh, led by Dr. Tanveer Sheikh (M.B.B.S., M.S. Orthopedics). Dedicated care for bone, joint, knee, spine, fractures, and sports injuries.",
  keywords: [
    "Orthocare",
    "Dr Tanveer Sheikh",
    "Orthopedic Doctor Sendhwa",
    "Orthopaedic Clinic Sendhwa MP",
    "Bone and Joint Specialist Sendhwa",
    "Knee Pain Doctor Sendhwa",
    "Fracture Doctor New Bus Stand Sendhwa",
    "M.S. Orthopedics Sendhwa",
  ],
  authors: [{ name: "Dr. Tanveer Sheikh", url: "https://orthocare.in" }],
  creator: "Orthocare Orthopaedic Clinic",
  publisher: "Orthocare",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Orthocare Orthopaedic Clinic | Dr. Tanveer Sheikh, Sendhwa",
    description:
      "Expert bone, joint, knee, spine, and fracture care in Sendhwa, Madhya Pradesh. Led by Dr. Tanveer Sheikh (M.B.B.S., M.S. Orthopedics).",
    url: "https://orthocare.in",
    siteName: "Orthocare Orthopaedic Clinic",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#0b2545" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[#fbfcfe] text-slate-900 selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
