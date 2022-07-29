package com.project.craft.demo.repository;

import com.project.craft.demo.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepo extends JpaRepository<City, Long> {
//    City getCityDescriptionById(Long id);
}
