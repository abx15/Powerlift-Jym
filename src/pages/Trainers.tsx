import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import TrainerCard from '@/components/ui/TrainerCard';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { trainers } from '@/data/gymData';

import heroGym from '@/assets/hero-gym.jpg';

const Trainers = () => {
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
            alt="Trainers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            EXPERT <span className="text-primary">TRAINERS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet our certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Featured Trainer Slider */}
      <section className="py-16 bg-card">
        <div className="container-gym">
          <h2 className="text-3xl font-heading text-foreground mb-8">Featured Coaches</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-12"
          >
            {trainers.map((trainer) => (
              <SwiperSlide key={trainer.id}>
                <TrainerCard {...trainer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* All Trainers Grid */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Meet The Team"
            title="Your Success Is Our Mission"
            description="Our trainers bring years of experience and passion to every session."
          />

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} {...trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <section className="section-padding bg-card">
        <div className="container-gym">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
                World-Class Coaching
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our trainers are more than just instructors – they're mentors, motivators, and 
                partners in your fitness journey. Each trainer is carefully selected for their 
                expertise, passion, and ability to inspire.
              </p>
              <div className="space-y-4">
                {[
                  'Nationally certified professionals',
                  'Specialized expertise in various disciplines',
                  'Personalized attention and guidance',
                  'Continuous education and training',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trainers.slice(0, 4).map((trainer, index) => (
                <div
                  key={trainer.id}
                  className={`overflow-hidden rounded-lg ${index === 1 || index === 2 ? 'mt-8' : ''}`}
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainers;
