package ony.store.services;

import ony.store.entities.Product;

import java.util.List;

public interface ProductServiceInterface {

    public List<Product> getAll();

    public Product add(Product product);

    public boolean delete(Product product);

    public Product update(Product product);

    public List<Product> searchByName(String query);

    public List<Product>getTop10();

    public List<Product>searchByNameInCat(String query, String category);

    public Product getById(String id);


}
