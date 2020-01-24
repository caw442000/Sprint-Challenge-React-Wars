import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import uuid from "react-uuid";
import styled from "styled-components";


const ProfileCard = styled.div`
    display:flex;
    width: 100%;
    max-width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    flex-flow: row wrap;
    padding: 40px;
    background: white;
    opacity: 0.75;
    
    



`;



const CharacterList = () => {
  //set to empty array as we have no data until after the useEffect axios call
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    //this is where the code goes to call
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []); 
  
  return (
    <ProfileCard>
        {characters.map(character => {
            return (
                <CharacterCard //can pass in the full data or just individual pieces data={film}
                    key={uuid()} //key is a unique item that can be passed
                    character={character}
                />
            );
        })}

    </ProfileCard>
  );
} 
export default CharacterList;
