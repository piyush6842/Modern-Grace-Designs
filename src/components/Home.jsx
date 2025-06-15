import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import { 
  ShimmerHero, 
  ShimmerServices, 
  ShimmerTestimonials, 
  ShimmerPortfolio, 
  ShimmerCTA 
} from './Shimmer';

// Import images
import image1 from "../images/homeimg.jpg";
import image2 from "../images/room-house-decorated-with-brazilian-folklore-design.jpg";
import image3 from "../images/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg";
import image4 from "../images/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg";
import image5 from "../images/interior-design-with-photoframes-plants.jpg";
import image6 from "../images/still-life-shoe-rack-indoors.jpg";
import image7 from "../images/room-interior-design.jpg";
import image8 from "../images/realistic-interior-design-with-furniture.jpg";
import image9 from "../images/beautiful-girl-standing-room-looking-mirror.jpg";
import image10 from "../images/coffee-cup-table.jpg";
import image11 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.jpg";
import image12 from "../images/velvet-interior-classic-cushion-relax.jpg";
import video1 from "../images/homevideo.mp4";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <ShimmerHero />
        <ShimmerServices />
        <ShimmerTestimonials />
        <ShimmerPortfolio />
        <ShimmerCTA />
      </div>
    );
  }

  return (
    <div className={`min-h-screen mt-14 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Hero Section */}
      <div className='relative'>
        <img 
          className='w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover' 
          src={image1} 
          alt="Interior design" 
        />
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 lg:px-8'>
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
            MODERN GRACE DESIGN WELCOMES YOU
          </h1>
          <p className={`text-lg md:text-xl mb-4 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-100'
          }`}>
            Every Shape, Size, Colour, and Style
          </p>
          <p className={`text-base md:text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
          }`}>
            Whatever it is that you're looking for, we've got what you need.
          </p>
          <Link 
            to="/products"
            className={`inline-block border-2 rounded-md px-8 py-3 text-lg font-medium transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            WELCOME TO THE MODERN GRACE DESIGNS
          </h1>
          <p className={`text-base md:text-lg lg:text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            Your one-stop shop for stylish furniture and decor, delivering the latest trends exclusively to Perth.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className="max-w-7xl mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className='relative group overflow-hidden rounded-lg'>
                <img 
                  className='w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110' 
                  src={[image2, image3, image4][index]} 
                  alt={['Living Room', 'Dining Room', 'Bedroom'][index]} 
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50'></div>
                <div className='absolute bottom-8 left-8'>
                  <h1 className={`text-2xl md:text-3xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                  }`}>
                    {['LIVING', 'DINING', 'BEDROOM'][index]}
                  </h1>
                  <Link 
                    to='/products' 
                    className={`inline-block px-6 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-primary-400 text-white hover:bg-primary-500'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>
                IMAGINE THE POTENTIAL OF YOUR INTERIOR
              </h1>
              <p className={`text-base md:text-lg lg:text-xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
              }`}>
                The Modern Grace Design mission is to help turn your dream interior into a reality. Our team of talented stylists share a passion to create beautiful spaces for you to call home. Because life is too short not to love where you live.
              </p>
              <Link 
                to='/contact' 
                className={`inline-block px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-400 text-white hover:bg-primary-500'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                CONTACT US
              </Link>
            </div>
            <div className='rounded-lg overflow-hidden shadow-xl'>
              <video 
                src={video1} 
                type='mp4' 
                autoPlay 
                muted 
                loop 
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className='text-center mb-12'>
            <h2 className={`text-lg md:text-xl mb-2 tracking-wider ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}>
              BROWSE OUR FEATURED PRODUCTS
            </h2>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              TRENDING PRODUCTS
            </h1>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { img: image5, title: 'WILLOW SINGLE SEATER SOFA', price: 600 },
              { img: image6, title: 'SIDE TABLE', price: 900 },
              { img: image7, title: 'DINING TABLE', price: 750 },
              { img: image8, title: 'CHARLOTTE SOFA', price: 1300 },
              { img: image9, title: 'BETHANIE FLOOR MIRROR', price: 1299 },
              { img: image10, title: 'COFFEE TABLE', price: 850 },
              { img: image11, title: 'LIGHTNING DESIGN', price: 1199 },
              { img: image12, title: 'OMAHA SWIVEL CHAIR', price: 1099 }
            ].map((product, index) => (
              <div 
                key={index} 
                className={`group rounded-lg overflow-hidden transition-all duration-300 ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className='relative overflow-hidden'>
                  <img 
                    className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
                    src={product.img} 
                    alt={product.title} 
                  />
                </div>
                <div className='p-4'>
                  <h3 className={`text-sm md:text-base font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {product.title}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  }`}>
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className='text-center mb-12'>
            <h2 className={`text-lg md:text-xl mb-2 tracking-wider ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}>
              OUR EXPERTISE
            </h2>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              COMPREHENSIVE DESIGN SERVICES
            </h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: '🎨',
                title: 'Interior Design',
                description: 'Transform your space with our expert interior design services, tailored to your unique style and needs.'
              },
              {
                icon: '🛋️',
                title: 'Custom Furniture',
                description: 'Bespoke furniture pieces crafted to perfectly fit your space and reflect your personal style.'
              },
              {
                icon: '🏗️',
                title: 'Renovation',
                description: 'Complete renovation services to breathe new life into your existing spaces.'
              },
              {
                icon: '💡',
                title: 'Lighting Design',
                description: 'Strategic lighting solutions to enhance ambiance and functionality in your space.'
              },
              {
                icon: '🎯',
                title: 'Space Planning',
                description: 'Optimize your layout with our professional space planning and organization services.'
              },
              {
                icon: '🎨',
                title: 'Color Consultation',
                description: 'Expert color schemes and palettes to create the perfect mood in your space.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className='text-center mb-12'>
            <h2 className={`text-lg md:text-xl mb-2 tracking-wider ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}>
              WHAT OUR CLIENTS SAY
            </h2>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              CLIENT TESTIMONIALS
            </h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                quote: "Modern Grace transformed our living space into something beyond our expectations. Their attention to detail and creative solutions were outstanding.",
                author: "Sarah Johnson",
                role: "Homeowner"
              },
              {
                quote: "The custom furniture pieces they created for our home are not just beautiful but also incredibly functional. Truly exceptional craftsmanship.",
                author: "Michael Chen",
                role: "Interior Designer"
              },
              {
                quote: "Working with Modern Grace was a pleasure from start to finish. Their team's expertise and professionalism made the entire process seamless.",
                author: "Emma Thompson",
                role: "Property Developer"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`p-8 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="text-4xl mb-4">"</div>
                <p className={`text-lg mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {testimonial.quote}
                </p>
                <div>
                  <h4 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {testimonial.author}
                  </h4>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-neutral-500'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Stay Updated with Modern Grace
            </h2>
            <p className={`mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
            }`}>
              Subscribe to our newsletter for the latest design trends, exclusive offers, and interior inspiration.
            </p>
            <form className='flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'>
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white placeholder-gray-400' 
                    : 'bg-gray-50 text-neutral-900 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-400 text-white hover:bg-primary-500'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Ready to Transform Your Space?
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            Let's discuss your project and create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to='/contact'
            className={`inline-block px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-primary-400 text-white hover:bg-primary-500'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
