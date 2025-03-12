const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    localeDetection: false,
  },
  localePath: path.resolve("locales"), // ✅ กำหนด path ให้ Next.js โหลด JSON
  reloadOnPrerender: true, // ✅ บังคับให้ Next.js โหลด JSON ใหม่ทุกครั้ง
};
