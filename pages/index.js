import Header from "../components/Header";
import Hero from "../components/Hero";
import ArticleSection from "../components/ArticleSection";
import Services from "@/components/Services";
import Footer from "../components/Footer";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import SubServices from "@/components/SubServices";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <>
      <SEO 
        title="PKN Customs Services | นำเข้า-ส่งออกและโลจิสติกส์ครบวงจร" 
        description="PKN Customs ให้บริการนำเข้า-ส่งออก ขนส่งสินค้า ศุลกากร ใบอนุญาต และที่ปรึกษาโดยผู้เชี่ยวชาญมากกว่า 18 ปี"
        keywords="นำเข้า, ส่งออก, ขนส่ง, ศุลกากร, PKN Customs, ใบอนุญาต, โลจิสติกส์"
        image="/images/Logo.jpg"
        url="https://pkncustomsservices.com"
      />
      <Header />
      <main className="">
        <Hero />
        <SubServices />
        <Services />
        <About />
        <WhyUs />
        <ArticleSection />
      </main>
      <Footer />
    </>
  );
}
