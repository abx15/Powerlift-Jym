import { Instagram, Twitter } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio?: string;
}

const TrainerCard = ({ name, role, specialization, experience, image, bio }: TrainerCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Main Info */}
          <div className="mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              {role}
            </span>
            <h3 className="text-2xl font-heading text-foreground mt-1">
              {name}
            </h3>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-4">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Specialization</span>
              <p className="text-sm text-foreground font-medium">{specialization}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Experience</span>
              <p className="text-sm text-foreground font-medium">{experience}</p>
            </div>
          </div>

          {/* Bio - Revealed on hover */}
          {bio && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
              {bio}
            </p>
          )}

          {/* Social Links */}
          <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <a
              href="#"
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
