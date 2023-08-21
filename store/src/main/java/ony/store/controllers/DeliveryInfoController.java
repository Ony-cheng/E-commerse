package ony.store.controllers;


import ony.store.entities.DeliveryInfo;
import ony.store.entities.Users;
import ony.store.novaposhta.mapping.CitiesData;
import ony.store.novaposhta.mapping.WhData;
import ony.store.repositories.UsersRepository;
import ony.store.services.DeliveryInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin( value = {"http://192.168.1.114:3000", "http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("api/v1.0/delivery")
public class DeliveryInfoController {

    DeliveryInfoService deliveryInfoService;

    public DeliveryInfoController(DeliveryInfoService deliveryInfoService) {
        this.deliveryInfoService = deliveryInfoService;
    }

    @GetMapping("/settlements")
    public ResponseEntity<List<CitiesData>> getCities(@RequestParam String query){
        return new ResponseEntity<>(deliveryInfoService.findCities(query),
                HttpStatus.OK);
    }

    @GetMapping("/warehouses")
    public ResponseEntity<List<WhData>> getWarehouses(@RequestParam String cityDescription){
        return new ResponseEntity<>(deliveryInfoService.findWarehouses(cityDescription),
                HttpStatus.OK);
    }

    @GetMapping("/userinfo")
    public ResponseEntity<Users> getDeliveryInfo(@RequestParam String userName){

        return new ResponseEntity<>(deliveryInfoService.fetchUserData(userName), HttpStatus.OK);
    }

}
