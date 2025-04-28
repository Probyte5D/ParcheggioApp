/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


package com.parcheggio.gestione_parcheggio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author primu
 */
@Repository
public interface ParcheggioRepository extends JpaRepository<Parcheggio, Long> {
    // Puoi aggiungere query personalizzate qui se necessario
}