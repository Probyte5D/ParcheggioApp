// src/App.js
import React, { useState } from 'react';
import './styles.css';
import ParcheggioForm from './components/ParcheggioForm';
import ParcheggiList from './components/ParcheggiList';

function App() {
    const [parcheggi, setParcheggi] = useState([]);

    const aggiungiParcheggio = (parcheggio) => {
        setParcheggi([parcheggio, ...parcheggi]);
    };

    return (
        <div className="App">
            <h1>Gestione Parcheggio</h1>
            <ParcheggioForm aggiungiParcheggio={aggiungiParcheggio} />
            <ParcheggiList />
        </div>
    );
}

export default App;
