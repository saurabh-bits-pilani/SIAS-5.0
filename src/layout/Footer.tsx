import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Cosmic Guide', href: '/cosmic-guide' },
    { name: 'Cosmic Podcast', href: '/cosmic-podcast' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Panchang', href: '/panchang' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/privacy' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Icons/facebook.png', 
      href: 'https://facebook.com' 
    },
    { 
      name: 'WhatsApp', 
      icon: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Icons/whatsapp_2504957.png', 
      href: 'https://wa.me/919079053840' 
    },
    { 
      name: 'Quora', 
      icon: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Icons/quora.png', 
      href: 'https://quora.com' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Logo/Soul%20-Infinity-logo%201.png" 
                alt="Soul Infinity Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">Soul Infinity</h3>
                <p className="text-sm text-gray-400">Vedic Astrology & Spiritual Guidance</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              वक्रतुण्ड  महाकाय सूर्यकोटि समप्रभ।<br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Social Media</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors p-2"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    The D3 Medows<br />
                    Adani Shantigram<br />
                    Ahmedabad, Gujarat 382421<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <p className="text-gray-400">+91 9079053840</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <p className="text-gray-400">soul.infinity.astro@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919079053840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/fLm4zk1RUJ4uki3f6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Hours */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-primary-500 mr-3" />
              <h4 className="font-heading font-semibold text-lg">Consultation Hours</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Mon–Fri:</span>
                <span className="text-white ml-2">12:00 PM – 9:00 PM</span>
              </div>
              <div>
                <span className="text-gray-400">Saturday:</span>
                <span className="text-white ml-2">10:00 AM – 3:00 PM</span>
              </div>
              <div>
                <span className="text-gray-400">Sunday:</span>
                <span className="text-white ml-2">By Appointment Only</span>
              </div>
            </div>
            <p className="text-primary-300 text-sm mt-4">
              <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>

        {/* Sanskrit Shloka */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-primary-300 text-lg font-semibold mb-2">
            ॐ पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते।<br />
            पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥
          </p>
          <p className="text-gray-400 text-sm">
            That is complete, this is complete, from completeness comes completeness.<br />
            When completeness is taken from completeness, completeness remains.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Soul Infinity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;