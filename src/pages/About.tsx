import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

import gymInterior from '@/assets/gym-interior.jpg';
import heroGym from '@/assets/hero-gym.jpg';
import heroVideo from '@/assets/hero-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLenis();

  const missionRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInLeft' });
  const visionRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInRight' });
  const imageRef = useParallax<HTMLImageElement>(-0.2);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.fromTo(
        items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroGym}
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground">
            ABOUT POWERFIT
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div ref={missionRef}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
                Empowering Lives Through Fitness
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2010, PowerFit emerged from a simple belief: everyone deserves 
                access to world-class fitness facilities and expert guidance. What started 
                as a small studio has grown into a community of over 5,000 members.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide an inclusive, motivating environment where 
                people of all fitness levels can achieve their goals. We combine 
                cutting-edge equipment, certified trainers, and a supportive community 
                to help you unlock your full potential.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg img-zoom">
              <img
                ref={imageRef}
                src={gymInterior}
                alt="PowerFit Gym Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-foreground font-heading text-2xl">
                  15,000+ SQ FT OF PREMIUM SPACE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-card">
        <div className="container-gym">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg" />
              <img
                src={heroGym}
                alt="Vision"
                className="w-full h-[500px] object-cover rounded-lg relative z-10"
              />
            </div>
            <div ref={visionRef} className="order-1 lg:order-2">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
                Building A Healthier Tomorrow
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We envision a world where fitness is not a luxury but a lifestyle 
                accessible to everyone. Our goal is to be the catalyst for positive 
                change in our community's health and well-being.
              </p>
              <div className="space-y-4">
                {[
                  'State-of-the-art facilities',
                  'Science-backed training methods',
                  'Inclusive community environment',
                  'Continuous innovation and improvement',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones That Define Us"
            description="From humble beginnings to becoming a fitness powerhouse."
          />

          <div ref={timelineRef} className="max-w-4xl mx-auto mt-16">
            {[
              { year: '2010', title: 'The Beginning', description: 'PowerFit opens its doors with a 3,000 sq ft facility and 2 trainers.' },
              { year: '2014', title: 'Major Expansion', description: 'We move to a 10,000 sq ft location and introduce group fitness classes.' },
              { year: '2018', title: 'Community Milestone', description: 'Celebrating 2,500 members and launching our nutrition program.' },
              { year: '2021', title: 'Digital Transformation', description: 'Launch of PowerFit app and online training programs.' },
              { year: '2024', title: 'Today & Beyond', description: '5,000+ members, 25 trainers, and expanding to new locations.' },
            ].map((item, index) => (
              <div key={index} className="timeline-item relative pl-8 pb-12 border-l border-border last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-primary rounded-full" />
                <span className="text-primary font-heading text-3xl block mb-2">{item.year}</span>
                <h3 className="text-xl font-heading text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary">
        <div className="container-gym text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', description: 'We strive for excellence in everything we do, from equipment to coaching.' },
              { title: 'Community', description: 'We believe in the power of community to inspire and motivate.' },
              { title: 'Integrity', description: 'We operate with honesty, transparency, and respect for all.' },
            ].map((value, index) => (
              <div key={index} className="p-8 border border-primary-foreground/20 rounded-lg">
                <h3 className="text-2xl font-heading text-primary-foreground mb-4">{value.title}</h3>
                <p className="text-primary-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
