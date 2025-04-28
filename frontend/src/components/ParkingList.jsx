import React from 'react';

function ParkingList({ parcheggi }) {
  return (
    <div className="ParkingList">
      <h2>Lista dei Parcheggi</h2>
      <ul>
        {parcheggi.map(parcheggio => (
          <li key={parcheggio.id}>
            <div>
              <span>ID: {parcheggio.id}</span>
              <div className="details">
                Ora di Ingresso: {parcheggio.oraIngresso} <br />
                Ora di Uscita: {parcheggio.oraUscita} <br />
                Durata: {parcheggio.durata} <br />
              </div>
            </div>
            <div className="cost">
              Costo: €{parcheggio.costo}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingList;
