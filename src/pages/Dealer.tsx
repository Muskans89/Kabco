import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import DealerHero from "../components/Dealerhero";
import Partner from "../components/Partner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DealerHero />
      <Partner />
       <CTA/>
      <Footer />
    </div>
  );
}