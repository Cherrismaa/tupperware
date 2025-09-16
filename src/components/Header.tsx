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
          {/* Logo */} {/*
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-foreground">Tupperware</h1>
                <p className="text-xs text-muted-foreground">Hyderabad</p>
              </div>
            </div>
          </div> */}

          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <a
              href="#shop"
              className="btn-accent"
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
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
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
              className="block btn-accent inline-block mt-4"
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