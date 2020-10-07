import React from "react";
import "../styling/header.css";
import pokemon4 from "../assets/pokemons4.jpg";
import pokemon1 from "../assets/pokemons2.jpg"





export default function Header() {

    return(
        <div className="header">
            <img className="pokemon1" src={pokemon4} alt="pokemon"/>
            <img className="pokemon2" src={pokemon1} alt="pokemon"/>
            <div className="container">
                <h1 className="title">Pokémon</h1>
            </div>
        </div>
    )
}