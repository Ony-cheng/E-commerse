package ony.store.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Values {

    @Id
    private int id;

    private String value;

    @ManyToOne
    @JoinColumn(name="product")
    @JsonIgnore
    private Product product;

    @ManyToOne
    @JoinColumn(name="parameter")

    private SpecificParams specificParams;

    public Values() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public SpecificParams getSpecificParams() {
        return specificParams;
    }

    public void setSpecificParams(SpecificParams specificParams) {
        this.specificParams = specificParams;
    }
}
