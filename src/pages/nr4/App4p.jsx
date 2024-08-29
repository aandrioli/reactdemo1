import React from 'react';
import { useState } from "react";

function App4() {
   const colors = [
      { id: 1, color: "red" },
      { id: 2, color: "white" },
      { id: 3, color: "blue" }
   ];

   return (
      <>
         <h1>App4</h1>
         {
            colors.map((k) => <Car key={k.id} color={k.color} />)
         }
      </>
   )
}

function Car(props) {
   // Gebruik een state voor de tekst van de paragraaf.
   const [value, setValue] = useState("");

   // We hoeven nu enkel de state aan te passen! Dat is simpel.. we maken er een arrow functie voor.
   const clickfunc = (x) => setValue(x);
   // console.log(props)

   // - De paragraaf vullen we nu met de waarde van de state
   // - In de onClick gebruiken er de arrow functie
   return <>
      <h2> Hi, I'm a {props.color} car.</h2>
      <p>{value}</p>
      <button
         className="w3-button w3-round-large w3-green"
         onClick={() => clickfunc("Yes, very nice indead!")}>
         nice!
      </button>
   </>;
}

// MERK OP dat we de pagina niet actief renderen!!
// Als we de state aanpassen, zal react zelf de pagina renderen.

export default App4
