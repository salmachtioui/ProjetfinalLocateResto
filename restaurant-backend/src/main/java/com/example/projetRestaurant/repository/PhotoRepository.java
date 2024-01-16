package com.example.projetRestaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.projetRestaurant.entities.Photo;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
    Photo findById(int id);
    @Query(value = "select * from photo where restaurant_id=?",nativeQuery = true)
    List<Photo> findAllByR();
}

