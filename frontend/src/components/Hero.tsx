import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-purple-900 bg-opacity-10 z-0"></div>
      
      {/* Hero image with preload */}
      <div className="hero-image-container">
        <img 
          src={heroImage} 
          alt="Delicious food spread"
          className={`hero-image ${isVisible ? 'visible' : ''}`}
          fetchPriority="high"
        />
      </div>
      
      {/* Text overlay with animations */}
      <div className={`hero-text-container ${isVisible ? 'visible' : ''}`}>
        <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
          Welcome to Speedy Eats
        </h1>
        
        <p className={`hero-description ${isVisible ? 'visible' : ''}`}>
          Order food anytime, any day with ease. Delivered in minutes!
        </p>
        
        <Link 
          to="/HomePage" 
          className={`hero-button ${isVisible ? 'visible' : ''}`}
        >
          Order Now
        </Link>
      </div>
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Animated dots/particles */}
        <div 
          className={`hero-floating-element bg-purple-500 top-1/4 left-1/4 w-4 h-4 ${isVisible ? 'visible' : ''}`}
        ></div>
        <div 
          className={`hero-floating-element second bg-yellow-500 bottom-1/3 right-1/3 w-6 h-6 opacity-20 ${isVisible ? 'visible' : ''}`}
        ></div>
        <div 
          className={`hero-floating-element third bg-blue-500 top-1/2 right-1/4 w-3 h-3 opacity-20 ${isVisible ? 'visible' : ''}`}
        ></div>
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className="hero-gradient-overlay"></div>
    </div>
  );
};

export default Hero;