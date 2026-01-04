// Program Images
import programCrossfit from '@/assets/program-crossfit.jpg';
import programBodybuilding from '@/assets/program-bodybuilding.jpg';
import programCardio from '@/assets/program-cardio.jpg';
import programYoga from '@/assets/program-yoga.jpg';
import programStrength from '@/assets/program-strength.jpg';
import programWeightloss from '@/assets/program-weightloss.jpg';

// Trainer Images
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import trainer3 from '@/assets/trainer-3.jpg';
import trainer4 from '@/assets/trainer-4.jpg';

// Testimonial Images
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

// Gallery Images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gymInterior from '@/assets/gym-interior.jpg';

export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  level: string;
  benefits: string[];
  schedule: {
    day: string;
    time: string;
    duration: string;
  }[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
}

export const programs: Program[] = [
  {
    id: 'bodybuilding',
    title: 'Bodybuilding',
    description: 'Build muscle mass and sculpt your physique with our comprehensive bodybuilding program.',
    longDescription: 'Our bodybuilding program is designed for those who want to build serious muscle mass and achieve a sculpted, powerful physique. Under the guidance of expert trainers, you\'ll learn proper form, progressive overload techniques, and nutrition strategies to maximize your gains.',
    image: programBodybuilding,
    duration: '12 weeks',
    level: 'Intermediate',
    benefits: [
      'Personalized workout plans',
      'Nutrition guidance',
      'Progress tracking',
      'Access to premium equipment',
      'Weekly body composition analysis',
      'One-on-one coaching sessions',
    ],
    schedule: [
      { day: 'Monday', time: '6:00 AM - 8:00 PM', duration: '2 hours' },
      { day: 'Tuesday', time: '6:00 AM - 8:00 PM', duration: '1.5 hours' },
      { day: 'Wednesday', time: '6:00 AM - 8:00 PM', duration: '2 hours' },
      { day: 'Thursday', time: 'Rest Day', duration: '-' },
      { day: 'Friday', time: '6:00 AM - 8:00 PM', duration: '2 hours' },
      { day: 'Saturday', time: '8:00 AM - 2:00 PM', duration: '1.5 hours' },
    ],
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'High-intensity functional training that combines strength, cardio, and endurance.',
    longDescription: 'CrossFit combines elements from high-intensity interval training, Olympic weightlifting, plyometrics, powerlifting, gymnastics, and other exercises. Our program is scalable for all fitness levels and focuses on building overall fitness and mental toughness.',
    image: programCrossfit,
    duration: '8 weeks',
    level: 'All Levels',
    benefits: [
      'Full-body conditioning',
      'Improved cardiovascular health',
      'Increased strength and power',
      'Community-driven environment',
      'Varied daily workouts',
      'Competition opportunities',
    ],
    schedule: [
      { day: 'Monday', time: '5:30 AM, 12:00 PM, 5:30 PM', duration: '1 hour' },
      { day: 'Tuesday', time: '5:30 AM, 12:00 PM, 5:30 PM', duration: '1 hour' },
      { day: 'Wednesday', time: '5:30 AM, 12:00 PM, 5:30 PM', duration: '1 hour' },
      { day: 'Thursday', time: '5:30 AM, 12:00 PM, 5:30 PM', duration: '1 hour' },
      { day: 'Friday', time: '5:30 AM, 12:00 PM, 5:30 PM', duration: '1 hour' },
      { day: 'Saturday', time: '8:00 AM, 10:00 AM', duration: '1 hour' },
    ],
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'Burn fat and transform your body with our scientifically-backed weight loss program.',
    longDescription: 'Our weight loss program combines effective cardio training, strength exercises, and nutritional guidance to help you shed unwanted pounds and keep them off. We focus on sustainable lifestyle changes rather than quick fixes.',
    image: programWeightloss,
    duration: '16 weeks',
    level: 'Beginner',
    benefits: [
      'Customized meal plans',
      'Metabolic testing',
      'Weekly weigh-ins and measurements',
      'Support group sessions',
      'Sustainable lifestyle habits',
      'Long-term results',
    ],
    schedule: [
      { day: 'Monday', time: '7:00 AM, 6:00 PM', duration: '45 mins' },
      { day: 'Tuesday', time: '7:00 AM, 6:00 PM', duration: '45 mins' },
      { day: 'Wednesday', time: '7:00 AM, 6:00 PM', duration: '45 mins' },
      { day: 'Thursday', time: '7:00 AM, 6:00 PM', duration: '45 mins' },
      { day: 'Friday', time: '7:00 AM, 6:00 PM', duration: '45 mins' },
      { day: 'Saturday', time: '9:00 AM', duration: '1 hour' },
    ],
  },
  {
    id: 'cardio',
    title: 'Cardio',
    description: 'Improve your cardiovascular health and endurance with dynamic cardio workouts.',
    longDescription: 'Our cardio program is designed to strengthen your heart, improve lung capacity, and boost your endurance. From HIIT sessions to steady-state cardio, we offer a variety of options to keep your workouts exciting and effective.',
    image: programCardio,
    duration: '8 weeks',
    level: 'All Levels',
    benefits: [
      'Improved heart health',
      'Increased stamina',
      'Calorie burning',
      'Stress reduction',
      'Better sleep quality',
      'Enhanced mood',
    ],
    schedule: [
      { day: 'Monday', time: '6:00 AM, 5:00 PM, 7:00 PM', duration: '45 mins' },
      { day: 'Tuesday', time: '6:00 AM, 5:00 PM, 7:00 PM', duration: '45 mins' },
      { day: 'Wednesday', time: '6:00 AM, 5:00 PM, 7:00 PM', duration: '45 mins' },
      { day: 'Thursday', time: '6:00 AM, 5:00 PM, 7:00 PM', duration: '45 mins' },
      { day: 'Friday', time: '6:00 AM, 5:00 PM, 7:00 PM', duration: '45 mins' },
      { day: 'Saturday', time: '8:00 AM, 10:00 AM', duration: '1 hour' },
    ],
  },
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Find balance, flexibility, and inner peace with our expert-led yoga sessions.',
    longDescription: 'Our yoga program offers a holistic approach to fitness, combining physical postures, breathing techniques, and meditation. Whether you\'re a beginner or advanced practitioner, our certified instructors will guide you on your journey to wellness.',
    image: programYoga,
    duration: 'Ongoing',
    level: 'All Levels',
    benefits: [
      'Increased flexibility',
      'Better posture',
      'Stress relief',
      'Mind-body connection',
      'Core strength',
      'Improved breathing',
    ],
    schedule: [
      { day: 'Monday', time: '6:30 AM, 12:00 PM, 6:00 PM', duration: '1 hour' },
      { day: 'Tuesday', time: '6:30 AM, 6:00 PM', duration: '1 hour' },
      { day: 'Wednesday', time: '6:30 AM, 12:00 PM, 6:00 PM', duration: '1 hour' },
      { day: 'Thursday', time: '6:30 AM, 6:00 PM', duration: '1 hour' },
      { day: 'Friday', time: '6:30 AM, 12:00 PM, 6:00 PM', duration: '1 hour' },
      { day: 'Saturday', time: '8:00 AM, 10:00 AM', duration: '1.5 hours' },
    ],
  },
  {
    id: 'strength-training',
    title: 'Strength Training',
    description: 'Build raw power and functional strength with our comprehensive strength program.',
    longDescription: 'Our strength training program focuses on building functional strength that translates to real-world activities. Learn proper lifting techniques, progressive overload principles, and how to safely push your limits.',
    image: programStrength,
    duration: '10 weeks',
    level: 'Intermediate',
    benefits: [
      'Increased strength',
      'Better bone density',
      'Enhanced athletic performance',
      'Injury prevention',
      'Improved metabolism',
      'Functional fitness',
    ],
    schedule: [
      { day: 'Monday', time: '6:00 AM, 5:00 PM', duration: '1.5 hours' },
      { day: 'Tuesday', time: '6:00 AM, 5:00 PM', duration: '1 hour' },
      { day: 'Wednesday', time: 'Active Recovery', duration: '-' },
      { day: 'Thursday', time: '6:00 AM, 5:00 PM', duration: '1.5 hours' },
      { day: 'Friday', time: '6:00 AM, 5:00 PM', duration: '1 hour' },
      { day: 'Saturday', time: '8:00 AM', duration: '2 hours' },
    ],
  },
];

export const trainers: Trainer[] = [
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    role: 'Head Coach',
    specialization: 'Strength & Conditioning',
    experience: '12+ Years',
    image: trainer1,
    bio: 'Former professional athlete with certifications in sports science and nutrition. Marcus has helped hundreds of clients achieve their fitness goals.',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Fitness Coach',
    specialization: 'HIIT & Weight Loss',
    experience: '8+ Years',
    image: trainer2,
    bio: 'Certified personal trainer specializing in high-intensity training and body transformation. Sarah\'s energy and motivation are contagious.',
  },
  {
    id: 'david-miller',
    name: 'David Miller',
    role: 'CrossFit Coach',
    specialization: 'CrossFit & Functional',
    experience: '10+ Years',
    image: trainer3,
    bio: 'Level 3 CrossFit certified coach with a background in Olympic weightlifting. David pushes clients beyond their perceived limits.',
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    role: 'Yoga Instructor',
    specialization: 'Yoga & Meditation',
    experience: '7+ Years',
    image: trainer4,
    bio: 'RYT-500 certified yoga instructor trained in India. Emma brings a holistic approach to fitness, focusing on mind-body balance.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jake Thompson',
    role: 'Member for 2 years',
    content: 'PowerFit completely transformed my life. I\'ve lost 40 pounds and gained confidence I never knew I had. The trainers here are world-class and the community is incredibly supportive.',
    image: testimonial1,
    rating: 5,
  },
  {
    id: '2',
    name: 'Michelle Rodriguez',
    role: 'Member for 1 year',
    content: 'As a busy professional, I needed a gym that could accommodate my schedule. PowerFit\'s 24/7 access and flexible class times made it possible for me to stay consistent with my fitness routine.',
    image: testimonial2,
    rating: 5,
  },
  {
    id: '3',
    name: 'Robert Kim',
    role: 'Member for 3 years',
    content: 'I\'ve tried many gyms over the years, but none compare to PowerFit. The equipment is top-notch, the facility is always clean, and the trainers genuinely care about your progress.',
    image: testimonial3,
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49,
    period: 'month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Gym access (6AM - 10PM)',
      'Basic equipment access',
      'Locker room facilities',
      'Free fitness assessment',
      'Mobile app access',
    ],
    featured: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 89,
    period: 'month',
    description: 'Most popular choice for dedicated fitness enthusiasts',
    features: [
      '24/7 gym access',
      'Full equipment access',
      'All group classes included',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Towel service',
      'Guest passes (2/month)',
    ],
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 149,
    period: 'month',
    description: 'Ultimate package for serious athletes',
    features: [
      '24/7 VIP access',
      'All Standard features',
      'Weekly personal training sessions',
      'Custom meal plans',
      'Recovery zone access',
      'Priority class booking',
      'Unlimited guest passes',
      'Exclusive member events',
    ],
    featured: false,
  },
];

export const galleryImages = [
  { id: '1', src: gallery1, alt: 'Weight training area' },
  { id: '2', src: gallery2, alt: 'Group fitness class' },
  { id: '3', src: gallery3, alt: 'Boxing training area' },
  { id: '4', src: gallery4, alt: 'Premium locker facilities' },
  { id: '5', src: gymInterior, alt: 'Main gym floor' },
];

export const stats = [
  { value: 5000, suffix: '+', label: 'Active Members' },
  { value: 25, suffix: '+', label: 'Expert Trainers' },
  { value: 50, suffix: '+', label: 'Weekly Classes' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

export const whyChooseUs = [
  {
    icon: 'Dumbbell',
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and free weights from leading fitness brands.',
  },
  {
    icon: 'Users',
    title: 'Expert Trainers',
    description: 'Certified professionals dedicated to helping you achieve your goals.',
  },
  {
    icon: 'Clock',
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock facility access.',
  },
  {
    icon: 'Heart',
    title: 'Supportive Community',
    description: 'Join a motivating community of like-minded fitness enthusiasts.',
  },
];
