interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill="currentColor"
          className="text-primary-100/50"
        />
        <path
          d="M0 80C240 140 480 20 720 80C960 140 1200 20 1440 80V120H0V80Z"
          fill="currentColor"
          className="text-primary-50/30"
        />
      </svg>
    </div>
  );
}
