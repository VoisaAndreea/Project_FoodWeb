package com.example.foodapp.Repository;

import com.example.foodapp.Models.Recipes;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RecipesRepository extends MongoRepository<Recipes, String> {

    List<Recipes> findByTitle(String title);
    Optional<Recipes> deleteByTitle(String title);
    Optional<Recipes> findRecipesByTitle(String title);







}
