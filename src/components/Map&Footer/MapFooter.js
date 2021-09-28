import "./MapFooter.css";
import Aux from "../../hoc/Auxiliary";
const MapFooter = () => {
  return (
    <Aux>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            className="gmap_iframe"
            width="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dora Trzebinia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
            FNF Mods
          </a>
        </div>
      </div>

      <footer>Copyright 2021 Wojtek Rejdych</footer>
    </Aux>
  );
};
export default MapFooter;
