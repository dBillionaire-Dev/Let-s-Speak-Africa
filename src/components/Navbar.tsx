
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-poppins font-bold">
            <img src={Logo} alt="Logo" className="h-8 mr-1 inline" /><span className="text-lsa-gold">Africa</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/programs" isActive={location.pathname === "/programs"}>Programs</NavLink>
          <NavLink to="/impact" isActive={location.pathname === "/impact"}>Impact</NavLink>
          <NavLink to="/get-involved" isActive={location.pathname === "/get-involved"}>Get Involved</NavLink>
          <Button variant="secondary" asChild className="px-4 py-2 rounded-md">
            <NavLink to="/blog" isActive={location.pathname === "/blog"}>Blog</NavLink>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu} isActive={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu} isActive={location.pathname === "/about"}>About</MobileNavLink>
            <MobileNavLink to="/programs" onClick={toggleMenu} isActive={location.pathname === "/programs"}>Programs</MobileNavLink>
            <MobileNavLink to="/impact" onClick={toggleMenu} isActive={location.pathname === "/impact"}>Impact</MobileNavLink>
            <MobileNavLink to="/get-involved" onClick={toggleMenu} isActive={location.pathname === "/get-involved"}>Get Involved</MobileNavLink>
            <Button variant="secondary" className="text-left" asChild>
              <MobileNavLink to="/blog" onClick={toggleMenu} isActive={location.pathname === "/blog"}>Blog</MobileNavLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode, isActive: boolean }) => {
  return (
    <Link
      to={to}
      className={`font-medium text-gray-800 hover:text-lsa-green transition-colors py-2 relative group ${isActive ? 'text-lsa-green' : ''}`}
    >
      {children}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transform origin-left transition-transform duration-300 ease-out w-full ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
    </Link>
  );
};

const MobileNavLink = ({
  to,
  onClick,
  children,
  isActive
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-medium text-gray-800 hover:text-lsa-green transition-colors py-2 border-b border-gray-100 w-full block relative group ${isActive ? 'text-lsa-green' : ''}`}
    >
      {children}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-lsa-green transform origin-left transition-transform duration-300 ease-out w-full ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
    </Link>
  );
};

export default Navbar;
