package com.example.projetRestaurant.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    @Column(unique = true,nullable = false)  
    private String nom;
    @JsonIgnore
    @OneToMany(mappedBy = "serie", fetch = FetchType.LAZY)
    private List<Restaurant> restaurants;

    public Serie() {
        super();
    }


    public Serie(String nom) {
        super();
        this.nom = nom;
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


    public List<Restaurant> getRestaurants() {
        return restaurants;
    }


    public void setRestaurant(List<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }
}
