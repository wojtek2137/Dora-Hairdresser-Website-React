import "./ContactSection.css";
import facebookicon from "./facebook-icon.png";
import adressicon from "./adress-icon.png";
import phoneicon from "./phone-icon.png";
import emailicon from "./email-icon.png";
import ContactForm from "./ContactForm/ContactForm";
const ContactSection = () => {
  return (
    <section id="contact">
      <div className="tile1">
        <h4>
          Znajdź mnie <br /> na
        </h4>
        <a href="https://www.facebook.com/KlubFryzjerskiDora">
          <img src={facebookicon} alt="Facebook tag" />
        </a>
      </div>
      <div className="tile2">
        <h4>
          Napisz <br /> do mnie
        </h4>
        <ContactForm />
      </div>
      <div className="tile3">
        <h4>
          Adres <br /> Dane Kontaktowe
        </h4>
        <ul>
          <li>
            <img src={adressicon} alt="adress icon" />
            Adres:{" "}
            <p>
              "Klub Fryzjerski DORA" <br /> plac Mały Rynek, 32-540 Trzebinia
            </p>
          </li>
          <li>
            <img src={phoneicon} alt="phone icon" />
            Telefon:
            <p>600 036 832</p>
          </li>
          <li>
            <img src={emailicon} alt="email icon" />
            Email: <p>jakis@gmail.com</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ContactSection;
