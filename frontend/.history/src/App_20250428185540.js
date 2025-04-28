import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ParkingForm from './components/ParkingForm';
import ParkingList from './components/ParkingList';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios';

function App() {
  const [parcheggi, setParcheggi] = useState([]);

  const caricaParcheggi = async () => {
    const response = await axios.get('/api/parcheggi'); // o l'endpoint corretto
    setParcheggi(response.data);
  };

  useEffect(() => {
    caricaParcheggi();
  }, []);

  const aggiungiParcheggio = async (oraIngresso, oraUscita) => {
    await axios.post('/api/parcheggi', { oraIngresso, oraUscita });
    caricaParcheggi();
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <ParkingForm onAdd={aggiungiParcheggio} />
      <ParkingList parcheggi={parcheggi} />
      <Footer />
    </div>
  );
}

export default App;
