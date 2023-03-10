package ony.store.services;


import ony.store.entities.SpecificParams;
import ony.store.entities.Values;
import ony.store.repositories.ValuesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ValuesService {

    ValuesRepository repository;
    @Autowired
    public ValuesService(ValuesRepository repository) {
        this.repository = repository;
    }

    public List<Values> getValues(String parameter){
        SpecificParams params = new SpecificParams();
        params.setParameter(parameter);
        return repository.findBySpecificParams(params);
    }
    public List<Values> findByProduct(String id){

        return repository.findByProductId(Integer.parseInt(id));
    }


}
