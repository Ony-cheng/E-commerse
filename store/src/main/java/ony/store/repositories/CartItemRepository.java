package ony.store.repositories;

import ony.store.entities.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface CartItemRepository extends JpaRepository< CartItem, Integer> {
@Transactional
        @Modifying
        @Query("UPDATE CartItem c SET c.quantity = :quantity WHERE c.id = :cartItemId")
        void updateQty(@Param("cartItemId") int cartItemId,
                       @Param("quantity") int quantity);



}
