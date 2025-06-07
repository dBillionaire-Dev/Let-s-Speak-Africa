
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/impact', label: 'Impact' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-1 lg:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Let's Speak Africa"
              className="h-14 lg:h-18 mr-1 inline w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative group ${isActive(link.path)
                  ? 'text-lsa-green'
                  : 'text-gray-700 hover:text-lsa-green'
                  }`}
              >
                {link.label}
                {/* Active underline */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lsa-green"></span>
                )}
                {/* Hover underline animation */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transition-all duration-300 ${isActive(link.path) ? 'w-0' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className={`flex items-center gap-2 font-medium transition-all duration-300 relative group ${isActive('/admin')
                      ? 'text-lsa-green'
                      : 'text-gray-700 hover:text-lsa-green'
                      }`}
                  >
                    <Settings size={16} />
                    Admin
                    {/* Active underline */}
                    {isActive('/admin') && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lsa-green"></span>
                    )}
                    {/* Hover underline animation */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transition-all duration-300 ${isActive('/admin') ? 'w-0' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                )}
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                >
                  Sign Out
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-lsa-green transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors ${isActive(link.path) ? 'text-lsa-green' : 'text-gray-700 hover:text-lsa-green'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Section */}
              {user ? (
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 font-medium transition-colors ${isActive('/admin') ? 'text-lsa-green' : 'text-gray-700 hover:text-lsa-green'
                        }`}
                    >
                      <Settings size={16} />
                      Admin
                    </Link>
                  )}
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    size="sm"
                    className="w-fit"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;