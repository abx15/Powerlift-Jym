import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) => {
  const containerRef = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' });

  return (
    <div
      ref={containerRef}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
    >
      {subtitle && (
        <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6 ${
          light ? 'text-background' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-background/80' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
