package ony.store.repositories;

import ony.store.entities.Cart;
import ony.store.entities.Cart2;
import ony.store.entities.Product;
import ony.store.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Cart2Repository extends JpaRepository<Cart2, Integer> {

//    Optional<Cart2> findByUsersId(int userId);
    Optional<Cart2> findByUsersId(int usersId);
    Optional<Cart2> findByUsers(Users user);
//    //    @Transactional
//    @Modifying
//    @Query("UPDATE Cart c SET c.products = :products WHERE c.id = :cartId")
//    void addProductToCart(@Param("cartId") int cartId, @Param("products") List<Product> products);
}