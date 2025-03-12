import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import  Link from "next/link";

//ฟังชั่นแปลจาก react-i18next (ผ่าน next-i18next)
import { useTranslation } from 'react-i18next';
// ใช้ Lucide Icons
import { Languages } from "lucide-react";

import i18n from "../lib/i18n";
import next from "next";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  
  const { t } = useTranslation('common'); // ✅ ใช้ namespace 'common'
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false); // ✅ สร้าง state สำหรับตรวจสอบว่า component ถูก mount หรือยัง
  
  useEffect(() => {
    setIsMounted(true); // ✅ กำหนดค่าเป็น true เมื่อ component ถูก mount
  }, []); // ✅ ใช้ useEffect กำหนดค่าเมื่อ component ถูก mount

  // ✅ ฟังก์ชันสำหรับเปลี่ยนภาษา
  const toggleLanguage = () => {
    const nextLocale = i18n.language === 'en' ? 'th' : 'en';
    i18n.changeLanguage(nextLocale); // ✅ เปลี่ยนภาษาใน i18next

    // ✅ ใช้ Next.js Router เพื่ออัปเดต URL และ locale
    router.push(router.pathname, router.pathname, { locale: nextLocale });
  }

  if (!isMounted) return null; // ✅ แก้ไข Hydration Error

  console.log("📌 Current language:", i18n.language); // ✅ ตรวจสอบว่าภาษาเปลี่ยนหรือไม่

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
          <div onClick={() => router.push('/#home-section')} className="hover:text-blue-500">{t("home")}</div>
          <div onClick={() => router.push('/#services-section')} className="hover:text-blue-500">{t('services')}</div>
          <div onClick={() => router.push('/#about-section')} className="hover:text-blue-500">{t('about')}</div>
          <div onClick={() => router.push('/#why-us-section')} className="hover:text-blue-500">{t('whyUs')}</div>
          <div onClick={() => router.push('/#article-section')} className="hover:text-blue-500">{t('article')}</div>
          <div onClick={() => router.push('/#contact-section')} className="hover:text-blue-500">{t('contact')}</div>

        </nav>

        {/*ปุ่มเปลี่ยนภาษา*/}
        
        <button onClick={toggleLanguage} className="lg:flex px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          <Languages>{t('toggleLang')}</Languages>
        </button>

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
            <Link href="/#home-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('home')}</Link>
            <Link href="/#services-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('services')}</Link>
            <Link href="/#about-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('about')}</Link>
            <Link href="/#why-us-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('whyUs')}</Link>
            <Link href="/#article-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('articles')}</Link>
            <Link href="/#contact-section" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>{t('contact')}</Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
