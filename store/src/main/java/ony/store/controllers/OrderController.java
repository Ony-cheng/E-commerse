package ony.store.controllers;

import ony.store.entities.PurchaseOrder;
import ony.store.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("api/v1.0/order")
public class OrderController {

    OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/find")
    public ResponseEntity<List<PurchaseOrder>> getOrders(@RequestParam String userName){
        return new ResponseEntity<>(orderService.getOrders(userName), HttpStatus.OK);
    }

    @PostMapping("/new")
    public HttpStatus createOrder(@RequestBody PurchaseOrder order){
        orderService.createOrder(order);
        return HttpStatus.OK;
    }
}
