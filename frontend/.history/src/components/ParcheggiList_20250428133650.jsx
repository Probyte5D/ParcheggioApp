// src/components/ParcheggiList.js
import React, { useEffect, useState } from 'react';

function ParcheggiList() {
    const [parcheggi, setParcheggi] = useState([]);

    useEffect(() => {
        const fetchParcheggi = async () => {
            try {
                const response = await fetch('http://localhost:8080/parcheggio/tutti');
                if (response.ok) {
                    const data = await response.json();
                    setParcheggi(data);
                } else {
                    alert("Errore durante il recupero dei parcheggi.");
                }
            } catch (error) {
                console.error('Errore:', error);
                alert("Errore di connessione. Riprova più tardi.");
            }
        };

        fetchParcheggi();
    }, []); // Il useEffect si esegue una sola volta al caricamento del componente

    return (
        <div>
            <h2>Lista dei Parcheggi</h2>
            <ul>
                {parcheggi.length === 0 ? (
                    <li>Nessun parcheggio disponibile.</li>
                ) : (
                    parcheggi.map((parcheggio) => (
                        <li key={parcheggio.id}>
                            ID: {parcheggio.id}, Ora Ingresso: {parcheggio.oraIngresso}, Ora Uscita: {parcheggio.oraUscita}, Durata: {parcheggio.durata}, Costo: €{parcheggio.costo}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ParcheggiList;
