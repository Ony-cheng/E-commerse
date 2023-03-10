package ony.store.controllers;

import ony.store.entities.Category;
import ony.store.entities.Product;
//import ony.store.entities.SubCategory;
import ony.store.entities.SubCategory;
import ony.store.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("http://localhost:3000")
@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000"})
@RestController
@RequestMapping("api/v1.0/category")
public class CategoryController {
    @Autowired
    CategoryService service;

    @GetMapping("/all")
    public ResponseEntity<List<Category>> receiveAll(){
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/sub")
    public ResponseEntity<List<SubCategory>> receiveSub(@RequestParam String category){
        return new ResponseEntity<>(service.getSub(category), HttpStatus.OK);
    }
}
