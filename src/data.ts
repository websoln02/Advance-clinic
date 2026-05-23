import { Service, Testimonial, ChoiceReason, FAQItem, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: "Advance Clinic",
  type: "Medical Clinic",
  rating: 4.5,
  reviewsCount: 24,
  phone: "+91 93762 63163",
  phoneFormatted: "+919376263163",
  whatsappNumber: "+919376263163",
  address: "71, Ambalal Park Rd, Karelibagh, Vadodara, Gujarat 390018",
  landmark: "Karelibagh, Vadodara",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6276203923337!2d73.2039223!3d22.3308732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc577e5e33ebf%3A0x6bbaaba6b6770eed!2sAdvance%20Clinic!5e0!3m2!1sen!2sin!4v1716440000000!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=Advance+Clinic,+71,+Ambalal+Park+Rd,+Karelibagh,+Vadodara,+Gujarat+390018",
  timings: {
    weekdays: "Monday - Saturday",
    morning: "10:00 AM – 1:00 PM",
    evening: "5:00 PM – 9:00 PM",
    sunday: "Closed"
  },
  emergencyContact: "+91 93762 63163"
};

export const SERVICES: Service[] = [
  {
    id: "gen-consult",
    title: "General Consultation",
    description: "Expert evaluation, diagnosis, and treatment for a wide range of common illnesses and general wellness inquiries.",
    iconName: "Stethoscope"
  },
  {
    id: "fever-infection",
    title: "Fever & Infection Treatment",
    description: "Personalized clinical care for viral fevers, bacterial infections, seasonal flu, malaria, typhoid, and respiratory issues.",
    iconName: "Thermometer"
  },
  {
    id: "diabetes-bp",
    title: "Diabetes & BP Checkup",
    description: "Continuous monitoring and lifestyle/diet counsel to manage Hypertension, Diabetes, and maintain cardiovascular safety.",
    iconName: "Activity"
  },
  {
    id: "child-family",
    title: "Child & Family Health",
    description: "Multi-generational healthcare support catering to children, adults, and elderly with utmost attention and empathy.",
    iconName: "Users"
  },
  {
    id: "preventive",
    title: "Preventive Health Checkups",
    description: "Comprehensive physical tests and lab guidance to catch symptoms early and secure long-term good health.",
    iconName: "HeartPulse"
  },
  {
    id: "routine-care",
    title: "Routine Medical Care",
    description: "First-aid, dressing minor wounds, nebulization, regular follow-ups, and custom primary care services.",
    iconName: "Syringe"
  },
  {
    id: "vaccination",
    title: "Vaccination Guidance",
    description: "Advisory services for essential immunization and pediatric vaccination schedules to maintain immunity shields.",
    iconName: "ShieldAlert"
  },
  {
    id: "counseling",
    title: "Health Counseling",
    description: "Guidance on nutrition, physical fitness, stress management, habits, and pathways to sustainable recovery.",
    iconName: "MessageSquareHeart"
  }
];

export const CHOICE_REASONS: ChoiceReason[] = [
  {
    id: "exp-docs",
    title: "Experienced Doctors",
    description: "Highly qualified and empathetic physicians committed to clinical excellence and accurate diagnoses.",
    iconName: "UserCheck"
  },
  {
    id: "friendly-staff",
    title: "Friendly Staff",
    description: "A welcoming, responsive team designed to make pre-and-post consultation stress-free.",
    iconName: "Smile"
  },
  {
    id: "affordable-care",
    title: "Affordable Care",
    description: "Premium global standard consultation and treatments priced affordably for all families.",
    iconName: "IndianRupee"
  },
  {
    id: "easy-appointments",
    title: "Easy Appointments",
    description: "Skip the tiring lines with simplified online and phone appointment coordinates.",
    iconName: "CalendarDays"
  },
  {
    id: "clean-environment",
    title: "Clean & Hygienic",
    description: "Top-tier sanitized chambers, sanitized waiting layout, and medical safety procedures in Vadodara.",
    iconName: "Sparkles"
  },
  {
    id: "trusted-local",
    title: "Trusted Local Clinic",
    description: "Highly praised by Vadodara and Karelibagh families for consistency, privacy, and integrity.",
    iconName: "Award"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Patel",
    rating: 5,
    text: "Excellent experience. The doctor at Advance Clinic is very knowledgeable and patient. Explained my blood pressure levels clearly and set up an easy treatment route. Highly recommended in Karelibagh!",
    date: "2 months ago",
    tag: "Diabetes & BP Control"
  },
  {
    id: "t2",
    name: "Priya Shah",
    rating: 5,
    text: "I visited Advance Clinic for viral fever treatment. The doctor gave me the exact medicine required instead of prescribing heavy tests. Extremely professional and humble, fees is also very nominal.",
    date: "1 month ago",
    tag: "Fever Treatment"
  },
  {
    id: "t3",
    name: "Drashti Mehta",
    rating: 4,
    text: "The clinic setup is extremely clean and tidy. The checkup timing was respected. Appreciate the care shown towards children. Best family healthcare consultation in Karelibagh area.",
    date: "3 weeks ago",
    tag: "Child Healthcare"
  },
  {
    id: "t4",
    name: "Amit Solanki",
    rating: 5,
    text: "Been going to Advance Clinic for my father's diabetic follow-ups. Regular health checks here are very structured. Staff is warm and polite. Highly trustworthy medicine clinic.",
    date: "1 month ago",
    tag: "Elderly Care"
  },
  {
    id: "t5",
    name: "Vikram Rathod",
    rating: 5,
    text: "Very reliable place for routine medical checkups. Simple appointment booking process, neat infrastructure, and precise medical guidance. Solid 5-star service in Vadodara.",
    date: "2 months ago",
    tag: "Preventive Care"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "What are the clinical operational hours of Advance Clinic?",
    answer: "Advance Clinic operates in two daily shifts: Morning till 1:00 PM and Evening from 5:00 PM to 9:00 PM (Monday to Saturday). The clinic is closed on Sundays."
  },
  {
    id: "faq2",
    question: "Do I need to book an appointment in advance?",
    answer: "While we support spontaneous walk-ins, we highly recommend booking an appointment online or calling us at +91 93762 63163. Booking in advance minimizes waiting times so you receive quick medical attention."
  },
  {
    id: "faq3",
    question: "Is there parking available near the clinic?",
    answer: "Yes, there is comfortable road-side parking available for two-wheelers and four-wheelers directly near our Karelibagh premises on Ambalal Park Road."
  },
  {
    id: "faq4",
    question: "What should I bring for my first consultation?",
    answer: "Please bring any recent medical files, blood test reports, lists of active medicines you consume, and a government ID if applicable."
  },
  {
    id: "faq5",
    question: "Do you offer emergency vaccination or immunization guidance?",
    answer: "Yes, we specialize in childhood immunization schedule tracking and provide guidance on seasonal booster doses, adult vaccines, and holiday illness vaccinations."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Patient Consultation Desk",
    category: "Consultation Room",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g2",
    title: "Sanitized Waiting Lounge",
    category: "Reception Area",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g3",
    title: "Diagnostics & Routine Checkup Setup",
    category: "Clinical Area",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g4",
    title: "Family Care & Treatment Bed",
    category: "Therapy Room",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g5",
    title: "Modern Clinical Equipment",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "g6",
    title: "Comprehensive Pharmacy Corner",
    category: "Facility",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  }
];
