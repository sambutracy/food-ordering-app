import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import feature1Image from "../assets/feature1.png";
import feature2Image from "../assets/feature2.png";
import feature3Image from "../assets/feature3.png";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 p-8 bg-gray-100">
      {/* Intro Section */}
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-purple-800">
          Cravings Can't Wait? Get Speedy Eats!
        </h1>
        <span className="text-xl">
          Crave It. Click It. Get It – With Speedy Eats!
        </span>
        <Link to="/HomePage" className="mt-4">
          <button className="px-4 py-2 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-800">
            Try Speedy Eats Now!
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} className="w-full max-h-[2000px] object-cover" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            From Kitchen to Doorstep in Minutes!
          </span>
          <span>
            Don’t Wait to Satisfy Your Hunger – Download Speedy Eats Now!
          </span>
          <img src={appDownloadImage} className="w-full max-h-[2000px] object-cover" />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature1Image} alt="Feature 1" className="w-full mb-4" />
            <h3 className="text-2xl font-bold mb-2">Lightning Fast Delivery</h3>
            <p>Get your food delivered in record time with our efficient delivery system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature2Image} alt="Feature 2" className="w-full mb-4" />
            <h3 className="text-2xl font-bold mb-2">Wide Variety of Restaurants</h3>
            <p>Choose from a wide range of restaurants and cuisines to satisfy your cravings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature3Image} alt="Feature 3" className="w-full mb-4" />
            <h3 className="text-2xl font-bold mb-2">24-hour Ordering Convenience</h3>
            <p>Enjoy the convenience of being able to order your favorite meals anytime, any day, with Speedy Eats.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="mb-4">
          Speedy Eats was inspired by our own late-night cravings and the frustration of slow delivery services. As food enthusiasts and tech geeks, we decided to build a solution that prioritizes speed, reliability, and variety. This project is a labor of love and a Portfolio Project for Holberton School.
        </p>
        <p className="mb-4">
          Check out our team members and follow us on social media:
        </p>
        <div className="flex justify-center space-x-8 mb-4">
          <div>
            <h3 className="font-bold">Tracy Sambu</h3>
            <a href="https://www.linkedin.com/in/tracysambu/" className="text-purple-700 hover:underline">LinkedIn</a> | <a href="https://github.com/sambutracy" className="text-purple-700 hover:underline">GitHub</a> | <a href="https://x.com/sambu_tracy" className="text-purple-700 hover:underline">Twitter</a>
          </div>
          <div>
            <h3 className="font-bold">Derrick Mungai</h3>
            <a href="https://ke.linkedin.com/in/derrick-njuguna" className="text-purple-700 hover:underline">LinkedIn</a> | <a href="https://github.com/vintage254" className="text-purple-700 hover:underline">GitHub</a> | <a href="https://twitter.com/member2" className="text-purple-700 hover:underline">Twitter</a>
          </div>
        </div>
        <p className="mb-4">
          Explore our project repository on <a href="https://github.com/sambutracy/food-ordering-app.git" className="text-purple-700 hover:underline">GitHub</a>.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
