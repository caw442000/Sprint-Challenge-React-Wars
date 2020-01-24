import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: red;
    margin: 15px;
    width: 30%;

`;

const CharacterCard = ({character}) => {
  return (
 
    
      <CardDiv>
          <h1> Name: {character.name}</h1>
        <h2>
            Gender: {character.gender}
        </h2>
        <h2>
            Birth Year: {character.birth_year}
        </h2> 
        <h2>
            Height: {character.height} cm
        </h2>
        <h2>
            Mass: {character.mass} kg
        </h2>
          <h2>
          Hair Color: {character.hair_color}
          </h2>
          <h2>
          Eye Color: {character.eye_color}
          </h2>
    </CardDiv>
    
  );
};
export default CharacterCard;