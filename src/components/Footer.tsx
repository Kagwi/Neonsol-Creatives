import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white bg-black bg-opacity-70"
      style={{
        backgroundImage: "url('https://videos.openai.com/vg-assets/assets%2Ftask_01jvww14qhenmaade517abme2g%2F1747946951_img_3.webp?st=2025-05-22T19%3A13%3A26Z&se=2025-05-28T20%3A13%3A26Z&sks=b&skt=2025-05-22T19%3A13%3A26Z&ske=2025-05-28T20%3A13%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=AgQwQ%2BMO3bP4KNmMOBDX%2FNJew5IIo%2BYcw3sdXUy4BwE%3D&az=oaivgprodscus')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              {/* Replace with your logo image */}
              <img 
                src="/path/to/neonsol-logo.png" 
                alt="Neonsol Creatives Logo"
                className="h-8 w-auto"  // Adjust height as needed
              />
              <span className="text-xl font-bold">Neonsol Creatives</span>
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

          {/* ... rest of the footer code remains unchanged ... */}
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
