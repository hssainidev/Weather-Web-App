package com.project.craft.demo.resource;

import com.project.craft.demo.model.City;
import com.project.craft.demo.service.CityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("city")
public class CityResource {
    private final CityService cityService;

    public CityResource(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<City>> getAllCities() {
        List<City> cities = cityService.findAllCities();
//        for (int i = 0; i < cities.size(); i++) {
//            System.out.println(cities.get(i));
//        }
        return new ResponseEntity<>(cities, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> getCityDescription(@PathVariable("id") Long id) {
//        City city = cityService.getCityDescriptionById(id);
        City city = null;
        return new ResponseEntity<>(city, HttpStatus.OK);
    }
}
