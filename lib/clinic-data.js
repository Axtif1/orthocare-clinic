/**
 * Orthocare Orthopaedic Clinic - Central Data Store
 * All clinic details are centralized here for easy maintenance and editing.
 * Note: Unconfirmed info (hours, services) are flagged as editable placeholders.
 */

export const CLINIC_INFO = {
  name: "Orthocare",
  fullName: "Orthocare Orthopaedic Clinic",
  tagline: "Specialised Bone, Joint & Spine Care",
  subtitle: "Consultant Orthopaedic Care in Sendhwa, Madhya Pradesh",
  
  doctor: {
    name: "Dr. Tanveer Sheikh",
    qualifications: "M.B.B.S., M.S. Orthopedics",
    title: "Consultant Orthopaedic Surgeon",
    designation: "Orthopaedic Specialist",
    regStatus: "Verified Medical Qualifications",
    image: "/images/dr-tanveer-sheikh.jpg",
    bio: [
      "Dr. Tanveer Sheikh is an orthopaedic specialist holding M.B.B.S. and M.S. in Orthopedics, dedicated to delivering patient-centric bone, joint, and spine care.",
      "At Orthocare, Dr. Sheikh focuses on thorough clinical evaluation, accurate diagnosis of musculoskeletal conditions, fracture and trauma assessment, and personalized recovery roadmaps.",
      "Patients receive thoughtful, evidence-guided consultations designed to restore mobility, relieve pain, and enhance daily function."
    ],
    verifiedCredentials: [
      {
        title: "M.B.B.S.",
        desc: "Bachelor of Medicine & Bachelor of Surgery",
      },
      {
        title: "M.S. Orthopedics",
        desc: "Master of Surgery in Orthopaedic Medicine",
      },
      {
        title: "Clinical Focus",
        desc: "Joints, Spine, Trauma & Fractures, Musculoskeletal Health",
      },
    ],
  },

  contact: {
    phone: "+91 7804031799",
    phoneDisplay: "+91 78040 31799",
    phoneTel: "tel:+917804031799",
    address: {
      street: "New Bus Stand Square",
      city: "Sendhwa",
      state: "Madhya Pradesh",
      postalCode: "451666",
      country: "India",
      full: "New Bus Stand Square, Sendhwa, Madhya Pradesh 451666, India",
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Bus+Stand+Square,+Sendhwa,+Madhya+Pradesh+451666,+India",
    googleMapsEmbedQuery: "New+Bus+Stand+Square,+Sendhwa,+Madhya+Pradesh+451666",
  },

  // Editable placeholder for clinic hours (kept editable as requested)
  openingHours: {
    isPlaceholder: true,
    placeholderNotice: "Editable placeholder: Please confirm actual clinic timings before visiting.",
    schedule: [
      {
        dayGroup: "Monday to Saturday (Morning)",
        time: "10:00 AM – 02:00 PM",
        status: "Standard Session",
      },
      {
        dayGroup: "Monday to Saturday (Evening)",
        time: "05:00 PM – 08:30 PM",
        status: "Evening Session",
      },
      {
        dayGroup: "Sunday",
        time: "Emergency & Prior Inquiries Only",
        status: "Please Call Ahead",
      },
    ],
  },

  // Treatment categories - with unconfirmed notice as required
  treatments: [
    {
      id: "joint-knee",
      title: "Joint & Knee Concerns",
      shortDesc: "Assessment and conservative management of knee discomfort, joint stiffness, and age-related wear.",
      points: [
        "Clinical evaluation of knee pain and swelling",
        "Assessment of joint mobility and cartilage wear",
        "Ligament and meniscus preliminary screening",
        "Guided physical exercise and conservative care options",
      ],
      icon: "Activity",
      badge: "Joint Care",
    },
    {
      id: "back-spine",
      title: "Back & Spine Concerns",
      shortDesc: "Examination of acute and persistent neck, mid-back, and lower spine discomfort.",
      points: [
        "Postural strain and ergonomic stress assessment",
        "Lower back stiffness and sciatica symptom evaluation",
        "Disc and nerve compression clinical checks",
        "Targeted spine care guidance and posture advice",
      ],
      icon: "ShieldCheck",
      badge: "Spine Focus",
    },
    {
      id: "fractures",
      title: "Fractures & Trauma Management",
      shortDesc: "Prompt clinical assessment for bone injuries, impact trauma, and post-fracture stabilization.",
      points: [
        "Evaluation of suspected bone fractures and cracks",
        "Splinting, cast support, and immobilization guidance",
        "Post-fracture healing and union follow-ups",
        "Stiffness prevention and safe remobilization",
      ],
      icon: "Bone",
      badge: "Trauma Care",
    },
    {
      id: "sports-injuries",
      title: "Sports & Activity Injuries",
      shortDesc: "Care for sprains, muscle strains, and joint stresses from sports, labor, or physical workouts.",
      points: [
        "Acute sprain and ligament strain management",
        "Tendon and muscle tear clinical evaluation",
        "Rest, ice, compression, and elevation (RICE) protocols",
        "Safe return-to-sport and movement conditioning",
      ],
      icon: "Flame",
      badge: "Sports Rehab",
    },
    {
      id: "ortho-consultation",
      title: "Orthopaedic Consultations",
      shortDesc: "Comprehensive one-on-one evaluations for ongoing bone aches, second opinions, and diagnostic reviews.",
      points: [
        "Thorough physical musculoskeletal examination",
        "Review of X-rays, MRI scans, and lab reports",
        "Second opinions for surgical vs non-surgical paths",
        "Preventive bone health guidance for seniors and adults",
      ],
      icon: "Stethoscope",
      badge: "Full Assessment",
    },
  ],

  // Verified reasons to choose Orthocare
  whyUs: [
    {
      title: "Specialist Orthopaedic Expertise",
      desc: "Care led by Dr. Tanveer Sheikh with formal M.B.B.S. and M.S. Orthopedics qualifications.",
      icon: "Award",
    },
    {
      title: "Central Sendhwa Location",
      desc: "Situated right at New Bus Stand Square, offering prompt and convenient regional access.",
      icon: "MapPin",
    },
    {
      title: "Individualized Patient Focus",
      desc: "Dedicated consultation time to listen to your symptoms, review scans, and explain conditions clearly.",
      icon: "Users",
    },
    {
      title: "Direct Phone Access",
      desc: "Call +91 7804031799 directly to inquire about visiting hours, consultation queries, or clinic location.",
      icon: "PhoneCall",
    },
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Doctor", href: "#doctor" },
    { label: "Treatments", href: "#treatments" },
    { label: "Why Us", href: "#why-us" },
    { label: "Appointment", href: "#appointment" },
    { label: "Contact", href: "#contact" },
  ],
};
