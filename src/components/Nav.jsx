import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links data
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/impacts", label: "Impacts" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8"
              src="https://cdn-icons-png.flaticon.com/128/16821/16821939.png"
              alt="Linda Wanyama Logo"
            />
            <span className="text-xl sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              LINDA WANYAMA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <a href="/donations">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                Donate Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={closeMenu}
                  className="flex items-center px-6 py-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Donate Button */}
          <div className="p-6 border-t border-gray-100">
            <a href="/donation" onClick={closeMenu}>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                Donate Now
              </button>
            </a>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Protecting wildlife for future generations
              </p>
              <div className="flex items-center justify-center space-x-1">
                <Globe className="h-4 w-4 text-emerald-600" />
                <span className="text-xs text-gray-500">
                  Global Conservation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Donation Banner (visible when menu is closed) */}
      <div className="md:hidden">
        <div
          className={`bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-center py-2 transition-all duration-300 ${
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <a href="/donation" className="text-sm font-medium hover:underline">
            💚 Support Our Mission - Donate Today
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }

        /* Custom scrollbar for mobile menu */
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }

        .mobile-menu::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .mobile-menu::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }

        .mobile-menu::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
