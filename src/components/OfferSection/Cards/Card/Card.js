import "./Card.css";
import Aux from "../../../../hoc/Auxiliary";
const Card = (props) => {
  return (
    <div className="card">
      {props.title.length < 19 ? (
        <Aux>
          <h4>{props.title}</h4>
          <img src={props.imgCard} alt={props.altCard} />
        </Aux>
      ) : (
        <Aux>
          <h4 className="long">{props.title}</h4>
          <img className="img-long" src={props.imgCard} alt={props.altCard} />
        </Aux>
      )}

      <button>CENA</button>

      <button className="btn-hover">{props.price}</button>
    </div>
  );
};

export default Card;
