import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 px-4 sm:px-8 ${
      theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'
    } relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-64 h-64 rounded-full ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-200'
        } opacity-5 -translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-200'
        } opacity-5 translate-x-1/2 translate-y-1/2`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Company Information */}
          <div className="space-y-4">
            <h1 className={`font-bold text-3xl lg:text-4xl mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            } font-serif tracking-wide`}>
              MODERN GRACE
            </h1>
            <p className={`text-lg mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            } font-light`}>
              Interior Designs for your Home
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } leading-relaxed`}>
              Transforming spaces to elevate lives. Let us help you design the art of living well.
            </p>
            <div onClick={scrollToTop} className={`mt-6 inline-flex items-center space-x-2 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <span className="text-sm font-semibold hover:cursor-pointer">Get Started</span>
              <svg className="cursor-pointer w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className={`font-bold text-2xl mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Quick Links</h2>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              {[
                { name: 'Home', path: "/" },
                { name: 'About', path: "/about" },
                { name: 'Products', path: "/products" },
                { name: 'Services', path: "/services" },
                { name: 'Contact', path: "/contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`group flex items-center space-x-2 text-lg transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h2 className={`font-bold text-2xl mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Connect With Us</h2>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              {[
                { name: 'Twitter', icon: 'twitter', color: 'blue-400', url: "https://twitter.com" },
                { name: 'Facebook', icon: 'facebook', color: 'blue-600', url: "https://facebook.com" },
                { name: 'Instagram', icon: 'instagram', color: 'pink-600', url: "https://instagram.com" },
                { name: 'YouTube', icon: 'youtube', color: 'red-600', url: "https://youtube.com" },
                { name: 'Pinterest', icon: 'pinterest', color: 'red-500', url: "https://pinterest.com" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-3 transition-transform duration-300 hover:-translate-y-1 ${
                    theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <i className={`fa fa-${social.icon} text-xl text-${social.color}`} />
                  <span className="text-lg">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className={`font-bold text-2xl mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Get in Touch</h2>
            <div className="space-y-4">
              <div className={`flex items-center justify-center md:justify-start space-x-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } group`}>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <i className="fa fa-phone text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Call Us</span>
                  <span className="text-lg">+91 78140-73920</span>
                </div>
              </div>

              <div className={`flex items-center justify-center md:justify-start space-x-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } group`}>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <i className="fa fa-envelope text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Email Us</span>
                  <span className="text-lg">piyushmittal033@gmail.com</span>
                </div>
              </div>

              <div className={`flex items-center justify-center md:justify-start space-x-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } group`}>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <i className="fa fa-map-marker text-purple-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Visit Us</span>
                  <span className="text-lg">Uppal Southend, Sector-48, Gurugram</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={`mt-16 p-8 rounded-xl ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } shadow-lg max-w-3xl mx-auto text-center`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Subscribe to Our Newsletter
          </h3>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Stay updated with our latest designs and interior inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className={`px-6 py-3 rounded-full w-full sm:w-96 focus:outline-none ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white placeholder-gray-500' 
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              }`}
            />
            <button className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}>
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className={`flex flex-col md:flex-row justify-between items-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="mb-4 md:mb-0">
              © {currentYear} Modern Grace. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
