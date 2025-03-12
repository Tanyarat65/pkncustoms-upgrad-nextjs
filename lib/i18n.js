import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// โหลดไฟล์ JSON ที่ใช้แปลภาษา
import en from '../locales/en/common.json';
import th from '../locales/th/common.json';

// ตรวจสอบว่า i18n ถูก `init` แล้วหรือยัง
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next) // ✅ ต้องใช้เพื่อให้ react-i18next ทำงาน
    .init({
      resources: {
        en: { translation: en },
        th: { translation: th },
      },
      lng: 'en', // ✅ ค่าเริ่มต้น
      fallbackLng: 'en', // ✅ ถ้าไม่เจอภาษาที่ต้องการให้ใช้ 'en'
      interpolation: { escapeValue: false },
    })
    .then(() => {
      console.log("✅ i18n initialized:", i18n);
    })
    .catch(err => {
      console.error("❌ i18n initialization failed:", err);
    });
}

export default i18n;
