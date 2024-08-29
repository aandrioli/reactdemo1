import React from 'react';
import ReactDOM from 'react-dom/client';

function App2() {
    return <Car color="red"/>;
}

function Car(props) {
    // - De arrow notation is nodig omdat we extra parameters aan het event
    //   willen meegeven, en dat kan niet in een eventhandler.
    return <>
        <h1>App2</h1>
        <h2>Hi, I am a Car!</h2>
        <p id="color"> I'm {props.color}.</p>
       <button className="w3-button w3-round-large w3-green" onClick={(event) => nice("very", event)}>nice!</button>
    </>;
}

function nice(how, evnt) {
    const container = document.getElementById("color");
    const root = ReactDOM.createRoot(container);

    root.render(<>Yes, {how} nice!</>);
    console.log(evnt)
}

export default App2
