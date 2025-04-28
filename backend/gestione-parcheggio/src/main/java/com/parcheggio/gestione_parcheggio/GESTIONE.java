/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.parcheggio.gestione_parcheggio;

/**
 *
 * @author primu
 */
public class GESTIONE {
   
    // Calcola la durata tra l'ora di ingresso e l'ora di uscita in minuti
    public long tempo(String tt1, String tt2) {
        int ora1, ora2;
        int min1, min2;

        // tt1 -> Ora di ingresso
        ora1 = Integer.parseInt(tt1.substring(0, 2));
        min1 = Integer.parseInt(tt1.substring(3, 5));

        // tt2 -> Ora di uscita
        ora2 = Integer.parseInt(tt2.substring(0, 2));
        min2 = Integer.parseInt(tt2.substring(3, 5));

        int durataOre;
        int durataMinuti;

        // Calcola ore e minuti della durata
        if (min2 >= min1) {
            durataOre = ora2 - ora1;
            durataMinuti = min2 - min1;
        } else {
            durataOre = ora2 - ora1 - 1;
            durataMinuti = 60 - min1 + min2;
        }

        // Se la durata è negativa (es. uscita dopo la mezzanotte), aggiusta il tempo
        if (durataOre < 0) {
            durataOre = durataOre + 24;
        }

        // Calcoliamo la durata totale in minuti
        long durataTotaleInMinuti = (durataOre * 60) + durataMinuti;

        return durataTotaleInMinuti;  // Restituiamo la durata in minuti
    }

    // Calcola il costo del parcheggio in base alla durata (in minuti)
    public int Costo(long durataInMinuti) {
        int costo = 0;

        // Prezzi di base: 3 euro per l'ingresso e 2 euro per ogni ora
        int costo1 = 3;
        int costo2 = 2;

        // Calcola le ore dalla durata in minuti
        int ore = (int) (durataInMinuti / 60);  // Ore complete
        int minuti = (int) (durataInMinuti % 60);  // Minuti residui

        // Se i minuti sono 0, decrementa l'ora
        if (minuti == 0) {
            ore--;
        }

        // Calcola il costo totale
        costo = costo1 + ore * costo2;

        return costo;
    }

    // Controlla se l'ora passata è valida (formato HH:MM)
    public int controlloOra(String tt) {
        int ok = 1;
        if (tt.length() != 5 || tt.charAt(2) != ':') {
            ok = 0;
        }

        if (tt.length() == 4) {
            tt = "0" + tt; // Aggiusta l'ora se è un numero a una cifra (es. 9:30 diventa 09:30)
        }

        String ore = tt.substring(0, 2);
        String min = tt.substring(3, 5);
        int oreUno = Integer.parseInt(ore);
        int minUno = Integer.parseInt(min);

        // Verifica se ore e minuti sono nel range valido
        if (oreUno < 0 || oreUno > 23 || minUno < 0 || minUno > 59)
            ok = 0;

        // Verifica che il formato sia corretto (solo numeri e i due punti)
        for (int i = 0; i < tt.length(); i++) {
            char c = tt.charAt(i);
            int ASCI = c;
            if (i == 2) {
                if (ASCI != 58) // I due punti ":" devono essere presenti
                    ok = 0;
            } else {
                if (ASCI < 48 || ASCI > 57) // I caratteri devono essere numeri (48-57 in ASCII)
                    ok = 0;
            }
        }
        return ok;
    }
}