import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", href, onClick }: CardProps) {
  const baseClasses = "rounded-xl border border-gray-200 p-4 sm:p-6 bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} block w-full ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  if (onClick) {
    return (
      <button className={`${baseClasses} w-full text-left ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}