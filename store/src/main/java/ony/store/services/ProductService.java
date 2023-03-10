package ony.store.services;

import ony.store.entities.Category;
import ony.store.entities.Product;
import ony.store.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements ProductServiceInterface{

    ProductRepo repository;


    @Autowired
    public ProductService(ProductRepo repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> getAll() {
        return repository.findAll();
    }


    @Override
    public List<Product> searchByName(String query){

        if(query.isEmpty()){
            return new ArrayList<Product>();
        }
        return repository.searchByName(query);
    }

    @Override
    public Product add(Product product) {
        repository.save(product);
        return repository.findById(product.getId()).get();
    }

    @Override
    public boolean delete(Product product) {
        return false;
    }

    @Override
    public Product update(Product product) {
        return null;
    }

    @Override
    public List<Product>getTop10(){

        return repository.findTop10ByOrderByIdDesc();
    }

    @Override
    public List<Product>searchByNameInCat(String query, String category){
        Category category1 = new Category();
        category1.setCategory(category);
        return repository.searchByNameInCategory(query,category1);
    }

    @Override
    public Product getById(String id) {
        return repository.findById(Integer.parseInt(id)).get();
    }
}
