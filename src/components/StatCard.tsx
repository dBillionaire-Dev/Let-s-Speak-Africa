
import { useState, useEffect, useRef } from "react";

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const targetNumber = parseInt(number.replace(/\D/g, '')) || 0;
  const hasSymbol = number.includes('+');

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    // Don't animate if not in viewport yet
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const currentCount = Math.round(easeOutQuad(progress) * targetNumber);
          
          if (frame === totalFrames) {
            clearInterval(timer);
            setCount(targetNumber);
          } else {
            setCount(currentCount);
          }
        }, frameDuration);
        
        observer.disconnect();
        return () => clearInterval(timer);
      }
    }, { threshold: 0.1 });
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [targetNumber]);

  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        {icon || (
          <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center">
            <span className="text-lsa-gold text-2xl">★</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-lsa-black">
        <span ref={countRef}>{count}</span>{hasSymbol ? '+' : ''}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
