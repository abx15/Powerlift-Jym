import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration?: string;
  level?: string;
}

const ProgramCard = ({ id, title, description, image, duration, level }: ProgramCardProps) => {
  return (
    <Link
      to={`/programs/${id}`}
      className="group gym-card-hover overflow-hidden block"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Badges */}
        {(duration || level) && (
          <div className="absolute top-4 left-4 flex gap-2">
            {duration && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                {duration}
              </span>
            )}
            {level && (
              <span className="px-3 py-1 bg-background/80 backdrop-blur text-foreground text-xs font-semibold uppercase tracking-wider">
                {level}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
          <span>Learn More</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
