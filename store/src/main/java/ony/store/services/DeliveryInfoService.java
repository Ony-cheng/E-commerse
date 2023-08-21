package ony.store.services;

import ony.store.entities.DeliveryInfo;
import ony.store.entities.Product;
import ony.store.entities.Users;
import ony.store.novaposhta.mapping.CitiesData;
import ony.store.novaposhta.mapping.WhData;
import ony.store.novaposhta.nprepository.CitiesDataRepository;
import ony.store.novaposhta.nprepository.WhDataRepository;
import ony.store.repositories.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryInfoService {

    CitiesDataRepository citiesRepository;

    WhDataRepository whDataRepository;

    UsersRepository usersRepository;

    public DeliveryInfoService(CitiesDataRepository citiesRepository, WhDataRepository whDataRepository, UsersRepository usersRepository) {
        this.citiesRepository = citiesRepository;
        this.whDataRepository = whDataRepository;
        this.usersRepository = usersRepository;
    }

    public List<CitiesData> findCities(String query){
        if(query.isEmpty()){
            return new ArrayList<CitiesData>();
        }
        return citiesRepository.searchByName(query);
    }

    public List<WhData> findWarehouses(String cityDescription){
        if(cityDescription.isEmpty()){
            return new ArrayList<WhData>();
        }
        return whDataRepository.searchByName(cityDescription);
    }
    public Users fetchUserData(String userName){
        return usersRepository.findByUsername(userName).orElse(new Users());
    }

}
