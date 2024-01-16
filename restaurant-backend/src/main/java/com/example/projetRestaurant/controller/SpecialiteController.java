package com.example.projetRestaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.projetRestaurant.entities.Specialite;
import com.example.projetRestaurant.repository.SpecialiteRepository;

import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/specialite")
public class SpecialiteController {
    @Autowired
    SpecialiteRepository specialiteRepository;
    @GetMapping("/all")
    public List<Specialite> findAll(){
        return specialiteRepository.findAll();
    }
    @GetMapping("/all/{id}")
    public ResponseEntity<Specialite> getSpecialicityByid(@PathVariable int id){

        Specialite specialite = specialiteRepository.findById(id);

        return ResponseEntity.ok(specialite);

    }
    @PostMapping ("/addSpeciality")
    public Specialite AddSpeciality(@RequestBody Specialite specialite){
        return specialiteRepository.save(specialite);
    }

    //update bill by id
    @PutMapping("/{id}")
    public ResponseEntity<Specialite> updateSpecialite(@PathVariable int id,@RequestBody Specialite specialite){

        Specialite existE =specialiteRepository.findById(id);
        existE.setNom(specialite.getNom());
        specialiteRepository.save(existE);
        return ResponseEntity.ok(existE);

    }

    //Delete Bill By ID
    @DeleteMapping("/Specialite/{id}")
    public ResponseEntity<HttpStatus> deleteBill(@PathVariable int id){

        Specialite specialite = specialiteRepository.findById(id);

        specialiteRepository.delete(specialite);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }



}
