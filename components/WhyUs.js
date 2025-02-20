import Image from "next/image";

const benefits = [
  "ให้คำปรึกษาครบวงจร จบทุกขั้นตอนในที่เดียว",
  "ทีมงานมืออาชีพ ดูแลทุกกระบวนการอย่างรวดเร็วและถูกต้อง",
  "ประสบการณ์สูง พร้อมแก้ไขปัญหาเฉพาะหน้าได้ทันที",
  "ราคาคุ้มค่า ประหยัดเวลาและค่าใช้จ่าย",
  "มีบริการแนะนำประกันสินค้าและเอกสารครบถ้วน",
];

export default function WhyUs() {
  return (
    <section id="why-us-section" className="pt-40 py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
          ทำไมลูกค้าต้องเลือกเรา?
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          เพราะเราเป็นผู้เชี่ยวชาญด้านนำเข้า-ส่งออกและขนส่งสินค้ามากว่า 18 ปี
          มีประสบการณ์มากกว่า 30 ปี พร้อมบริการครบวงจร
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4 text-gray-800">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 text-2xl mr-3">✔</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <Image
              src="/images/whyus_1.jpg"
              alt="Why Choose Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
