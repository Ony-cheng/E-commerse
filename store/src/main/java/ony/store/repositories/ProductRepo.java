package ony.store.repositories;

import ony.store.entities.Category;
import ony.store.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p where upper(p.name) like upper(concat('%', ?1,'%'))")
    List<Product> searchByName(String query);

    @Query("SELECT p FROM Product p where upper(p.name) like upper(concat('%', ?1,'%')) and p.category= ?2")
    List<Product> searchByNameInCategory(String query, Category category);

    List<Product> findTop10ByOrderByIdDesc();

    @Modifying
    @Transactional
    @Query("update Product p set p.rating = :rating where p.id = :id")
    void updateRatingById(@Param("id") int id, @Param("rating") float newRating);



}
