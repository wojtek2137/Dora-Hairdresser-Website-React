import "./OpeningSection.css";
import scissors from "./OpeningSection.png";
const OpeningSection = () => {
  return (
    <div className=" opening">
      <div className="hours">
        <div className="photo">
          <img src={scissors} alt="" />
        </div>
        <h2>Odwiedź mnie w</h2>

        <ul>
          <li>
            Poniedziałek:
            <br /> 11:00-17:00
          </li>
          <li>
            Wtorek:
            <br /> 11:00-17:00
          </li>
          <li>
            Środa:
            <br /> 11:00-19:00
          </li>
          <li>
            Czwartek:
            <br /> 11:00-17:00
          </li>
          <li>
            Piątek:
            <br /> 11:00-19:00
          </li>
          <li>
            Sobota:
            <br /> 10:00-14:00
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OpeningSection;
