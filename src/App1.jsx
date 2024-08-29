import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

function App1() {
   // Car is (net als App1 zelf) een 'Function Component' en die kunnen we nu gebruiken
   // alsof het HTML was... 
   return <Car color="red" />;
}

// Dit is een 'function component' die HTML retourneert. Deze moet met een hoofdletter
function Car(props) {
   // - props bevatten de properties, in dit geval color
   // - bij OnClick: React manier met {} om event aan functie te koppelen
   return <>
      <h1>App1</h1>
      <h2>Hi, I am a Car!</h2>
      <p id="color"> I'm {props.color}</p>
      <button onClick={nice}>nice!</button>
   </>;
}

// Dit is dus een normale JS functie
function nice() {
   const container = document.getElementById("color");
   const parColor = ReactDOM.createRoot(container);

   // We krijgen hier wel een melding als we meer dan 1 keer op de knop 
   // drukken.. komt later...
   parColor.render(<>Yes, quite nice!</>);
}

export default App1
