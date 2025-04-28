/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.parcheggio.gestione_parcheggio;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
/**
 *
 * @author primu
 */
@Entity
public class Parcheggio {
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String oraIngresso;
    private String oraUscita;
    private String durata;
    private int costo;

    // Getter e Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOraIngresso() {
        return oraIngresso;
    }

    public void setOraIngresso(String oraIngresso) {
        this.oraIngresso = oraIngresso;
    }

    public String getOraUscita() {
        return oraUscita;
    }

    public void setOraUscita(String oraUscita) {
        this.oraUscita = oraUscita;
    }

    public String getDurata() {
        return durata;
    }

    public void setDurata(String durata) {
        this.durata = durata;
    }

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }
}
    
