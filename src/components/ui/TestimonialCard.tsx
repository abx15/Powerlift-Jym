import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  image: string;
  rating?: number;
}

const TestimonialCard = ({ name, role, content, image, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="gym-card p-8 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-foreground text-lg leading-relaxed mb-8 flex-grow">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <p className="text-foreground font-semibold">{name}</p>
          {role && <p className="text-muted-foreground text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
