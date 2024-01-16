package com.example.projetRestaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.projetRestaurant.entities.Serie;
import com.example.projetRestaurant.repository.SerieRepository;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/series")
public class SeriesController {
    @Autowired
    SerieRepository serieRepository;
    @GetMapping("/all")
    public List<Serie> findAll(){
        return serieRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Serie> getSerieByid(@PathVariable int id){

        Serie serie = serieRepository.findById(id);

        return ResponseEntity.ok(serie);

    }
    @PostMapping ("/addSerie")
    public Serie AddSerie(@RequestBody Serie serie){
        return serieRepository.save(serie);
    }

    //update bill by id
    @PutMapping("/{id}")
    public ResponseEntity<Serie> updateSerie(@PathVariable int id,@RequestBody Serie serie){

        Serie existE =serieRepository.findById(id);
        existE.setNom(serie.getNom());
        serieRepository.save(existE);
        return ResponseEntity.ok(existE);

    }

    //Delete Bill By ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBill(@PathVariable int id){

        Serie serie = serieRepository.findById(id);

        serieRepository.delete(serie);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
