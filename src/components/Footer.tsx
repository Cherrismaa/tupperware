import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Clock, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
          {/* Logo */} 
          <a href="/" className="flex items-center">
            <img
              src="/logos/tup-logo.png"
              alt="Tupperware Hyderabad"
              className="w-37 h-16 object-contain mr-3"
            />
            <span className="sr-only">Tupperware Hyderabad</span>
          </a>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Premium food storage solutions for modern homes. Quality products that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">

              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+91 891 935 7003</span>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>contacttupperwarehyd@gmail.com</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Hyderabad, Telangana, India</span>
              </li>

              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => { 
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-smooth hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Tupperware India (Hyderabad). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
