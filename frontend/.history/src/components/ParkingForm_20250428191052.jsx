import React, { useState } from 'react';
import axios from 'axios';

function ParkingForm({ onAdd }) {
  const [oraIngresso, setOraIngresso] = useState('');
  const [oraUscita, setOraUscita] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oraIngresso && oraUscita) {
      try {
        const response = await axios.post('/parcheggio/prenota', { oraIngresso, oraUscita });
        if (response.status === 201) {
          alert("Prenotazione effettuata con successo!");
        } else if (response.status === 409) {
          alert("Parcheggio non disponibile in questa fascia oraria.");
        }
      } catch (error) {
        console.error("Errore nella prenotazione", error);
      }
    }
  };

  return (
    <div>
      <h2>Prenota Parcheggio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ora di Ingresso:
          <input
            type="time"
            value={oraIngresso}
            onChange={(e) => setOraIngresso(e.target.value)}
          />
        </label>
        <br />
        <label>
          Ora di Uscita:
          <input
            type="time"
            value={oraUscita}
            onChange={(e) => setOraUscita(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Prenota Parcheggio</button>
      </form>
    </div>
  );
}

export default ParkingForm;
