export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon string
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  tag: string; // e.g., "Fever Cure", "General Wellness"
}

export interface ChoiceReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  symptoms: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
