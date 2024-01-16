package com.example.projetRestaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.projetRestaurant.entities.Ville;
import com.example.projetRestaurant.repository.VilleRepository;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/villes")
class VillesController {


    @Autowired
    VilleRepository villeRepository;
    @GetMapping("/all")
    public List<Ville> findAll(){
        return villeRepository.findAll();
    }

    @GetMapping("/villes/all")
    public List<Ville> getAllUsers(){
        return villeRepository.findAll();
    }
    @GetMapping("/all/{id}")
    public ResponseEntity<Ville> getVilleByid(@PathVariable int id){

        Ville ville = villeRepository.findById(id);

        return ResponseEntity.ok(ville);

    }
    @PostMapping("/addVille")
    public ResponseEntity<Ville> addVille(@RequestBody Ville ville) {
    // Vérifier si les champs obligatoires sont renseignés
    if (ville.getNom() != null ) {
        // Ajouter la ville seulement si les champs obligatoires sont présents
        Ville savedVille = villeRepository.save(ville);
        return new ResponseEntity<>(savedVille, HttpStatus.CREATED);
    } else {
        // Retourner une réponse indiquant que les champs obligatoires sont manquants
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

    //update bill by id
    @PutMapping("/{id}")
    public ResponseEntity<Ville> updateVille(@PathVariable int id,@RequestBody Ville ville){

        Ville existE =villeRepository.findById(id);
        existE.setNom(ville.getNom());

        villeRepository.save(existE);
        return ResponseEntity.ok(existE);

    }

    
    //Delete Bill By ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBill(@PathVariable int id){

        Ville ville = villeRepository.findById(id);

        villeRepository.delete(ville);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }



}
