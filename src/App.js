import NavBar from "./components/NavBar/NavBar";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AboutSection from "./components/AboutSection/AboutSection";
import OpeningSection from "./components/OpeningSection/OpeningSection";
import OfferSection from "./components/OfferSection/OfferSection";
import ContactSection from "./components/ContactSection/ContactSection";
import MapFooter from "./components/Map&Footer/MapFooter";

function App() {


  return (
    <div>
      <NavBar />
      <HeaderSection />
      <AboutSection />
      <OfferSection />
      <OpeningSection />
      <ContactSection />
      <MapFooter />
    </div>
  );
}

export default App;
