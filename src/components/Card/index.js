import React from "react";
import "./style.css"

const Card = props => {
  return (
    <div className="card" value={props.id} onClick={() => props.handleClicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
