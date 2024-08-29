import React from 'react';
import { useState } from "react";
import './App.css'

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
            <input type="submit" />
         </form>
      </>
   )
}


export default App5
