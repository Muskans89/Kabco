import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactInfo";
import Contact from "../components/Form";
import ContactHero from "../components/ContactHero";
import HowCanWeHelp from "../components/HowCanWeHelp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <HowCanWeHelp />
      <Contact/>
       <CTA/>
      <Footer />
    </div>
  );
}