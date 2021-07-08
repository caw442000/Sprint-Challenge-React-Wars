import React from 'react';
import CharacterList from './components/CharacterList';
import styled from "styled-components";
import './App.css';


const AppStyle = styled.div`
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display:flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle >
      <h1 className="Header">React Wars</h1>
      <CharacterList />
    </AppStyle>
  );
}

export default App;
