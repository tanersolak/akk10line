interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-blue-600 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
