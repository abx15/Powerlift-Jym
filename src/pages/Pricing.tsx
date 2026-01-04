import { Link } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import PricingCard from '@/components/ui/PricingCard';
import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { pricingPlans } from '@/data/gymData';

import heroGym from '@/assets/hero-gym.jpg';

const Pricing = () => {
  useLenis();

  const pricingRef = useScrollAnimation<HTMLDivElement>({ animation: 'stagger', staggerAmount: 0.2 });
  const faqRef = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' });

  const faqs = [
    {
      question: 'Can I switch my membership plan?',
      answer: 'Yes, you can upgrade or downgrade your membership at any time. Changes will take effect at the start of your next billing cycle.',
    },
    {
      question: 'Is there a contract or commitment?',
      answer: 'We offer month-to-month memberships with no long-term contracts. You can cancel anytime with 30 days notice.',
    },
    {
      question: 'What\'s included in the free trial?',
      answer: 'Our 7-day free trial gives you full access to the gym, all equipment, and group classes. Personal training sessions are not included.',
    },
    {
      question: 'Do you offer corporate memberships?',
      answer: 'Yes! We offer special rates for businesses. Contact us for more information about corporate packages.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Membership Plans
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground mb-4">
            INVEST IN <span className="text-primary">YOURSELF</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan to match your fitness goals and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="Pricing"
            title="Simple, Transparent Pricing"
            description="No hidden fees. No surprises. Just results."
          />

          <div ref={pricingRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-card">
        <div className="container-gym">
          <SectionTitle
            subtitle="Compare Plans"
            title="Find What's Right For You"
          />

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-heading text-xl">Features</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 px-4 text-foreground font-heading text-xl">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Gym Access', basic: '6AM-10PM', standard: '24/7', premium: '24/7 VIP' },
                  { feature: 'Equipment Access', basic: 'Basic', standard: 'Full', premium: 'Full + Premium' },
                  { feature: 'Group Classes', basic: '✗', standard: '✓', premium: '✓' },
                  { feature: 'Personal Training', basic: '✗', standard: 'Consultation', premium: 'Weekly Sessions' },
                  { feature: 'Nutrition Guidance', basic: '✗', standard: '✓', premium: 'Custom Plans' },
                  { feature: 'Towel Service', basic: '✗', standard: '✓', premium: '✓' },
                  { feature: 'Guest Passes', basic: '✗', standard: '2/month', premium: 'Unlimited' },
                  { feature: 'Recovery Zone', basic: '✗', standard: '✗', premium: '✓' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 text-foreground font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.basic}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.standard}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-gym">
          <SectionTitle
            subtitle="FAQ"
            title="Common Questions"
          />

          <div ref={faqRef} className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="gym-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-gym text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-foreground mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Try PowerFit free for 7 days. No credit card required.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-semibold uppercase tracking-widest transition-all hover:bg-foreground/90"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
