import "./OfferSection.css";
import Cards from "./Cards/Cards";
const OfferSection = () => {
  return (
    <section id="oferta">
      <h2 className="nav-brand">
        <span className="nav-brand-club">KLUB</span>DORA...
      </h2>
      <h3>Oferta</h3>

      <Cards />
    </section>
  );
};

export default OfferSection;
