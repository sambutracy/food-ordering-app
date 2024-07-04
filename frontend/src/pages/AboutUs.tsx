import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <p className="mb-4 text-gray-700">
          Welcome to Speedy Eats, your number one source for quick and delicious meals delivered right to your doorstep. We're dedicated to giving you the very best of food delivery, with a focus on speed, customer service, and uniqueness.
        </p>
        <p className="mb-4 text-gray-700">
          Founded in 2024, Speedy Eats has come a long way from its beginnings. When we first started out, our passion for providing fast and reliable food delivery drove us to do tons of research so that Speedy Eats can offer you the best dining experience. We now serve customers all over the city and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className="mb-4 text-gray-700">
          We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700 font-bold">
          Sincerely, <br /> The Speedy Eats Team
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;