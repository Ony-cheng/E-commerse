package ony.store.repositories;

import ony.store.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepository extends JpaRepository<Review, Integer> {

    public List<Review> findByProductIdOrderByDateDesc(int id);

    @Query("SELECT p.rating FROM Review p")
    List<Byte> findRatings();
}
