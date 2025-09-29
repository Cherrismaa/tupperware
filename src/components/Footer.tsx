import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            {/* Logo */} 
            <img
            src="../../public/logos/footer-logo.png" alt="Tupperware Hyderabad"
            className="w-30 h-20 object-contain mr-3"/>

            <p className="text-background/80 leading-relaxed">
              Premium kitchen solutions designed for life and kept for generations. 
              Experience the difference with Tupperware's innovative, durable, and eco-friendly products.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">tw</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hyderabad, Telangana</p>
                  <p className="text-background/70 text-sm">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">+91 891 935 7003</p>
                  <p className="text-background/70 text-sm">Mon-Sun, 10AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">contacttupperwarehyd@gmail.com</p>
                  <p className="text-background/70 text-sm">We'll respond within 24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#products" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                Products
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#about" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                About Us
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#shop" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                Shop
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#contact" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                Visit Us
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#warranty" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                Warranty
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#care" className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group">
                Care Guide
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © {currentYear} Tupperware Hyderabad. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/70 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#returns" className="text-background/70 hover:text-primary transition-colors duration-300">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;