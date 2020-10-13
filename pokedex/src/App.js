import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import PokemonInfo from "./components/PokemonInfo";
import PokemonSearchId from "./components/PokemonSearchId";
import FetchingData from "./components/FetchingData";

function App() {

  return (
    <div className="App">
      <Header/>
      <Background/>
      <PokemonInfo/>
      <Footer/>
    </div>
  );
}

export default App;
