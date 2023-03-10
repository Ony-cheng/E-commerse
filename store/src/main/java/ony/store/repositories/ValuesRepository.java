package ony.store.repositories;

import ony.store.entities.SpecificParams;
import ony.store.entities.Values;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ValuesRepository extends JpaRepository<Values,Integer> {

    List<Values> findBySpecificParams(SpecificParams specificParams);

    List<Values> findByProductId(int id);


}
