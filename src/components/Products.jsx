import React, { useState, useEffect, useContext } from 'react';
import image1 from "../images/modern-living-room-interior-design.jpg";
import image2 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.jpg";
import image3 from "../images/velvet-interior-classic-cushion-relax.jpg";
import image6 from "../Productimages/top-view-boards-mdf-material.jpg";
import image7 from "../Productimages/digital-art-interior-lamp-design.jpg";
import image8 from "../Productimages/handcrafted-wooden-decorative-lamp.jpg";
import image9 from "../Productimages/handcrafted-wooden-decorative-vase.jpg";
import image10 from "../Productimages/mirror-vases-background-zoom-calls.jpg";
import image12 from "../Productimages/man-accessories-makeup.jpg";
import image15 from "../images/interior-design-with-photoframes-plants.jpg";
import image16 from "../images/still-life-shoe-rack-indoors.jpg";
import image17 from "../images/room-interior-design.jpg";
import image18 from "../images/realistic-interior-design-with-furniture.jpg";
import ThemeContext from './ThemeContext';

const Shimmer = ({ width = '100%', height = '100px' }) => (
  <div
    style={{ width, height }}
    className="bg-gray-300 animate-pulse rounded-md"
  ></div>
);

const ShimmerText = ({ width = '100%' }) => (
  <div className={`h-6 ${width} bg-gray-300 animate-pulse rounded`}></div>
);

const ShimmerImage = ({ width = '100%', height = '200px' }) => (
  <div
    className={`bg-gray-300 animate-pulse rounded-lg`}
    style={{ width, height }}
  ></div>
);

const ProductCard = ({ product, loading }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <ShimmerImage width="100%" height="250px" />
        <ShimmerText width="60%" />
        <ShimmerText width="40%" />
      </div>
    );
  }

  return (
    <div 
      className={`group relative flex flex-col items-center transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full overflow-hidden">
        <img
          className="w-full h-[250px] md:h-[330px] object-cover transition-transform duration-500 group-hover:scale-110"
          src={product.image}
          alt={product.alt}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-full font-medium transform transition-all duration-300 hover:bg-blue-600 hover:text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 w-full text-center">
        <h1 className={`tracking-wider text-lg font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
        }`}>{product.name}</h1>
        <h1 className={`font-bold text-xl mt-2 ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        }`}>${product.price}</h1>
        <p className={`text-sm mt-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>{product.description}</p>
      </div>
    </div>
  );
};

const ProductSection = ({ title, products, loading }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="animate-fadeIn">
      <div className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest my-4 px-4 ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
      }`}>
        {loading ? <ShimmerText width="50%" /> : title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
        {loading ? (
          Array(4)
            .fill()
            .map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
        ) : (
          products.map((product, index) => (
            <ProductCard key={index} product={product} loading={false} />
          ))
        )}
      </div>
    </div>
  );
};

const Products = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Banner Section */}
      <div className="relative">
        <div className="relative">
          <img 
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover" 
            src={image1} 
            alt="banner" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center px-4 md:px-0 w-full animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-widest drop-shadow-lg">
            YOU CAN BOOK AND BUY WHATEVER YOU WANT
          </h1>
          <p className="my-4 md:my-6 text-base sm:text-lg md:text-2xl text-white tracking-wider drop-shadow-lg">
            Every Shape, Size, Colour, and Style
          </p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}>Featured Products</h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Discover our handpicked selection of premium furniture and decor items that combine style, comfort, and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {[image15, image17, image18].map((image, index) => (
            <div key={index} className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className="relative overflow-hidden">
                <img 
                  src={image} 
                  alt="Featured Product" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {['Premium Collection', 'Modern Essentials', 'Luxury Living'][index]}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {[
                    'Exclusive designs crafted with premium materials',
                    'Contemporary pieces for the modern home',
                    'Elevate your space with luxury furniture'
                  ][index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR PRODUCTS Title */}
      <div className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-4 mt-10 px-4 ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
      } animate-fadeIn`}>
        OUR PRODUCTS
      </div>
      <hr className={`border mx-auto w-3/4 mb-8 ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
      }`} />

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductSection
          title="FOR YOUR KITCHEN"
          products={[
            { 
              image: image6, 
              name: "WALL DESIGNS", 
              price: 600, 
              alt: "Wall Designs",
              description: "Modern wall designs for your kitchen"
            },
            { 
              image: image7, 
              name: "CAMEO LAMP", 
              price: 900, 
              alt: "Cameo Lamp",
              description: "Elegant lighting solution"
            },
            { 
              image: image8, 
              name: "VERSAL CHE LAMP", 
              price: 750, 
              alt: "Versal Che Lamp",
              description: "Contemporary design lamp"
            },
            { 
              image: image9, 
              name: "WOODEN THINGS", 
              price: 1300, 
              alt: "Wooden Things",
              description: "Handcrafted wooden decor"
            },
          ]}
          loading={loading}
        />

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 animate-fadeIn">
          {[
            { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over $500' },
            { icon: '🛡️', title: 'Warranty', desc: '2-year warranty on all products' },
            { icon: '💎', title: 'Premium Quality', desc: 'Handcrafted with care' }
          ].map((benefit, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>{benefit.title}</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className={`py-10 px-4 sm:px-6 md:px-20 mt-10 rounded-xl shadow-lg ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } animate-fadeIn`}>
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}>
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                text: "The quality of their products is exceptional. I'm extremely satisfied with my purchase.",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Michael Chen",
                role: "Interior Designer",
                text: "As a professional designer, I can confidently say that their products meet the highest standards.",
                rating: "⭐⭐⭐⭐⭐"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="text-yellow-400 mb-2">{testimonial.rating}</div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>{testimonial.name}</p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProductSection
          title="FOR YOUR BEDROOM"
          products={[
            { 
              image: image10, 
              name: "BETHANIE FLOOR MIRROR", 
              price: 1299, 
              alt: "Bethanie Floor Mirror",
              description: "Full-length mirror with elegant frame"
            },
            { 
              image: image12, 
              name: "COFFEE TABLE", 
              price: 850, 
              alt: "Coffee Table",
              description: "Modern coffee table design"
            },
            { 
              image: image2, 
              name: "LIGHTNING DESIGN", 
              price: 1199, 
              alt: "Lightning Design",
              description: "Contemporary lighting solutions"
            },
            { 
              image: image3, 
              name: "OMAHA SVIWEL CHAIR", 
              price: 1099, 
              alt: "Omaha Swivel Chair",
              description: "Comfortable swivel chair"
            },
          ]}
          loading={loading}
        />

        {/* Newsletter Section */}
        <div className={`rounded-lg p-8 my-12 text-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}>Stay Updated</h2>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>Subscribe to our newsletter for exclusive offers and updates</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={`flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500' 
                  : 'border-gray-300 focus:ring-gray-400'
              }`}
            />
            <button className={`px-6 py-2 rounded transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Quality Promise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {[
            {
              title: 'Our Quality Promise',
              content: 'We are committed to using only premium materials and expert craftsmanship to bring you durable and beautiful furniture. Every piece is carefully inspected to meet our high standards before it reaches your home.'
            },
            {
              title: 'Sustainable and Eco-Friendly',
              content: 'Our products are crafted with sustainability in mind. We source eco-friendly materials and follow ethical manufacturing processes to reduce our environmental footprint and help create a greener planet.'
            }
          ].map((section, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-2xl font-bold text-center mb-4 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {section.title}
              </h2>
              <p className={`text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <ProductSection
          title="FOR YOUR LIVING ROOM"
          products={[
            { 
              image: image15, 
              name: "SANDY WOOD COUCH", 
              price: 2499, 
              alt: "Sandy Wood Couch",
              description: "Luxurious wooden couch"
            },
            { 
              image: image16, 
              name: "SHOE RACK", 
              price: 1500, 
              alt: "Shoe Rack",
              description: "Modern shoe storage solution"
            },
            { 
              image: image17, 
              name: "MODERN ARTWORK", 
              price: 1299, 
              alt: "Modern Artwork",
              description: "Contemporary wall art"
            },
            { 
              image: image18, 
              name: "LUXURY SOFA", 
              price: 2999, 
              alt: "Luxury Sofa",
              description: "Premium comfort sofa"
            },
          ]}
          loading={loading}
        />

        {/* Closing Section */}
        <div className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest my-10 px-4 ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
        }`}>
          FIND YOUR PERFECT STYLE WITH US
        </div>
      </div>
    </div>
  );
};

export default Products;
