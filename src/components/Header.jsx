import React, { useState, useContext, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import image1 from "../images/InteriorLogo.jpg";

// Memoize navigation links to prevent unnecessary re-renders
const navLinks = [
  { path: "/", label: 'Home' },
  { path: "/products", label: 'Products' },
  { path: "/about", label: 'About' },
  { path: "/contact", label: 'Contact' },
  {
    label: 'Services',
    children: [
      { path: "/services/interior-design", label: 'Interior Design' },
      { path: "/services/renovation", label: 'Renovation' },
      { path: "/services/consultation", label: 'Consultation' },
      { path: "/services/custom-furniture", label: 'Custom Furniture' }
    ]
  },
  // { path: '/portfolio', label: 'Portfolio' }
];

// Memoize navigation items to prevent re-renders
const NavItem = memo(({ link, isActive, theme, onClick }) => {
  if (link.children) {
    return (
      <div className="relative group">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
          } flex items-center space-x-1`}
        >
          <span>{link.label}</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-50`}>
          <div className="py-1">
            {link.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                onClick={onClick}
                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={link.path}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? `${theme === 'dark' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'}`
          : `${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`
      }`}
    >
      {link.label}
    </Link>
  );
});

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Optimize scroll handler with debounce
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (showSearch) setShowSearch(false);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (showSearch) setShowSearch(false);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[999999]">
      <header 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? `${theme === 'dark' ? 'bg-gray-900/95 shadow-gray-900/20' : 'bg-white/95 shadow-gray-200/20'} shadow-lg backdrop-blur-sm` 
            : `${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                  <img 
                    src={image1}
                    alt="Modern Grace Logo"
                    className="w-[54px] mr-8 mb-2 rounded-full transition-all duration-300 hover:scale-110 object-cover"
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Modern Grace
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Interior Design
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavItem
                  key={link.path || link.label}
                  link={link}
                  isActive={location.pathname === link.path}
                  theme={theme}
                />
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-7 h-7 flex flex-col justify-center items-center">
                  <span className={`block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
                  <span className={`block absolute h-0.5 w-7 bg-current transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out
                    ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />

            {/* Menu Content */}
            <div className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl">
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.path || link.label} className="py-2">
                      {link.children ? (
                        <div className="space-y-2">
                          <div className="font-medium text-lg text-gray-900 dark:text-gray-100">
                            {link.label}
                          </div>
                          <div className="pl-4 space-y-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={toggleMobileMenu}
                                className={`block py-2 text-base ${
                                  location.pathname === child.path
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={toggleMobileMenu}
                          className={`block py-2 text-base font-medium ${
                            location.pathname === link.path
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Theme Toggle in Mobile Menu */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center space-x-2 p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {theme === 'dark' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {showSearch && (
          <div className={`fixed inset-x-0 top-16 sm:top-20 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg transition-all duration-300`}>
            <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`flex-1 px-4 py-2 rounded-full border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="submit"
                  className={`p-2 rounded-full ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </header>
    </div>
  );
};

export default memo(Header);
