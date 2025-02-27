import { useState } from "react";
import { useRouter } from "next/router";
import  Link from "next/link";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
          <div onClick={() => router.push('/')} className="flex items-center cursor-pointer">
            <img src="/images/lgnonbg.jpg" alt="PKN Logo" className="w-14 h-auto" />
            <span className="text-xl font-bold text-blue-600 ml-2">PKN Customs Services LTD</span>
          </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          <div onClick={() => router.push('/#home-section')} className="hover:text-blue-500">Home</div>
          <div onClick={() => router.push('/#services-section')} className="hover:text-blue-500">Services</div>
          <div onClick={() => router.push('/#about-section')} className="hover:text-blue-500">About Us</div>
          <div onClick={() => router.push('/#why-us-section')} className="hover:text-blue-500">Why Us</div>
          <div onClick={() => router.push('/#article-section')} className="hover:text-blue-500">Article</div>
          <div onClick={() => router.push('/#contact-section')} className="hover:text-blue-500">Contact</div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/#home-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/#services-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/#about-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/#why-us-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Why Us</Link>
            <Link href="/#article-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Articles</Link>
            <Link href="/#contact-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
