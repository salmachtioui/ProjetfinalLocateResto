package com.example.projetRestaurant.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.projetRestaurant.entities.Zone;
import com.example.projetRestaurant.repository.ZoneRepository;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class ZoneService {

    @Autowired
    ZoneRepository zoneRepo;

    public List<Zone> getZonesByVille(int id) {
        List<Zone> invoices=zoneRepo.findAll();
        List<Zone> invoicescat= new ArrayList<>();

        Zone invoice = null;

        for(Zone con:invoices){
            if(con.getVille().getId()==id) {
                invoice = con;
                invoicescat.add(invoice);
            }
        }
        return invoicescat;
    }





}
