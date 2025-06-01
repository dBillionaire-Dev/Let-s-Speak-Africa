
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Speak Africa</h3>
            <p className="text-gray-300 mb-4">
              Let's Speak Africa is a trademark of Ruth Reje Advocacy Foundation, a registered Non-Governmental Organization (NGO) in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-lsa-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-lsa-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-lsa-gold transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-lsa-gold transition-colors">Our Impact</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-lsa-gold transition-colors">Get Involved</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-lsa-gold transition-colors">Visit Our Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs#storytelling-clubs" className="text-gray-300 hover:text-lsa-gold transition-colors">Environmental Storytelling Clubs</Link></li>
              <li><Link to="/programs#seven-days" className="text-gray-300 hover:text-lsa-gold transition-colors">7 Days of Environmental Action</Link></li>
              <li><Link to="/programs#voices" className="text-gray-300 hover:text-lsa-gold transition-colors">Voices for Her</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href="mailto:letsspeakafrica@gmail.com" target="_blank" className="text-white hover:text-lsa-gold transition-colors">info@letsspeakafrica.org</a></li>
              <li>Phone: <a href="tel:+2348132609942" target="_blank" className="text-white hover:text-lsa-gold transition-colors">+234 813 260 9942</a></li>
              <li>Calabar, Nigeria</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/share/1A5ijF9eaN/?mibextid=wwXIfr" target="_blank" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Facebook size={20} />
                </div>
              </a>
              <a href="https://www.instagram.com/letsspeakafrica_/?igsh=NWZoaDc1eDd5bzd3&utm_source=qr#" target="_blank" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Instagram size={20} />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/letsspeak-africa/" target="_blank" className="text-white hover:text-lsa-gold transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ruth Reje Advocacy Foundation. All rights reserved. <a href="https://nexdbillionairedev.vercel.app/" target="_blank" className="text-[#666] underline hover:text-lsa-gold transition-colors">
            Nex.Dev
          </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
