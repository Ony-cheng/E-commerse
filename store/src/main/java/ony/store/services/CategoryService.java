package ony.store.services;

import ony.store.entities.Category;
import ony.store.entities.SubCategory;
import ony.store.repositories.CategoryRepo;
import ony.store.repositories.SubCategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo repository;

    @Autowired
    SubCategoryRepo subCategoryRepo;

    public List<Category> getAll(){
        return repository.findAll();
    }

    public List<SubCategory> getSub(String category){
        Category categoryType = new Category();
        categoryType.setCategory(category);
        return subCategoryRepo.findByCategory(categoryType);
    }

}
