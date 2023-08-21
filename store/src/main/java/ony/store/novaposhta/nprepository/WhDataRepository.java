package ony.store.novaposhta.nprepository;


import ony.store.novaposhta.mapping.CitiesData;
import ony.store.novaposhta.mapping.WhData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface WhDataRepository extends JpaRepository<WhData, String > {


   @Query("SELECT w FROM WhData w where upper(w.CityDescription) like upper(concat('%', ?1,'%'))")
   List<WhData> searchByName(String query);

}
