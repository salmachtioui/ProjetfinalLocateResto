package com.example.projetRestaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.example.projetRestaurant.entities.Restaurant;
import com.example.projetRestaurant.repository.RestaurantRepository;
import com.example.projetRestaurant.services.RestaurantService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/restaurant")
public class RestaurantController {


    @Autowired
    private RestaurantService service;
    @Autowired
    RestaurantRepository restaurantRepository;
    @PostMapping("/add")
    void addRestaurant(@RequestBody Restaurant restaurant){

        System.out.println(restaurant.getZone().toString());
        restaurantRepository.save(restaurant);
    }

    @GetMapping("/all")
    List<Restaurant> getAllRestaurant(){
        return restaurantRepository.findAll();
    }
    @GetMapping("/allE")
    List<Restaurant> getAllRestaurant0(){
        return restaurantRepository.findAllBy();
    }
    @GetMapping("/allV")
    List<Restaurant> getAllRestaurantV(){
        return restaurantRepository.findAllByV();
    }

    
    //Delete Bill By ID
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteBill(@PathVariable int id){

        Restaurant restaurant = restaurantRepository.findById(id);

        restaurantRepository.delete(restaurant);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @GetMapping("/{id}")
    Restaurant getRestaurantById(@PathVariable Long id){
        return restaurantRepository.findById(id).get();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@PathVariable int id, @RequestBody Restaurant restaurant){

        Restaurant existE =restaurantRepository.findById(id);
        existE.setEtat(restaurant.getEtat());
        restaurantRepository.save(existE);
        return ResponseEntity.ok(existE);

    }
    @GetMapping("/allstat")
    List<Object[]> getAllRestaurantstat(){
        return restaurantRepository.listeRestaurant();
    }
    @GetMapping("/allstatV")
    List<Object[]> getAllRestaurantstatV(){
        return restaurantRepository.listeRestaurantville();
    }
    @GetMapping("/listar")
    public List<Map<String, Object>> listar(Model model) {
        return service.listar();
    }

    @PostMapping("/agregar")
    public String save(@RequestBody Restaurant p, Model model) {
        int id=service.add(p);
        if(id==0) {
            return "Impossible de s'enregistrer";
        }
        return "Il a été enregistré avec succès !";
    }

    @PostMapping("/actualizar/{id}")
    public String save(@RequestBody Restaurant p,@PathVariable long id,Model model) {
        p.setId(id);
        int r=service.edit(p);
        if(r==0) {
            return "La mise à jour a échoué";
        }
        return "Il a été mis à jour avec succè!";
    }
    @PostMapping("/eliminar/{id}")
    public String delete(@PathVariable int id,Model model) {
        int r=service.delete(id);
        if(r==0) {
            return "Enregistrement non supprimé !";
        }
        return "Enregistrement supprimé !";
    }
}
