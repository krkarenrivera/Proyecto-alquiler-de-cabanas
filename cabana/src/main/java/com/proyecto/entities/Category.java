package com.proyecto.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name ="categoria")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategory;

    private String name;

    private String description;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "category")
    @JsonIgnoreProperties("category")
    private List<Cabana> cabanas;



    public Integer getIdCategory() {
        return idCategory;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }



    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Cabana> getCabanas() {
        return cabanas;
    }

    public void setCabanas(List<Cabana> cabanas) {
        this.cabanas = cabanas;
    }
}
