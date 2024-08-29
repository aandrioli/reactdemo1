import React from 'react';
import { useState } from "react";

function App5() {
   return (
      <>
         <h1>App5</h1>
         <MijnForm />
      </>
   );
}

function MijnForm() {
   const [naam, setNaam] = useState("");
   const [hallo, setHallo] = useState("Wie ben jij?");

   const zegHallo = (evt) => { 
      evt.preventDefault();
      setHallo("Hallo "+ naam + "!")
   }
 
   return (
      <>
         <p>{hallo}</p>
         <form onSubmit={zegHallo}>
            <input
               type="text"
               onChange={(evt) => setNaam(evt.target.value)} />
            &nbsp;
            <input className="w3-button w3-round-large w3-green w3-padding-small" type="submit" />
         </form>
      </>
   )
}


export default App5
