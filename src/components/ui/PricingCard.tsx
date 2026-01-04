import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: number;
  period?: string;
  features: string[];
  featured?: boolean;
  description?: string;
}

const PricingCard = ({
  name,
  price,
  period = 'month',
  features,
  featured = false,
  description,
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-lg transition-all duration-500 ${
        featured
          ? 'bg-primary text-primary-foreground pricing-featured scale-105 z-10'
          : 'gym-card-hover'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <div className="text-center mb-8">
        <h3
          className={`text-2xl font-heading mb-2 ${
            featured ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          {name}
        </h3>
        {description && (
          <p
            className={`text-sm ${
              featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span
            className={`text-lg ${
              featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}
          >
            $
          </span>
          <span
            className={`text-6xl font-heading ${
              featured ? 'text-primary-foreground' : 'text-foreground'
            }`}
          >
            {price}
          </span>
          <span
            className={`text-lg ${
              featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}
          >
            /{period}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div
              className={`p-1 rounded-full ${
                featured ? 'bg-primary-foreground/20' : 'bg-primary/20'
              }`}
            >
              <Check
                size={14}
                className={featured ? 'text-primary-foreground' : 'text-primary'}
              />
            </div>
            <span
              className={`text-sm ${
                featured ? 'text-primary-foreground' : 'text-muted-foreground'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        to="/contact"
        className={`block w-full py-4 text-center font-semibold text-sm uppercase tracking-widest transition-all duration-300 ${
          featured
            ? 'bg-foreground text-background hover:bg-foreground/90'
            : 'btn-gym-primary'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default PricingCard;
