import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Dumbbell, Users, Clock, Heart, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import ProgramCard from '@/components/ui/ProgramCard';
import TrainerCard from '@/components/ui/TrainerCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import StatCounter from '@/components/ui/StatCounter';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { programs, trainers, testimonials, stats, whyChooseUs } from '@/data/gymData';

import heroImage from '@/assets/hero-gym.jpg';
import heroVideo from '@/assets/hero-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, typeof Dumbbell> = {
  Dumbbell,
  Users,
  Clock,
  Heart,
};

const Index = () => {
  useLenis();
  
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  
  const whyUsRef = useScrollAnimation<HTMLDivElement>({ animation: 'stagger' });
  const statsRef = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' });
  const ctaRef = useScrollAnimation<HTMLDivElement>({ animation: 'scaleIn' });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 100, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.2, delay: 0.3 }
    )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        heroCtaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-gym text-center px-4">
          <h1
            ref={heroTitleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading text-foreground mb-6 leading-none"
          >
            UNLEASH YOUR <span className="text-primary">POWER</span>
          </h1>
          <p
            ref={heroSubtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Transform your body, elevate your mind. Join the most powerful fitness
            community and unlock your true potential.
          </p>
          <div ref={heroCtaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gym-primary">
              Join Now
            </Link>
            <Link to="/programs" className="btn-gym-outline">
              View Programs
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Experience The PowerFit Difference"
            description="We're not just a gym – we're a community dedicated to helping you achieve greatness."
          />

          <div ref={whyUsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="gym-card-hover p-8 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    {IconComponent && (
                      <IconComponent
                        size={28}
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-500"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-card">
        <div className="container-gym">
          <SectionTitle
            subtitle="Our Programs"
            title="Build Your Perfect Routine"
            description="From strength training to yoga, we offer diverse programs tailored to every fitness goal."
          />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {programs.slice(0, 4).map((program) => (
              <SwiperSlide key={program.id}>
                <ProgramCard {...program} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider hover:gap-4 transition-all"
            >
              View All Programs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div ref={statsRef} className="container-gym relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainer Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Expert Trainers"
            title="Meet Your Coaches"
            description="Our certified professionals are here to guide you every step of the way."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} {...trainer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/trainers"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider hover:gap-4 transition-all"
            >
              View All Trainers
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-card">
        <div className="container-gym">
          <SectionTitle
            subtitle="Testimonials"
            title="Success Stories"
            description="Hear from our members who have transformed their lives at PowerFit."
          />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        </div>
        <div ref={ctaRef} className="container-gym relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6">
            Ready to Start Your <span className="text-primary">Journey</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join PowerFit today and take the first step towards a stronger, healthier you.
            Your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gym-primary animate-pulse-glow">
              Start Free Trial
            </Link>
            <Link to="/pricing" className="btn-gym-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
