import { useState } from "react";
import { Link } from "react-router-dom";

// Import the original hero image
import heroImage from "../assets/hero.png";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="w-full h-[500px] bg-gray-100 animate-pulse"></div>
      )}
      
      {/* Main hero image - with performance attributes */}
      <img 
        src={heroImage} 
        alt="Delicious food spread"
        className={`w-full max-h-[500px] object-cover opacity-60 transition-opacity duration-300 ${
          imageLoaded ? 'opacity-60' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
        loading="eager" // High priority loading
      />
      
      {/* Text overlay - centered on the image */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Speedy Eats</h1>
          <p className="text-lg font-bold mb-8">Order food anytime, any day with ease!</p>
          <Link 
            to="/HomePage" 
            className="px-6 py-3 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-800 inline-block"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;