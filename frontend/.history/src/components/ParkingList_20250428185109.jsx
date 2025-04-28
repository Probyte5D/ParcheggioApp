import React from 'react';

function ParkingList({ parcheggi }) {
  return (
    <div>
      <h2 className="ListaParcheggiTitle">Lista dei Parcheggi</h2>
      <ul>
        {parcheggi.map((p) => (
          <li key={p.id}>
            ID: {p.id}, Ora Ingresso: {p.oraIngresso}, Ora Uscita: {p.oraUscita}, Durata: {p.durata} min, Costo: €{p.costo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingList;
