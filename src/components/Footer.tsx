import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Zap size={24} className="text-primary-600 transform -rotate-12" />
              <span className="text-xl font-bold">Neonsol</span>
            </Link>
            <p className="text-secondary-300 mb-6">
              Pioneering innovative technology solutions to empower businesses in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-600 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-300 hover:text-primary-600 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="services/web-development" className="text-secondary-300 hover:text-primary-600 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="text-secondary-300 hover:text-primary-600 transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link to="/services/ai-development" className="text-secondary-300 hover:text-primary-600 transition-colors">AI Development</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-secondary-300 hover:text-primary-600 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="text-secondary-300 hover:text-primary-600 transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/data-analysis" className="text-secondary-300 hover:text-primary-600 transition-colors">Data Analysis</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">100 Technology Parkway, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-600 flex-shrink-0" />
                <span className="text-secondary-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-600 flex-shrink-0" />
                <span className="text-secondary-300">info@neonsolcreatives.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Neonsol Creatives. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-secondary-400 hover:text-primary-600 text-sm transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-secondary-400 hover:text-primary-600 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
