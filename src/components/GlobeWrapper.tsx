'use client';

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";

// Dynamically import Globe component to avoid SSR issues
const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-tl from-white via-brand-pale to-brand-light transition-all duration-1000 ease-in-out">
      <div className="w-full h-full opacity-30" />
    </div>
  )
});

export default function GlobeWrapper() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediate visibility for smoother loading
    setIsVisible(true);
    
    // Simulate load completion after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div 
        className={`w-full h-full absolute inset-0 bg-gradient-to-tl from-white via-brand-pale to-brand-light transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-30'
        }`} 
      />
      <div className={`w-full h-full transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {isVisible && <Globe />}
      </div>
    </div>
  );
}