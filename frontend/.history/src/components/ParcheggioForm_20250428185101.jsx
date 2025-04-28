import React, { useState } from 'react';

function ParkingForm({ onAdd }) {
  const [oraIngresso, setOraIngresso] = useState('');
  const [oraUscita, setOraUscita] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oraIngresso && oraUscita) {
      onAdd(oraIngresso, oraUscita);
      setOraIngresso('');
      setOraUscita('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ora di Ingresso (HH:MM):</label>
      <input type="time" value={oraIngresso} onChange={(e) => setOraIngresso(e.target.value)} required />

      <label>Ora di Uscita (HH:MM):</label>
      <input type="time" value={oraUscita} onChange={(e) => setOraUscita(e.target.value)} required />

      <button type="submit">Aggiungi Parcheggio</button>
    </form>
  );
}

export default ParkingForm;
