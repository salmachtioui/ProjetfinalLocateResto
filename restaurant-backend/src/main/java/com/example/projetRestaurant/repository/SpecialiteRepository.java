package com.example.projetRestaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projetRestaurant.entities.Specialite;

public interface SpecialiteRepository extends JpaRepository<Specialite, Integer> {
    Specialite findById(int id);
}
