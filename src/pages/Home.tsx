import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseKabco from "../components/WhyChooseUS";
import ProductShowcase from "../components/ProductShowcase";
import Industries from "../components/Industries";
import PromotionalAd from "../components/Promotionad";
import PromotionalAd2 from "../components/Promotionad2";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      <Navbar />
       <Hero/>
       <PromotionalAd2/>
       <About />
       <WhyChooseKabco/>
       <PromotionalAd/>
       <ProductShowcase/>
       <Industries/>
       <CTA/>
      <Footer />
    </div>
  );
}