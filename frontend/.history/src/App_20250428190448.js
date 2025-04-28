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
    try {
        const response = await axios.get('/parcheggio/tutti'); // Use the correct endpoint
        setParcheggi(response.data);
    } catch (error) {
        console.error("Error loading parking spots", error);
    }
};

  useEffect(() => {
    caricaParcheggi();
  }, []);

  const aggiungiParcheggio = async (parcheggio) => {
    try {
        const response = await axios.post('/parcheggio/aggiungi', parcheggio);
        console.log('Parcheggio aggiunto:', response.data);
        // You can update the state or trigger any other action after adding the parking spot
    } catch (error) {
        console.error("Error adding parking spot", error);
    }
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
