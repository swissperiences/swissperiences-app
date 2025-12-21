import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHome
      ? 'bg-white shadow-sm'
      : 'bg-transparent'
  }`;

  const textClasses = `transition-colors duration-300 ${
    isScrolled || !isHome ? 'text-slate-800' : 'text-white'
  }`;

  const linkClasses = `transition-colors duration-300 hover:opacity-70 ${textClasses}`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`text-2xl font-light tracking-wide ${textClasses}`}>
            Swissperiences
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/experiences" className={linkClasses}>
              Experiences
            </Link>
            <Link to="/corporate" className={linkClasses}>
              Corporate
            </Link>
            <Link to="/about" className={linkClasses}>
              About
            </Link>
            <button
              className={`px-6 py-2 rounded-sm border transition-all duration-300 font-light ${
                isScrolled || !isHome
                  ? 'border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-slate-800'
              }`}
            >
              Partner Access
            </button>
          </div>

          <button
            className={`md:hidden ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/experiences"
              className="block text-slate-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link
              to="/corporate"
              className="block text-slate-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Corporate
            </Link>
            <Link
              to="/about"
              className="block text-slate-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <button className="w-full px-6 py-2 border border-slate-800 text-slate-800 rounded-sm font-light">
              Partner Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
