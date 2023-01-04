package com.project.craft.demo.service;

import com.project.craft.demo.model.City;
import com.project.craft.demo.repository.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {
    private final CityRepo cityRepo;

    @Autowired
    public CityService(CityRepo cityRepo) {
        this.cityRepo = cityRepo;
    }

    public List<City> findAllCities(){
        return cityRepo.findAll();
    }

    public City getCityDescriptionById(Integer id) {
        return  cityRepo.getCityDescriptionById(id);
    }

}
