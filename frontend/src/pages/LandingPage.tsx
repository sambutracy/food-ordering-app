import { useState } from "react";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

// Import original images
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [landingImageLoaded, setLandingImageLoaded] = useState(false);
  const [appImageLoaded, setAppImageLoaded] = useState(false);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-purple-800">
              Cravings Can't Wait? Get Speedy Eats!
            </h1>
            <span className="text-xl">Crave It. Click It. Get It – With Speedy Eats!</span>
            <SearchBar
              placeHolder="Search by City or Town"
              onSubmit={handleSearchSubmit}
            />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            {/* Add placeholder while loading */}
            <div className="relative">
              {!landingImageLoaded && (
                <div className="aspect-video w-full bg-gray-100 animate-pulse rounded"></div>
              )}
              <img 
                src={landingImage} 
                className={`w-full transition-opacity duration-300 ${landingImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLandingImageLoaded(true)}
                loading="lazy"
                alt="Speedy Eats food delivery"
              />
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                From Kitchen to Doorstep in Minutes!
              </span>
              <span>
                Don't Wait to Satisfy Your Hunger – Download Speedy Eats Now!
              </span>
              <div className="relative">
                {!appImageLoaded && (
                  <div className="h-20 w-full bg-gray-100 animate-pulse rounded"></div>
                )}
                <img 
                  src={appDownloadImage} 
                  className={`transition-opacity duration-300 ${appImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setAppImageLoaded(true)}
                  loading="lazy"
                  alt="Download app"
                />
              </div>
            </div>
        </div>
        
        {/* Features section with your existing content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Lightning Fast Delivery</h3>
              <p>Get your food delivered in record time with our efficient delivery system.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-2">Wide Variety of Restaurants</h3>
              <p>Choose from a wide range of restaurants and cuisines to satisfy your cravings.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-4xl mb-4">🕒</div>
              <h3 className="text-2xl font-bold mb-2">24-hour Ordering</h3>
              <p>Enjoy the convenience of ordering your favorite meals anytime, any day.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;