package ony.store.controllers;


import ony.store.entities.SpecificParams;
import ony.store.entities.Values;
import ony.store.services.ValuesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("http://localhost:3000")
@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("api/v1.0/values")
public class ValuesController {

    ValuesService service;
    @Autowired
    public ValuesController(ValuesService service) {
        this.service = service;
    }

    @GetMapping("/all")
    ResponseEntity<List<Values>> getAll(@RequestParam String parameter){
        return new ResponseEntity<>( service.getValues(parameter), HttpStatus.OK);
    }
    @GetMapping("/byproduct")
    ResponseEntity<List<Values>> getOne(@RequestParam String id){
        return new ResponseEntity<>( service.findByProduct(id), HttpStatus.OK);
    }
}
