import React, { useState, useRef, useContext } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import ContentLoader from 'react-content-loader';
import ThemeContext from './ThemeContext';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.68521486048!2d77.0418322!3d28.4068413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2299943b9043%3A0x2f521df48a7e3413!2sVipul%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1718457412345!5m2!1sen!2sin'
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_zgt5mwd', 'template_ca3eueg', form.current, {
        publicKey: 'I5OM_QDIwWNhSv7Lg',
      })
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error('There was an issue. Please try again later.');
          console.log('Error:', error.text);
        }
      );
  };

  return (
    <div className="relative w-full mt-12">
      {/* Hero Section */}
      <div className={`text-center py-12 px-4 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}>
          Get in Touch
        </h1>
        <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
        }`}>
          Have questions about our services? We're here to help. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`p-6 rounded-lg shadow-md ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <i className={`fa fa-map-marker text-xl mt-1 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}></i>
                <div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>Our Location</h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-neutral-600'
                  }`}>Uppal Southend, sector 48, Gurgaon</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className={`fa fa-phone text-xl mt-1 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}></i>
                <div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>Phone Number</h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-neutral-600'
                  }`}>+91 78140 743920</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className={`fa fa-envelope text-xl mt-1 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}></i>
                <div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>Email Address</h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-neutral-600'
                  }`}>contact@moderngrace.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.657504773013!2d77.0419974911476!3d28.410492000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228fc87342e5%3A0x76851d3a19b53b9a!2sUppal%20Southend%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1716733436386!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Uppal Southend Location"
              className='w-full h-64 rounded-md shadow-md'
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-6 rounded-lg shadow-md ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Send Us a Message
            </h2>
            {loading ? (
              <div className="space-y-4">
                <ContentLoader
                  speed={2}
                  width="100%"
                  height={400}
                  viewBox="0 0 100% 400"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="10" rx="4" ry="4" width="100%" height="40" />
                  <rect x="0" y="70" rx="4" ry="4" width="100%" height="40" />
                  <rect x="0" y="130" rx="4" ry="4" width="100%" height="80" />
                  <rect x="0" y="230" rx="4" ry="4" width="100%" height="40" />
                </ContentLoader>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    className={`w-full p-3 border-2 rounded-md focus:outline-none transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-primary-400'
                        : 'bg-white border-gray-300 text-neutral-900 placeholder-neutral-500 focus:border-primary-600'
                    }`}
                    placeholder="Enter Your Name"
                    type="text"
                    name="from_name"
                    id="name"
                    required
                  />
                </div>
                <div>
                  <input
                    className={`w-full p-3 border-2 rounded-md focus:outline-none transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-primary-400'
                        : 'bg-white border-gray-300 text-neutral-900 placeholder-neutral-500 focus:border-primary-600'
                    }`}
                    placeholder="Enter Your Email"
                    type="email"
                    name="from_email"
                    id="email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className={`w-full p-3 border-2 rounded-md focus:outline-none transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-primary-400'
                        : 'bg-white border-gray-300 text-neutral-900 placeholder-neutral-500 focus:border-primary-600'
                    }`}
                    placeholder="Type Your Message"
                    name="message"
                    id="message"
                    rows="4"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 text-lg rounded-md transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'bg-primary-400 text-black hover:bg-primary-500'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className={`mt-12 p-8 rounded-lg shadow-md text-center ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: 'fa fa-twitter', url: "https://twitter.com" },
              { icon: 'fa fa-facebook', url: "https://facebook.com" },
              { icon: 'fa fa-youtube', url: "https://youtube.com" },
              { icon: 'fa fa-instagram', url: "https://instagram.com" },
              { icon: 'fa fa-pinterest', url: "https://pinterest.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`text-3xl transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-primary-600 hover:text-primary-700'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
