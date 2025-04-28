// src/components/ParcheggioForm.js
import React, { useState } from 'react';

function ParcheggioForm({ aggiungiParcheggio }) {
    const [oraIngresso, setOraIngresso] = useState('');
    const [oraUscita, setOraUscita] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!oraIngresso || !oraUscita) {
            alert("Inserisci entrambe le ore.");
            return;
        }

        const parcheggio = {
            oraIngresso,
            oraUscita,
        };

        try {
            const response = await fetch('http://localhost:8080/parcheggio/aggiungi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parcheggio),
            });

            if (response.ok) {
                const result = await response.json();
                aggiungiParcheggio(result); // Passiamo il risultato al componente principale
                setOraIngresso('');
                setOraUscita('');
            } else {
                alert("Errore durante l'aggiunta del parcheggio.");
            }
        } catch (error) {
            console.error('Errore:', error);
            alert("Errore di connessione. Riprova più tardi.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ora di Ingresso (HH:MM):</label>
                <input
                    type="time"
                    value={oraIngresso}
                    onChange={(e) => setOraIngresso(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ora di Uscita (HH:MM):</label>
                <input
                    type="time"
                    value={oraUscita}
                    onChange={(e) => setOraUscita(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Aggiungi Parcheggio</button>
        </form>
    );
}

export default ParcheggioForm;
