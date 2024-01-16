package com.example.projetRestaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projetRestaurant.entities.Ville;

public interface VilleRepository extends JpaRepository<Ville, Integer> {
    Ville findById(int id);
    Ville findByNom(String nom);
}
