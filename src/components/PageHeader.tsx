interface PageHeaderProps {
  title: string;
  highlightWord: string;
  description: string;
  className?: string;
}

export default function PageHeader({ title, highlightWord, description, className = "" }: PageHeaderProps) {
  // Split title to find the highlight word
  const titleParts = title.split(highlightWord);
  
  return (
    <div className={`text-center mb-8 sm:mb-12 ${className}`}>
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
        {titleParts[0]}
        <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">
          {highlightWord}
        </span>
        {titleParts[1]}
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
        {description}
      </p>
    </div>
  );
}