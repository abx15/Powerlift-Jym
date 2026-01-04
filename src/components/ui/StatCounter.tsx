import { useCounterAnimation } from '@/hooks/useScrollAnimation';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatCounter = ({ value, suffix = '', label }: StatCounterProps) => {
  const counterRef = useCounterAnimation(value, 2, suffix);

  return (
    <div className="text-center">
      <span
        ref={counterRef}
        className="stats-number text-white block mb-2"
      >
        0{suffix}
      </span>
      <span className="text-white/80 text-sm uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

export default StatCounter;
