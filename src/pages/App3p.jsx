import React from 'react';
import ReactDOM from 'react-dom/client';

function App3() {
    // array van objecten in JS. Deze {} zijn dus normaal JavaScript, geen React.
    const colors = [
        { id: 1, color: "red" },
        { id: 2, color: "white" },
        { id: 3, color: "blue" }
    ];

    return (
        <>
            <h1>App3</h1>
            {
                // - Key is niet als attibuut van props te gebruiken
                // - Gebruik van map over array
                colors.map((k) => <Car key={k.id} nr={k.id} color={k.color} />)
            }
        </>
    )
}

function Car(props) {
    // Er zijn nu meerdere knoppen en paragrafen, en die moeten we 
    // uit elaar houden. We maken er id's voor.
    const parid = "par" + props.nr;
    const butid = "but" + props.nr;
    return <>
        <h2> Hi, I'm a {props.color} car.</h2>
        <p id={parid}></p>
        <button
            className="w3-button w3-round-large w3-green"
            id={butid}
            onClick={(event) => nice("very", event)}>
            nice!
        </button>
    </>;
}

function nice(how, evnt) {
    // We moeten nu uitvogelen welke knop is ingedrukt. Dat doen we a.d.h.v
    // het id, en het nummer (nr) wat we daarin gezet hebben.

    // Hmmm ... een beetje  gegoochel ...
    // Reconstrueer het is van de bijhehorende paragraaf.
    const id = evnt.target.id.replace("but", "par");

    const container = document.getElementById(id);
    const root = ReactDOM.createRoot(container);

    // En nog steeds die warning ....
    root.render(<>Yes, {how} nice!</>);
    //console.log(evnt)
}

// KORTOM WE DOEN HIER VAST IETS NIET HANDIG!!

export default App3
