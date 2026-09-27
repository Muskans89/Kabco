import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ProductsHero from "../components/Porductshero";
import ProductShowcase from "../components/Item";


export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductsHero/>
      <ProductShowcase/>
       <CTA/>
      <Footer />
    </div>
  );
}