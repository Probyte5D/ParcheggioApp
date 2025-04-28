import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ParkingForm from './components/ParkingForm/ParkingForm';
import ParkingList from './components/ParkingList/ParkingList';
import Footer from './components/Footer/Footer';
import './App.css';  // Importa solo il CSS generale
import axios from 'axios';

function App() {
  const [parcheggi, setParcheggi] = useState([]);

  const caricaParcheggi = async () => {
    try {
        const response = await axios.get('/parcheggio/tutti'); // Usa l'endpoint corretto
        setParcheggi(response.data);
    } catch (error) {
        console.error("Errore nel caricamento dei parcheggi", error);
    }
  };

  useEffect(() => {
    caricaParcheggi();
  }, []);

  const aggiungiParcheggio = async (oraIngresso, oraUscita) => {
    await axios.post('/parcheggio/aggiungi', { oraIngresso, oraUscita });
    caricaParcheggi();
  };

  return (
    <div className="App">
      <Navbar />  {/* Navbar con layout fluid */}
      <Header />  {/* Intestazione */}
      <ParkingForm onAdd={aggiungiParcheggio} />  {/* Form per aggiungere il parcheggio */}
      <ParkingList parcheggi={parcheggi} />  {/* Lista dei parcheggi */}
      <Footer />  {/* Footer con informazioni */}
    </div>
  );
}

export default App;
