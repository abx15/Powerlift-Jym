import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import ProgramCard from '@/components/ui/ProgramCard';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { programs } from '@/data/gymData';

import heroGym from '@/assets/hero-gym.jpg';

const Programs = () => {
  useLenis();

  const gridRef = useScrollAnimation<HTMLDivElement>({ animation: 'stagger', staggerAmount: 0.15 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Programs
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            TRAIN LIKE A <span className="text-primary">CHAMPION</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of expertly designed programs to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Featured Programs Slider */}
      <section className="py-16 bg-card">
        <div className="container-gym">
          <h2 className="text-3xl font-heading text-foreground mb-8">Featured Programs</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="All Programs"
            title="Find Your Perfect Fit"
            description="Whether you're a beginner or advanced athlete, we have a program for you."
          />

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-gym text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-foreground mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Book a free consultation with our expert trainers and we'll help you find the perfect program.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-semibold uppercase tracking-widest transition-all hover:bg-foreground/90"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
