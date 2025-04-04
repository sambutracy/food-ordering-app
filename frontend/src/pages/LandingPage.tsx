import { useState, useEffect, useRef } from "react";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const imagesSectionRef = useRef<HTMLDivElement>(null);
  const [imagesVisible, setImagesVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if image section is in viewport
      if (imagesSectionRef.current) {
        const rect = imagesSectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setImagesVisible(true);
        }
      }
      
      // Check if features section is in viewport
      if (featureSectionRef.current) {
        const rect = featureSectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setFeaturesVisible(true);
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = landingImage;
      img2.src = appDownloadImage;
    };
    
    preloadImages();
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {/* Search Section - Animated on load */}
      <div className="search-section">
        {/* Background "pulse" animation effect */}
        <div className="search-background-pulse"></div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-purple-800 relative z-10">
          Cravings Can't Wait? Get Speedy Eats!
        </h1>
        <span className="text-xl md:text-2xl relative z-10">
          Crave It. Click It. Get It – With Speedy Eats!
        </span>
        <div className="relative z-10 transition-all duration-300 hover:scale-101 mx-auto max-w-2xl w-full">
          <SearchBar
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>

      {/* Images Section - Animated on scroll */}
      <div 
        ref={imagesSectionRef}
        className="images-section"
      >
        {/* Left side - Image */}
        <div className={`image-container ${imagesVisible ? 'visible' : ''}`}>
          <img 
            src={landingImage} 
            className="landing-image"
            alt="Speedy Eats food delivery"
            loading="lazy"
          />
        </div>
        
        {/* Right side - Text and download */}
        <div className={`text-container ${imagesVisible ? 'visible' : ''}`}>
          <span className="font-bold text-3xl md:text-4xl tracking-tighter text-purple-900">
            From Kitchen to Doorstep in Minutes!
          </span>
          <span className="text-lg text-gray-700 max-w-md">
            Don't Wait to Satisfy Your Hunger – Download Speedy Eats Now!
          </span>
          <div className="app-download-container">
            <img 
              src={appDownloadImage} 
              className="shadow-md rounded-lg"
              alt="Download app"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section - Staggered animation on scroll */}
      <div 
        ref={featureSectionRef}
        className="features-section"
      >
        <h2 className={`features-title ${featuresVisible ? 'visible' : ''}`}>
          Key Features
        </h2>
        
        <div className="features-grid">
          {/* Feature 1 */}
          <div className={`feature-card ${featuresVisible ? 'visible-1' : ''}`}>
            <div className="feature-icon">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-900">Lightning Fast Delivery</h3>
            <p className="text-gray-700">Get your food delivered in record time with our efficient delivery system.</p>
          </div>
          
          {/* Feature 2 */}
          <div className={`feature-card ${featuresVisible ? 'visible-2' : ''}`}>
            <div className="feature-icon">🍽️</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-900">Wide Variety of Restaurants</h3>
            <p className="text-gray-700">Choose from a wide range of restaurants and cuisines to satisfy your cravings.</p>
          </div>
          
          {/* Feature 3 */}
          <div className={`feature-card ${featuresVisible ? 'visible-3' : ''}`}>
            <div className="feature-icon">🕒</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-900">24-hour Ordering</h3>
            <p className="text-gray-700">Enjoy the convenience of ordering your favorite meals anytime, any day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;