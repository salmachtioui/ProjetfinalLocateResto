package com.example.projetRestaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projetRestaurant.entities.Serie;

public interface SerieRepository extends JpaRepository<Serie, Integer> {
    Serie findById(int id);
}

