

import React from 'react';
import { Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold text-blue-800/30 leading-none">
            404
          </h1>
          <div className="-mt-8 md:-mt-12 lg:-mt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400 blur-3xl opacity-20 rounded-full"></div>
            <Search className="relative w-24 h-24 md:w-32 md:h-32 text-amber-400/50" strokeWidth={1.5} />
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-semibold text-white mb-2">
            Sardar Global Trading Co. Ltd
          </p>
          <p className="text-sm md:text-base text-amber-400 italic">
            Your Personal Trading Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;