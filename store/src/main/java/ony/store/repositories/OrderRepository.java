package ony.store.repositories;

import ony.store.entities.PurchaseOrder;
import ony.store.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<PurchaseOrder, Integer> {

    public List<PurchaseOrder> getOrdersByUsers(Users user);

}
