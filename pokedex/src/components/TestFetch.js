import React, {useEffect} from "react";

function useFetch(url) {


    useEffect( async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        const pokemon = data.results;
        console.log(data.results)
    })
}

export default function TestFetch() {

    return(
        <div>
            {useFetch(`https://pokeapi.co/api/v2/pokemon/ditto`)}
        </div>
    )
}