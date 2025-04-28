/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.parcheggio.gestione_parcheggio;

/**
 *
 * @author primu
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/parcheggio")
@CrossOrigin(origins = "http://localhost:3000")  
public class ParcheggioController {
    
    @Autowired
    private ParcheggioService parcheggioService;

    // Aggiungi un parcheggio
    @PostMapping("/aggiungi")
    public ResponseEntity<Parcheggio> aggiungiParcheggio(@RequestBody Parcheggio parcheggio) {
        try {
            Parcheggio parcheggioAggiunto = parcheggioService.aggiungiParcheggio(parcheggio);
            return new ResponseEntity<>(parcheggioAggiunto, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log dell'errore
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Ottieni tutti i parcheggi
    @GetMapping("/tutti")
    public Iterable<Parcheggio> ottieniTuttiParcheggi() {
        try {
            return parcheggioService.ottieniTuttiParcheggi();
        } catch (Exception e) {
            e.printStackTrace(); // Log dell'errore
            return null; // o un errore adeguato
        }
    }

    // Ottieni parcheggio per ID
    @GetMapping("/{id}")
    public ResponseEntity<Parcheggio> ottieniParcheggioPerId(@PathVariable Long id) {
        try {
            Parcheggio parcheggio = parcheggioService.ottieniParcheggioPerId(id);
            if (parcheggio == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(parcheggio, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Log dell'errore
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}