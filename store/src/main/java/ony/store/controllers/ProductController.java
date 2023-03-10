package ony.store.controllers;

import ony.store.entities.Product;
import ony.store.services.ProductServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("http://localhost:3000")
@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000"})
@RestController
@RequestMapping("api/v1.0/product")
public class ProductController {

    ProductServiceInterface service;

    @Autowired
    public ProductController(ProductServiceInterface service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> receiveAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }
    @GetMapping("/one")
    public ResponseEntity<Product> getById(@RequestParam String id){
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }


    @GetMapping("/search")
    public ResponseEntity<List<Product>> search(@RequestParam String query){
        return new ResponseEntity<>(service.searchByName(query), HttpStatus.OK);
    }

    @GetMapping("/searchcat")
    public ResponseEntity<List<Product>> searchInCat(@RequestParam String query, String category){
        return new ResponseEntity<>(service.searchByNameInCat(query, category), HttpStatus.OK);
    }

    @PostMapping("add")
    public ResponseEntity<Product> create(@RequestBody Product product){
        return new ResponseEntity<>(service.add(product), HttpStatus.OK);
    }

    @GetMapping("/top")
    public ResponseEntity<List<Product>> top(){
        return new ResponseEntity<>(service.getTop10(), HttpStatus.OK);
    }

}

