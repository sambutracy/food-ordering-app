import React from 'react';

const contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-purple-800">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <p className="mb-4 text-gray-700">
          If you have any questions, feel free to reach out to us. We are here to help!
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-purple-700">Email</h2>
          <p className="text-gray-700">support@speedyeats.com</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-purple-700">Phone</h2>
          <p className="text-gray-700">+254-712-34567</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-purple-700">Address</h2>
          <p className="text-gray-700">1234 Foodie Lane, Flavor Town, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
