package ony.store.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class DeliveryInfo {

    @Id
    @GeneratedValue
    private int id;

    private String city;

    private String deliveryAddress;

    private String postOffice;

    private String deliveryType;

    private boolean payByCard;

    private boolean deliveryToPostOffice;

    private String email;

    private String name;

    private String surname;

    private String phone;

    @OneToOne
    @JoinColumn(name = "users_id")
    @JsonIgnore
    private Users users;


    public DeliveryInfo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getPostOffice() {
        return postOffice;
    }

    public void setPostOffice(String postOffice) {
        this.postOffice = postOffice;
    }

    public String getDeliveryType() {
        return deliveryType;
    }

    public void setDeliveryType(String deliveryType) {
        this.deliveryType = deliveryType;
    }

    public boolean isPayByCard() {
        return payByCard;
    }

    public void setPayByCard(boolean payByCard) {
        this.payByCard = payByCard;
    }

    public boolean isDeliveryToPostOffice() {
        return deliveryToPostOffice;
    }

    public void setDeliveryToPostOffice(boolean deliveryToPostOffice) {
        this.deliveryToPostOffice = deliveryToPostOffice;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
