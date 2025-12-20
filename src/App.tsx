import Header from "./components/container/HeaderSection";
import Hero from "./components/container/HeroSection";
import LogoMarquee from "./components/container/MarqueeSection";
import Achievement from "./components/container/AchievementSection";
import OurProcess from "./components/container/OurProcessSection";
import Solution from "./components/container/SolutionSection";
import Industry from "./components/container/IndustrySection";
import Portofolio from "./components/container/PortofolioSection";
import Testimonial from "./components/container/TestimonialSection";
import ContactForm from "./components/container/ContactFormSection";
import Footer from "./components/container/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogoMarquee />
      <Achievement />
      <OurProcess />
      <Solution />
      <Industry />
      <Portofolio />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
