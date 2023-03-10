package ony.store.entities;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.jboss.logging.Message;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Entity
public class Cart {

    @Id
    @GeneratedValue
    private int id;

//    @ManyToMany
//    @LazyCollection(LazyCollectionOption.FALSE)
//    private List<Product> products;

//    @ManyToMany
//    @MapKeyJoinColumn(name = "product_id")
//    private Map<Product , key> products = new HashMap<>();

    @OneToMany
    @MapKey(name = "id")
    @LazyCollection(LazyCollectionOption.FALSE)
    private Map<Integer, Product> products = new HashMap<>();


    @OneToOne
    @JoinColumn(name="users")
    private Users users;

    public Cart() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Map<Integer, Product> getProducts() {
        return products;
    }

    public void setProducts(Map<Integer, Product> products) {
        this.products = products;
    }
}
