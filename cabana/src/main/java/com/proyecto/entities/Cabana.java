package com.proyecto.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "cabana" )
public class Cabana implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String brand;
    private Integer rooms;

    private String description;

    @ManyToOne
    @JoinColumn(name= "category_id")
    @JsonIgnoreProperties("cabana")
    private Category category;

    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "cabana")
    @JsonIgnoreProperties({"cabana", "messages"})
    private List<Reservas> reservations;





    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public String getBrand() {
        return brand;
    }

    public Integer getRooms() {
        return rooms;
    }




    public void setId(Integer id) {
        this.id = id;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }


    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }




    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Reservas> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservas> reservations) {
        this.reservations = reservations;
    }
}
