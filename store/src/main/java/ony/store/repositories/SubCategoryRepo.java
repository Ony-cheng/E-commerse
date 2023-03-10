package ony.store.repositories;

import ony.store.entities.Category;
import ony.store.entities.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubCategoryRepo extends JpaRepository<SubCategory, String> {
    public List<SubCategory> findByCategory(Category category);
}
