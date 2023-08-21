package ony.store.entities;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;


    @Entity
    public class Cart2 {

        @Id
        @GeneratedValue
        private int id;

        @OneToMany
        @MapKey(name = "id")
        @LazyCollection(LazyCollectionOption.FALSE)
        private Map<Integer, CartItem> cartItems = new HashMap<>();

        @OneToOne
        @JoinColumn(name="users")
        private Users users;

        public Cart2() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Map<Integer, CartItem> getCartItems() {
            return cartItems;
        }

        public void setCartItems(Map<Integer, CartItem> cartItems) {
            this.cartItems = cartItems;
        }

        public Users getUsers() {
            return users;
        }

        public void setUsers(Users users) {
            this.users = users;
        }
    }
