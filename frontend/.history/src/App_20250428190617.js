import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [parcheggi, setParcheggi] = useState([]);
  const [newParcheggio, setNewParcheggio] = useState({
    // Replace with the actual fields of your "Parcheggio" model
    nome: '',
    posizione: '',
    descrizione: ''
  });

  // Carica tutti i parcheggi
  const caricaParcheggi = async () => {
    try {
      const response = await axios.get('/parcheggio/tutti');
      setParcheggi(response.data);
    } catch (error) {
      console.error("Error loading parking spots", error);
    }
  };

  // Aggiungi un parcheggio
  const aggiungiParcheggio = async () => {
    try {
      const response = await axios.post('/parcheggio/aggiungi', newParcheggio);
      console.log('Parcheggio aggiunto:', response.data);
      // Update the list of parcheggi or reset the form
      caricaParcheggi();
    } catch (error) {
      console.error("Error adding parking spot", error);
    }
  };

  // Carica parcheggio per ID
  const caricaParcheggioPerId = async (id) => {
    try {
      const response = await axios.get(`/parcheggio/${id}`);
      console.log('Parcheggio per ID:', response.data);
      // Set the data in state or show in the UI
    } catch (error) {
      console.error("Error loading parking spot by ID", error);
    }
  };

  useEffect(() => {
    caricaParcheggi(); // Load all parking spots when the component mounts
  }, []);

  return (
    <div>
      <h1>Gestione Parcheggio</h1>

      <h2>Aggiungi Parcheggio</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        aggiungiParcheggio();
      }}>
        <input
          type="text"
          placeholder="Nome"
          value={newParcheggio.nome}
          onChange={(e) => setNewParcheggio({ ...newParcheggio, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Posizione"
          value={newParcheggio.posizione}
          onChange={(e) => setNewParcheggio({ ...newParcheggio, posizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={newParcheggio.descrizione}
          onChange={(e) => setNewParcheggio({ ...newParcheggio, descrizione: e.target.value })}
        />
        <button type="submit">Aggiungi</button>
      </form>

      <h2>Elenco Parcheggi</h2>
      <ul>
        {parcheggi.map((parcheggio) => (
          <li key={parcheggio.id}>
            {parcheggio.nome} - {parcheggio.posizione}
            <button onClick={() => caricaParcheggioPerId(parcheggio.id)}>Dettagli</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
