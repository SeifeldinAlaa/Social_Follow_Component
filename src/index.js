import React from 'react';
import ReactDOM from 'react-dom';
import SocialFollow from "./SocialFollow";
import './styles.css';




function App() {

    return (

        <div classname="App">

            <h1>Social Follow Demo</h1>

            <SocialFollow />
        </div>

    );


}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);