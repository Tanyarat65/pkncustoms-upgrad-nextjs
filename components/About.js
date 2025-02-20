import Image from 'next/image';

const About = () => {
  return (
    <section id="about-section" className="pt-40 py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">เกี่ยวกับเรา</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6 font-bold">
          PKN Customs Service Co., Ltd. ก่อตั้งเมื่อวันที่ 15 มีนาคม 2550 (ทะเบียนนิติบุคคลเลขที่ 0105550029366)
          เราคือผู้เชี่ยวชาญด้านบริการนำเข้า-ส่งออกและตัวแทนออกของ ที่มุ่งมั่นให้คำปรึกษาครบวงจรแบบมืออาชีพ
        </p>
        <div className="flex justify-center">
          <Image src="/images/pkn_about.jpg" width={800} height={500} alt="เกี่ยวกับเรา" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default About;