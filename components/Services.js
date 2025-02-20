const services = [
    { title: "การขนส่ง", image: "/images/depot_img_1.jpg", desc: "เราขนส่งสินค้าทางรถทุกประเภท" },
    { title: "นำเข้า ส่งออก ทางอากาศ", image: "/images/depot_img_2.jpg", desc: "ขนส่งรวดเร็ว เหมาะสำหรับสินค้าด่วน" },
    { title: "นำเข้า ส่งออก ทางเรือ", image: "/images/depot_img_3.jpg", desc: "ขนส่งสินค้าทางเรือครบวงจร" },
  ];
  
  const Services = () => {
    return (
      <section  className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">บริการของเรา</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={service.image} alt={service.title} className="rounded-lg w-full h-40 object-cover mb-4" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  