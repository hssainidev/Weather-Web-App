package com.project.craft.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class City implements Serializable {
    @Id
    @Column(nullable = false, updatable = false)
    private Integer id;
    @Column(columnDefinition = "varchar(500)")
    private String cityName;
    @Column(columnDefinition = "varchar(500)")
    private String cityDescription;

    public City() {

    }

    public City(Integer id, String cityName) {
        this.id = id;
        this.cityName = cityName;
    }

    public City(Integer id, String cityName, String cityDescription) {
        this.id = id;
        this.cityName = cityName;
        this.cityDescription = cityDescription;
    }

    public String getCityName() {
        return cityName;
    }

    public Integer getId() {
        return id;
    }

    public String getCityDescription() {
        return cityDescription;
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + id + ", city='" + cityName + '\'' + ", description='" + cityDescription + '\'' + '}';
    }
}
