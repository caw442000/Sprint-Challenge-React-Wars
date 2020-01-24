import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import uuid from 'react-uuid'


function CharacterList() {
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
  }, []); //useEffects require a dependency array [], empty array makes useEffect run once but you can pass state then what you pass to watch will update useEffect if no empty array it will go into infinite loop
  
  console.log(characters);
  return (
    <div>
      {characters.map(character => {
        return (
          <CharacterCard //can pass in the full data or just individual pieces data={film}
            key={uuid()} //key is a unique item that can be passed
            data={character}
            
           
            
            // title={film.title}
            // description={film.description}
            // director={film.director}
            // release_date={film.release_date}
          />
        );
      })}
    </div>
  );
} 
export default CharacterList;
