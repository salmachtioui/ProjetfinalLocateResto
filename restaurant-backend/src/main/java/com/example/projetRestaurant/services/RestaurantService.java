package com.example.projetRestaurant.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projetRestaurant.DAO.RestaurantDAO;
import com.example.projetRestaurant.entities.Restaurant;

import java.util.List;
import java.util.Map;

@Service
public class RestaurantService implements RestaurantInterface {

    @Autowired
    RestaurantDAO dao;

    @Override
    public List<Map<String, Object>> listar() {
        return dao.listar();
    }

    @Override
    public List<Map<String, Object>> listarId(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int add(Restaurant p) {
        return dao.add(p);
    }

    @Override
    public int edit(Restaurant p) {
        // TODO Auto-generated method stub
        return dao.edit(p);
    }

    @Override
    public int delete(int id) {
        // TODO Auto-generated method stub
        return dao.delete(id);
    }



}
