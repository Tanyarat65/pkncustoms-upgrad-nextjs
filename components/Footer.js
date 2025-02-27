// components/Footer.js
import Link from 'next/link';
import { Mail, Phone, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact-section" className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Name + Address */}
        <div>
          <h2 className="text-2xl font-bold cursor-pointer hover:text-gold transition">
          PKN Customs Services LTD
          </h2>
          <p className="text-sm text-gray-400 mt-2">
          45/2037 Moo 1, Nong Khang Phlu Subdistrict, Nong Khaem District, Bangkok 10160
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm text-gray-400 flex items-center space-x-3 mt-2">
            <Mail className="w-4 h-4" />
            <span>adm.cs@pkncustoms.com</span>
          </p>
          <p className="text-sm text-gray-400 flex items-center space-x-3 mt-2">
            <Phone className="w-4 h-4" />
            <span>02 074 1800, 1802</span>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://www.facebook.com/profile.php?id=100064936966712" className="hover:text-gold transition flex items-center space-x-3">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            {/*<a href="https://line.me/en/" className="hover:text-gold transition">
              LINE
            </a>*/}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
          © 2025 PKN Customs Services LTD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;