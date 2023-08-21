package ony.store.controllers;


import ony.store.entities.Review;
import ony.store.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("http://localhost:3000")
@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("api/v1.0/reviews")
public class ReviewController {

    ReviewService service;
    @Autowired
    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @GetMapping("/byproduct")
    public ResponseEntity<List<Review>> getReviews(@RequestParam String productId){

        return new ResponseEntity<>(service.getByProduct(productId) ,HttpStatus.OK);
    }

    @PostMapping("/add")
    public HttpStatus addReview(@RequestBody Review review){
        service.create(review);
        return HttpStatus.OK;
    }

}
