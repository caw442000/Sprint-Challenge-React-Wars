import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #d7d6d1;
    margin: 15px;
    width: 25%;
    padding: 0 10px;
    :hover{
        background-color: black;
        color: #d7d6d1;
    }
    border: 3px solid black;

`;

const CardH1 = styled.h1`
    text-align: center;

`;

const CharacterCard = ({character}) => {
  return (
 
    
      <CardDiv>
        <CardH1> Name: {character.name}</CardH1>
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