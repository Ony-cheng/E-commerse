package ony.store.services;

import ony.store.entities.Review;
import ony.store.entities.Users;
import ony.store.repositories.ProductRepo;
import ony.store.repositories.ReviewsRepository;
import ony.store.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ReviewService {
    ReviewsRepository repository;

    UsersRepository usersRepository;

    ProductRepo productRepo;

    @Autowired
    public ReviewService(ReviewsRepository repository, UsersRepository usersRepository, ProductRepo productRepo) {
        this.repository = repository;
        this.usersRepository = usersRepository;
        this.productRepo = productRepo;
    }

    public List<Review> getByProduct(String id){
        return repository.findByProductIdOrderByDateDesc(Integer.parseInt(id));
    }

    public void create(Review review){
        System.out.println(review.toString());
        usersRepository.save(review.getUsers());
        review.setDate(new Date());
        repository.save(review);
        updateProductRating(review.getProduct().getId());
    }
    public void updateProductRating(int productId){

        List<Byte> ratings = repository.findRatings();
        int integral=0;
        for(float rating : ratings){
            integral+=rating;
        }
        float updatedRating = integral  / ratings.size();
        productRepo.updateRatingById(productId, updatedRating);
    }
}
