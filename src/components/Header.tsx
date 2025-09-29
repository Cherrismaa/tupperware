import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */} 
          <img
            src="../../public/logos/header-logo.png" alt="Tupperware Hyderabad"
            className="w-35 h-24 object-contain mr-3"/>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 font-bold text-base md:text-lg"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors duration-300 font-bold text-base md:text-lg"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-bold text-base md:text-lg"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-bold text-base md:text-lg"
            >
              Contact
            </a>
            <a
              href="#shop"
              className="px-4 py-2 rounded-lg font-bold text-base md:text-lg text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
            >
              Shop
            </a>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-68 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#shop"
              className="block px-4 py-2 rounded-lg font-bold text-base text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;