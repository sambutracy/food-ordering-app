import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} className="w-full max-h-[2000px] object opacity-60" alt="Hero Image" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-black">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Speedy Eats</h1>
          <p className="text-lg font-bold mb-8">Order food anytime, any day with ease!</p>
          <a href="/HomePage" className="px-6 py-3 bg-purple-700 text-purple rounded-lg font-bold hover:bg-purple-800">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;