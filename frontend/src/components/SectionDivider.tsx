interface SectionDividerProps {
  title?: string;
  className?: string;
}

export default function SectionDivider({ title, className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-primary-200"></div>
      {title && (
        <>
          <span className="text-2xl md:text-3xl font-serif font-semibold text-neutral-700 text-center">
            {title}
          </span>
          <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-primary-200"></div>
        </>
      )}
      {!title && (
        <div className="w-8 h-8">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-primary-300">
            <circle cx="16" cy="16" r="3" fill="currentColor" />
            <circle cx="6" cy="16" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="26" cy="16" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      )}
    </div>
  );
}
