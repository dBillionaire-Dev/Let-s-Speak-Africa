
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "./ui/button";
// import Logo from "/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container-custom flex justify-between items-center py-1 lg:py-2">
//         <Link to="/" className="flex items-center">
//           <span className="text-2xl font-poppins font-bold">
//             <img src={Logo} alt="Logo" className="h-14 lg:h-18 mr-1 inline" />
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8">
//           <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
//           <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
//           <NavLink to="/programs" isActive={location.pathname === "/programs"}>Programs</NavLink>
//           <NavLink to="/impact" isActive={location.pathname === "/impact"}>Impact</NavLink>
//           <NavLink to="/get-involved" isActive={location.pathname === "/get-involved"}>Get Involved</NavLink>
//           <Button variant="secondary" asChild className="px-4 py-2 rounded-md">
//             <NavLink to="/blog" isActive={location.pathname === "/blog"}>Blog</NavLink>
//           </Button>
//         </div>

//         {/* Mobile Navigation Button */}
//         <button onClick={toggleMenu} className="md:hidden text-black">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
//           <div className="flex flex-col space-y-4">
//             <MobileNavLink to="/" onClick={toggleMenu} isActive={location.pathname === "/"}>Home</MobileNavLink>
//             <MobileNavLink to="/about" onClick={toggleMenu} isActive={location.pathname === "/about"}>About</MobileNavLink>
//             <MobileNavLink to="/programs" onClick={toggleMenu} isActive={location.pathname === "/programs"}>Programs</MobileNavLink>
//             <MobileNavLink to="/impact" onClick={toggleMenu} isActive={location.pathname === "/impact"}>Impact</MobileNavLink>
//             <MobileNavLink to="/get-involved" onClick={toggleMenu} isActive={location.pathname === "/get-involved"}>Get Involved</MobileNavLink>
//             <Button variant="secondary" className="text-left" asChild>
//               <MobileNavLink to="/blog" onClick={toggleMenu} isActive={location.pathname === "/blog"}>Blog</MobileNavLink>
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode, isActive: boolean }) => {
//   return (
//     <Link
//       to={to}
//       className={`font-medium text-gray-800 hover:text-lsa-green transition-colors py-2 relative group ${isActive ? 'text-lsa-green' : ''}`}
//     >
//       {children}
//       <div className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transform origin-left transition-transform duration-300 ease-out w-full ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
//     </Link>
//   );
// };

// const MobileNavLink = ({
//   to,
//   onClick,
//   children,
//   isActive
// }: {
//   to: string;
//   onClick: () => void;
//   children: React.ReactNode;
//   isActive: boolean;
// }) => {
//   return (
//     <Link
//       to={to}
//       onClick={onClick}
//       className={`font-medium text-gray-800 hover:text-lsa-green transition-colors py-2 border-b border-gray-100 w-full block relative group ${isActive ? 'text-lsa-green' : ''}`}
//     >
//       {children}
//       <div className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transform origin-left transition-transform duration-300 ease-out w-full ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
//     </Link>
//   );
// };

// export default Navbar;


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
              alt="Let's Speak Africa Logo"
              className="h-14 lg:h-18 mr-1 inline w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-lsa-gold ${isActive(link.path)
                  ? 'text-lsa-gold border-b-2 border-lsa-gold pb-1'
                  : 'text-gray-700'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className={`flex items-center gap-2 font-medium transition-colors hover:text-lsa-gold ${isActive('/admin')
                      ? 'text-lsa-gold border-b-2 border-lsa-gold pb-1'
                      : 'text-gray-700'
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
                >
                  Sign Out
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-lsa-gold transition-colors"
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
                  className={`font-medium transition-colors hover:text-lsa-gold ${isActive(link.path) ? 'text-lsa-gold' : 'text-gray-700'
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
                      className={`flex items-center gap-2 font-medium transition-colors hover:text-lsa-gold ${isActive('/admin') ? 'text-lsa-gold' : 'text-gray-700'
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