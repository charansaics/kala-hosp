export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Doctor = {
  name: string;
  role: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type GalleryImage = {
  url: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: "Emergency & Trauma Care",
    description:
      "24-hour emergency response for surgical and medical emergencies, with immediate clinical intervention and family support.",
    icon: "🚑",
  },
  {
    title: "Cardiology",
    description:
      "Advanced cardiac evaluation, diagnostic screening, and treatment plans focused on prevention, monitoring and recovery.",
    icon: "❤️",
  },
  {
    title: "Neurology & Neurosurgery",
    description:
      "Expert neurological and neurosurgical care supported by modern imaging, specialized assessment and patient-centered recovery pathways.",
    icon: "🧠",
  },
  {
    title: "Orthopaedics",
    description:
      "Joint, bone and spine treatment with rehabilitation-driven care for movement, pain management and long-term strength.",
    icon: "🦴",
  },
  {
    title: "Maternity & Neonatal Care",
    description:
      "Safe maternity support, childbirth care and newborn treatment in a calm, family-oriented and compassionate setting.",
    icon: "👶",
  },
  {
    title: "Pediatrics",
    description:
      "Comprehensive child health services for infants, children and adolescents with preventive and clinical care.",
    icon: "🧒",
  },
  {
    title: "Gastroenterology",
    description:
      "Digestive health consultation and treatment supported by modern diagnostics and personalized care planning.",
    icon: "🩺",
  },
  {
    title: "Diagnostics & Lab Services",
    description:
      "Computerized laboratory support with biochemistry, microbiology, haematology and timely reporting for inpatient and outpatient care.",
    icon: "🧪",
  },
];

export const departments = [
  "General Medicine",
  "Cardiology",
  "Neurology",
  "Orthopaedics",
  "Pediatrics",
  "Maternity & Neonatal Care",
  "Gastroenterology",
  "Emergency & Trauma",
  "ICU & Critical Care",
  "ENT & Head-Neck",
];

export const highlights = [
  "110-bedded multi-speciality facility",
  "24-hour emergency and emergency-ready treatment",
  "Modern diagnostics with computerized lab support",
  "Pharmacy, cafeteria and patient-friendly care services",
];

export const stats = [
  { value: "110", label: "Beds" },
  { value: "24/7", label: "Emergency" },
  { value: "10+", label: "Core Specialities" },
  { value: "100%", label: "Patient Focus" },
];

export const specialisationHighlights = [
  "Latest internationally recognised medical care",
  "World-class technology with a human approach",
  "Early detection and timely intervention",
  "Comfortable support services for every stage of treatment",
];

export const galleryImages: GalleryImage[] = [
  { url: "https://kalahospitals.com/images/1.jpg", alt: "Kala Hospitals facility" },
  { url: "https://kalahospitals.com/images/2.jpg", alt: "Hospital reception area" },
  { url: "https://kalahospitals.com/images/3.jpg", alt: "Specialist consultation room" },
  { url: "https://kalahospitals.com/images/4.jpg", alt: "Hospital treatment and care environment" },
  { url: "https://kalahospitals.com/images/5.jpg", alt: "Advanced healthcare setting" },
  { url: "https://kalahospitals.com/images/6.jpg", alt: "Medical support and nursing care" },
  { url: "https://kalahospitals.com/images/7.jpg", alt: "Patient care room" },
  { url: "https://kalahospitals.com/images/8.jpg", alt: "Care environment in the hospital" },
  { url: "https://kalahospitals.com/images/9.jpg", alt: "Clinical team and hospital ambience" },
  { url: "https://kalahospitals.com/images/10.jpg", alt: "Hospital infrastructure" },
  { url: "https://kalahospitals.com/images/11.jpg", alt: "Specialist care facility" },
  { url: "https://kalahospitals.com/images/12.jpg", alt: "Kala Hospitals patient experience" },
];

export const doctors: Doctor[] = [
  {
    name: "Dr. P.V. Ramana Murthy",
    role: "Chairman & Senior Consultant",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Meera Nair",
    role: "Consultant Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. A. Rao",
    role: "Pediatric Specialist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team at Kala Hospitals made every step of treatment feel reassuring. The doctors were kind, clear, and highly professional.",
    author: "Anita S.",
  },
  {
    quote:
      "From emergency response to recovery support, the hospital felt focused on patient comfort and attentive care.",
    author: "Rakesh M.",
  },
  {
    quote:
      "A premium yet welcoming hospital experience. The facilities and staff exceeded our expectations.",
    author: "Sonia K.",
  },
];
