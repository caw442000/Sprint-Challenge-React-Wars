import React from "react";

const CharacterCard = props => {
  return (
    //if entire data set is passed it would have been props.data.id
    <div>
      <h2> Name: {props.data.name} </h2>
      <p> Height: {props.data.height}</p>
     
    </div>
  );
};
export default CharacterCard;