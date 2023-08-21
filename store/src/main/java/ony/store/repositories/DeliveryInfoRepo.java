package ony.store.repositories;

import ony.store.entities.DeliveryInfo;
import org.springframework.data.jpa.repository.JpaRepository;



public interface DeliveryInfoRepo extends JpaRepository<DeliveryInfo, Integer> {

}
