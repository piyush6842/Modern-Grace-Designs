import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative overflow-hidden min-h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Transform Your Space Into a{' '}
              <span className="text-blue-600 relative">
                Masterpiece
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h1>
            <p className={`text-lg sm:text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience the perfect blend of elegance and functionality with our expert interior design services. Let us help you create the space of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } shadow-lg hover:shadow-xl hover:shadow-blue-500/20`}
              >
                Get Started
              </Link>
              <Link
                to="/portfolio"
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                } shadow-lg hover:shadow-xl`}
              >
                View Portfolio
              </Link>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { icon: '🏠', label: 'Custom Design', description: 'Tailored to your style' },
                { icon: '⚡', label: 'Fast Delivery', description: 'Quick turnaround time' },
                { icon: '💎', label: 'Premium Quality', description: 'Top-notch materials' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className={`p-4 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 hover:bg-gray-800' 
                      : 'bg-white/50 hover:bg-white'
                  } transition-all duration-300 hover:shadow-lg group cursor-pointer`}
                >
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    {feature.label}
                  </div>
                  <div className={`text-xs mt-1 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fadeIn">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src="/images/interior-1.avif"
                  alt="Modern living room design"
                  className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src="/images/interior-2.avif"
                  alt="Elegant bedroom design"
                  className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src="/images/interior-3.avif"
                  alt="Stylish kitchen design"
                  className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src="/images/interior-4.avif"
                  alt="Modern bathroom design"
                  className="w-full h-48 sm:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Projects Completed', icon: '🎨' },
            { number: '50+', label: 'Expert Designers', icon: '👥' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '10+', label: 'Years Experience', icon: '📅' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-800' 
                  : 'bg-white/50 hover:bg-white'
              } transition-all duration-300 hover:shadow-lg group`}
            >
              <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {stat.number}
              </div>
              <div className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 