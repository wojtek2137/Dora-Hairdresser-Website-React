import "./Cards.css";
import Card from "./Card/Card";
import haircutwoman from "./CardImages/haircut-woman.png";
import haircutman from "./CardImages/haircut-man.png";
import haircutmodelling from "./CardImages/haircut-modelling.png";
import modelling from "./CardImages/modelling.png";
import haircutbangs from "./CardImages/haircut-bangs.png";
import hairdyeing from "./CardImages/hair-dyeing.png";
import highlights from "./CardImages/highlights.png";
import baleyage from "./CardImages/baleyage.png";
import ombre from "./CardImages/ombre.png";
import perm from "./CardImages/perm.png";
import paintreflex from "./CardImages/paint-reflex.png";
import occasionalcombing from "./CardImages/occasional-combing.png";
import weddingcombing from "./CardImages/wedding-combing.png";
import botox from "./CardImages/botox.png";
const Cards = () => {
  return (
    <div className="grid">
      <Card
        imgCard={haircutwoman}
        altCard="haircut woman"
        title="Strzyżenie Damskie"
        price="40 zł"
      />
      <Card
        imgCard={haircutman}
        altCard="haircut man"
        title="Strzyżenie Męskie"
        price="25(D)/30(M) zł"
      />
      {/* card long */}
      <Card
        imgCard={haircutmodelling}
        altCard="haircut modelling"
        title="Strzyżenie, mycie, modelowanie"
        price="40/80 zł"
      />
      <Card
        imgCard={modelling}
        altCard="modelling"
        title="Modelowanie"
        price="30/60 zł"
      />
      <Card
        imgCard={haircutbangs}
        altCard="haircut bangs"
        title="Strzyżenie grzywki"
        price="10 zł"
      />
      <Card
        imgCard={hairdyeing}
        altCard="hair dyeing"
        title="Farba jeden kolor"
        price="60/100/150 zł"
      />
      <Card
        imgCard={highlights}
        altCard="highlights"
        title="Pasemka"
        price="100/150 zł"
      />

      <Card
        imgCard={baleyage}
        altCard="Baleyage"
        title="Baleyage"
        price="100/150/200 zł"
      />

      <Card
        imgCard={ombre}
        altCard="ombre"
        title="Ombre/Sombre"
        price="80/150/200 zł"
      />
      <Card
        imgCard={perm}
        altCard="permanent"
        title="Trwała"
        price="60/80 zł"
      />
      <Card
        imgCard={paintreflex}
        altCard="paint + reflex"
        title="Farba + Reflex"
        price="100/150 zł"
      />
      <Card
        imgCard={occasionalcombing}
        altCard="Occasional Combing"
        title="Czesanie      okolicznościowe"
        price="60/80 zł"
      />
      <Card
        imgCard={weddingcombing}
        altCard="Wedding Combing"
        title="Czesanie ślubne"
        price="100 zł"
      />
      <Card imgCard={botox} altCard="Botox" title="Botox" price="100 zł" />
    </div>
  );
};

export default Cards;
