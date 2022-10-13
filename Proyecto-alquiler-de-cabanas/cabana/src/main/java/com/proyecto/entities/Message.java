package com.proyecto.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "mensaje")
public class Message implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String messagetext;

    @ManyToOne
    @JoinColumn(name = "cabana_id")
    @JsonIgnoreProperties({"messages","reservas"})
    private Cabana cabana;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonIgnoreProperties({"messages", "reservas"})
    private Client client;

    public Integer getId() {
        return id;
    }

    public String getMessagetext() {
        return messagetext;
    }

    public Cabana getCabana() {
        return cabana;
    }

    public Client getClient() {
        return client;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setMessagetext(String messagetext) {
        this.messagetext = messagetext;
    }

    public void setCabana(Cabana cabana) {
        this.cabana = cabana;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
