package ony.store.novaposhta.nprepository;


import ony.store.entities.Product;
import ony.store.novaposhta.mapping.CitiesData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CitiesDataRepository extends JpaRepository<CitiesData, String> {

    @Query("SELECT c FROM CitiesData c where upper(c.description) like upper(concat( ?1,'%'))")
    List<CitiesData> searchByName(String query);
}
