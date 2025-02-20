import { Ship, Plane, Mail, Truck, Warehouse, Briefcase } from "lucide-react"; // ใช้ Lucide Icons

const services = [
  {
    icon: <Ship size={40} className="text-blue-600" />,
    title: "นำเข้า ส่งออก ทางเรือ",
    description: "จัดทำใบขนสินค้าและเอกสารประกอบตามข้อมูลลูกค้า เดินพิธีการทางเรือ",
  },
  {
    icon: <Plane size={40} className="text-blue-600" />,
    title: "นำเข้า ส่งออก เครื่องบิน",
    description: "จัดทำใบขนสินค้าและเอกสารประกอบตามข้อมูลลูกค้า เดินพิธีการทางเครื่องบิน",
  },
  {
    icon: <Mail size={40} className="text-blue-600" />,
    title: "นำเข้า ทางไปรษณีย์",
    description: "จัดทำใบขนสินค้าและเอกสารประกอบตามข้อมูลลูกค้า เดินพิธีการทางไปรษณีย์",
  },
  {
    icon: <Truck size={40} className="text-blue-600" />,
    title: "ขนส่ง",
    description: "เรามีรถขนส่งพันธมิตรนำเข้าและส่งออก ครอบคลุมทุกประเภท ตั้งแต่เอกสาร ศุลกากร ไปจนถึงปลายทาง",
  },
  {
    icon: <Warehouse size={40} className="text-blue-600" />,
    title: "ใบอนุญาต",
    description: "ให้บริการขอใบอนุญาตนำเข้า-ส่งออกสินค้าต่างๆ เช่น อาหาร เครื่องสำอาง และสินค้าอุตสาหกรรม",
  },
  {
    icon: <Briefcase size={40} className="text-blue-600" />,
    title: "ที่ปรึกษา",
    description: "ให้คำปรึกษาและวางแผนธุรกิจนำเข้า-ส่งออก ลดต้นทุน ลดความเสี่ยง ปฏิบัติตามกฎระเบียบได้อย่างถูกต้อง",
  }
];

export default function SubServices() {
  return (
    <section id="services-section" className="pt-40 py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">บริการของเรา</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          ผู้เชี่ยวชาญด้านบริการนำเข้า-ส่งออกครบวงจร จัดการเอกสาร พิธีการศุลกากร และขนส่งสินค้า เรือ และอากาศ
          พร้อมเคลียร์ภาษี จบทุกกระบวนการในที่เดียว
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
