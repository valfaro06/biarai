import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  href, 
  onClick, 
  disabled = false,
  type = "button"
}: ButtonProps) {
  
  const baseClasses = "font-semibold rounded-lg text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl w-full block";
  
  const variantClasses = {
    primary: "bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium",
    secondary: "bg-gradient-to-tl from-white via-brand-pale to-brand-light text-gray-700 hover:from-brand-pale hover:via-brand-light hover:to-brand-medium border-2 border-brand-light hover:border-brand-medium"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[44px]",
    md: "px-6 py-4 text-base min-h-[52px]", 
    lg: "px-8 py-5 text-lg min-h-[56px]"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  if (href && !disabled) {
    return (
      <a href={href} className={allClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={allClasses} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}