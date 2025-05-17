import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Optional: Use import if your project supports it
// import logo from '../assets/logo.png';

interface NavbarProps {
  scrolled: boolean;
}

function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-sm font-medium transition-colors duration-200 relative
    ${isActive ? 'text-primary-600' : 'text-secondary-800 hover:text-primary-600'}
    after:content-[''] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0
    after:bg-primary-600 after:transition-all after:duration-300
    ${isActive ? 'after:w-full' : 'hover:after:w-full'}`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary-600">
          {/* Logo image from /public/assets/logo.png */}
          <img
            src="https://github.com/Kagwi/Neonsol-Creatives/blob/main/public/Neonsol%20Logo%20Final.PNG?raw=true"
            alt="Neonsol Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">Neonsol Creatives</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          <button
            onClick={handleGetStarted}
            className="ml-4 px-5 py-2 bg-primary-600 text-white rounded-md font-medium text-sm shadow-sm hover:bg-primary-700 transition-colors duration-200"
          >
            Get Started
          </button>
        </nav>

        <button
          className="md:hidden text-secondary-800 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } pt-20 px-6`}
      >
        <nav className="flex flex-col space-y-6">
          <NavLink
            to="/"
            className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-600' : 'text-secondary-800'}`}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-600' : 'text-secondary-800'}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-600' : 'text-secondary-800'}`}
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-600' : 'text-secondary-800'}`}
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-primary-600' : 'text-secondary-800'}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <button
            onClick={() => {
              closeMenu();
              handleGetStarted();
            }}
            className="w-full py-3 bg-primary-600 text-white rounded-md font-medium text-sm shadow-sm hover:bg-primary-700 transition-colors duration-200 mt-6"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
