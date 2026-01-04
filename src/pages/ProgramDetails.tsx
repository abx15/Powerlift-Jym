import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, Calendar, CheckCircle } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { programs } from '@/data/gymData';

const ProgramDetails = () => {
  useLenis();
  
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === id);

  const benefitsRef = useScrollAnimation<HTMLDivElement>({ animation: 'stagger' });
  const scheduleRef = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' });

  if (!program) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-foreground mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-primary underline">
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container-gym pb-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Programs</span>
          </Link>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider">
              {program.duration}
            </span>
            <span className="px-4 py-2 bg-card text-foreground text-sm font-semibold uppercase tracking-wider border border-border">
              {program.level}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground">
            {program.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading text-foreground mb-6">About This Program</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-12">
                {program.longDescription}
              </p>

              {/* Benefits */}
              <h3 className="text-2xl font-heading text-foreground mb-6">What You'll Get</h3>
              <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {program.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Schedule */}
              <h3 className="text-2xl font-heading text-foreground mb-6">Weekly Schedule</h3>
              <div ref={scheduleRef} className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wider">Day</th>
                      <th className="text-left py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wider">Time</th>
                      <th className="text-left py-4 px-4 text-muted-foreground font-medium uppercase text-sm tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {program.schedule.map((item, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-4 px-4 text-foreground font-medium">{item.day}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.time}</td>
                        <td className="py-4 px-4 text-muted-foreground">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="gym-card p-8 sticky top-32">
                <h3 className="text-2xl font-heading text-foreground mb-6">Quick Info</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="text-foreground font-semibold">{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BarChart className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Level</p>
                      <p className="text-foreground font-semibold">{program.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sessions</p>
                      <p className="text-foreground font-semibold">5-6 per week</p>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="btn-gym-primary w-full text-center block">
                  Join This Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetails;
