// components/Modal.js
import { useEffect } from 'react';

export default function Modal({ article, onClose }) {
  // ป้องกัน Scroll หน้าหลัง เมื่อเปิด Modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // ฟังก์ชันตรวจจับคลิกนอก modal-content
  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      {/* กล่องเนื้อหา Modal */}
      <div className="relative bg-white p-6 rounded-lg max-w-md w-full shadow-md">
        {/* ปุ่มปิด */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          X
        </button>

        {/* ส่วนแสดงข้อมูลบทความ */}
        <img
          src={article.image}
          alt={article.title}
          className="rounded-3xl w-full h-60 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-2">{article.description}</p>
        <p className="text-sm text-gray-500">Category: {article.category}</p>
      </div>
    </div>
  );
}
