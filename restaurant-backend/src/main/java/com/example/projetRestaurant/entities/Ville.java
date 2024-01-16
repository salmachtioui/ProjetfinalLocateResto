package com.example.projetRestaurant.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Ville {
    public Ville(int id, String nom, List<Zone> zones) {
        super();
        this.id = id;
        this.nom = nom;
        this.zones = zones;
    }
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Column(unique = true,nullable = false)  
    private String nom;

    @OneToMany(mappedBy = "ville")
    private List<Zone> zones;

    public Ville(int id, String nom) {
        super();
        this.id = id;
        this.nom = nom;
    }
    public Ville() {
        super();
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    @JsonIgnore
    public List<Zone> getZones() {
        return zones;
    }
    @JsonSetter
    public void setZones(List<Zone> zones) {
        this.zones = zones;
    }

}
