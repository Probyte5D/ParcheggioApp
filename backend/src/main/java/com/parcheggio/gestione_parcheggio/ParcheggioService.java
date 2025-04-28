/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.parcheggio.gestione_parcheggio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.Duration;
import java.time.LocalTime;

import java.util.ArrayList;
import java.util.List;
/**
 *
 * @author primu
 */
@Service
public class ParcheggioService {
     

    @Autowired
    private ParcheggioRepository parcheggioRepository;

    // Calcola la durata tra ora ingresso e ora uscita
    public long calcolaDurata(String oraIngresso, String oraUscita) {
        GESTIONE gestione = new GESTIONE();
        return gestione.tempo(oraIngresso, oraUscita);  // Restituisce durata in minuti
    }

    // Calcola il costo basato sulla durata (in minuti)
    public int calcolaCosto(long durataInMinuti) {
        GESTIONE gestione = new GESTIONE();
        return gestione.Costo(durataInMinuti);  // Calcola il costo sulla base della durata
    }

    // Aggiungi un parcheggio
    public Parcheggio aggiungiParcheggio(Parcheggio parcheggio) {
        try {
            System.out.println("Ora ingresso: " + parcheggio.getOraIngresso());
            System.out.println("Ora uscita: " + parcheggio.getOraUscita());

            // Calcolare la durata in minuti
            long durataInMinuti = calcolaDurata(parcheggio.getOraIngresso(), parcheggio.getOraUscita());

            // Calcolare il costo
            int costo = calcolaCosto(durataInMinuti);

            // Impostare la durata e il costo sul parcheggio
            parcheggio.setDurata(String.valueOf(durataInMinuti));  // Impostiamo la durata in minuti come Stringa per il database
            parcheggio.setCosto(costo);

            // Salvataggio nel database
            return parcheggioRepository.save(parcheggio);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Errore nel salvataggio del parcheggio", e);
        }
    }

    // Ottieni tutti i parcheggi
    public Iterable<Parcheggio> ottieniTuttiParcheggi() {
        return parcheggioRepository.findAll();  // Restituisce tutti i parcheggi dal repository
    }

    // Ottieni parcheggio per ID
    public Parcheggio ottieniParcheggioPerId(Long id) {
        return parcheggioRepository.findById(id).orElse(null);  // Restituisce null se non trovato
    }
}