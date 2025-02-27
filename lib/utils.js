import { useState } from "react";

// สร้างฟังก์ชันเพื่อใช้ในการเปิดปิด Modal
export function useModalArticle() {
    const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  // คืนค่าที่จำเป็นให้คอมโพเนนต์อื่น ๆ ใช้
  return {
    selectedArticle,
    openModal,
    closeModal,
  };
}