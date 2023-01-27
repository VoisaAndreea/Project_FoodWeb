package com.example.foodapp;


import com.example.foodapp.Repository.RecipesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@EnableMongoRepositories
public class FoodAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(FoodAppApplication.class, args);
    }

    @RequestMapping(value = "/")
    public String hello(){
        return"Hello World";
    }

    @Bean
    public CommandLineRunner recipeTest(RecipesRepository recipesRepository) {
        return (args) -> {
            System.out.println("Recipes found with findAll():");

            System.out.println("---------------------------");
            System.out.println();
        };
    }

}
