package com.example.projetRestaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.projetRestaurant.entities.Zone;

import java.util.Collection;

public interface ZoneRepository extends JpaRepository<Zone, Integer> {
    @Query(value= "select *  from Zone ",nativeQuery = true)
    Collection<?> findAllZones();
    Zone findById(int id);
}
