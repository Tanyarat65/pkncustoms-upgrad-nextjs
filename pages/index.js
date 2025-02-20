import Header from "../components/Header";
import Hero from "../components/Hero";
import ArticleSection from "../components/ArticleSection";
import Services from "@/components/Services";
import Footer from "../components/Footer";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import SubServices from "@/components/SubServices";

export default function Home() {
  return (
    <>
      
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
