import React from 'react';

export const Shimmer = ({ width = '100%', height = '100px' }) => {
  return (
    <div
      style={{ width, height }}
      className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md"
    ></div>
  );
};

export const ShimmerText = ({ width = '100%', height = '24px' }) => (
  <div 
    className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded"
    style={{ width, height }}
  ></div>
);

export const ShimmerImage = ({ width = '100%', height = '200px' }) => (
  <div
    className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-lg"
    style={{ width, height }}
  ></div>
);

export const ShimmerCard = ({ width = '100%', height = '300px' }) => (
  <div
    className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-xl overflow-hidden"
    style={{ width, height }}
  >
    <div className="h-2/3 bg-gray-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export const ShimmerHero = () => (
  <div className="w-full h-[600px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div className="w-1/2 space-y-6">
        <div className="h-12 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        <div className="h-10 w-1/3 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

export const ShimmerServices = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="h-8 w-48 mx-auto bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-64 mx-auto bg-gray-200 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ShimmerTestimonials = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="h-8 w-48 mx-auto bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-64 mx-auto bg-gray-200 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div className="ml-4 space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ShimmerPortfolio = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="h-8 w-48 mx-auto bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-64 mx-auto bg-gray-200 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ShimmerCTA = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
    <div className="max-w-7xl mx-auto text-center">
      <div className="h-8 w-64 mx-auto bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-96 mx-auto bg-gray-200 rounded mb-8"></div>
      <div className="h-12 w-48 mx-auto bg-gray-200 rounded"></div>
    </div>
  </div>
);

// Add this to your tailwind.config.js
// animation: {
//   shimmer: 'shimmer 2s linear infinite',
// },
// keyframes: {
//   shimmer: {
//     '0%': { backgroundPosition: '-200% 0' },
//     '100%': { backgroundPosition: '200% 0' },
//   },
// },




