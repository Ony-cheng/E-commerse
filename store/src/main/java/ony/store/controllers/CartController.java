package ony.store.controllers;

import ony.store.entities.Cart;
import ony.store.entities.Product;
import ony.store.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.templateparser.markup.HTMLTemplateParser;

@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000"})
@RestController
@RequestMapping("api/v1.0/cart")
public class CartController {
    CartService service;
    @Autowired
    public CartController(CartService service) {
        this.service = service;
    }

    @GetMapping("/find")
    public ResponseEntity<Cart> getCart(@RequestParam String userName){
        return  new ResponseEntity<>(service.getCart(userName) ,  HttpStatus.OK);
    }

    @PostMapping("/add/{cartId}")
    public HttpStatus addProduct(@PathVariable int cartId, @RequestBody Product product){
        service.addToCart(cartId, product);
        return HttpStatus.OK;
    }

    @DeleteMapping("/remove")
    public HttpStatus remove(@RequestParam int cartId, @RequestParam int productId) {
        service.removeFromCart(cartId,productId);
       return HttpStatus.OK;
    }
}
