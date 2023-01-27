package com.example.foodapp.Controller;


import com.example.foodapp.Models.Recipes;
import com.example.foodapp.Repository.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecipesController {

    @Autowired
    RecipesRepository recipesRepository;


    @CrossOrigin("http://localhost:3000")
    @GetMapping("/view-all-recipes")
    public ResponseEntity<Object> getRecipe(){
        return new ResponseEntity<>(recipesRepository.findAll().stream().map(r -> new Recipes(r.getId(), r.getTitle(), r.getImage(), r.getIngredients(),r.getInstructions())), HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/add-recipe")
    public Recipes addRecipes(@RequestBody Recipes recipe) {
       // recipe.setId(UUID.randomUUID().toString());
        return recipesRepository.save(recipe);
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/view-all-recipes/recipe/{title}")
    public ResponseEntity<Object> getRecipe(@PathVariable("title") String title) {
        return new ResponseEntity<>(recipesRepository.findByTitle(title), HttpStatus.OK);
    }

    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/view-all-recipes/recipe/delete/{title}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteRecipe(@PathVariable("title") String title) {
        recipesRepository.deleteByTitle(title);
        return new ResponseEntity<>("The recipe was deleted with success", HttpStatus.OK);
    }


    @PutMapping ( "/view-all-recipes/recipe/update/{title}")
    public ResponseEntity<Object> updateRecipe(@PathVariable("title") String title, @RequestBody Recipes recipes) {
        recipesRepository.findRecipesByTitle(title).ifPresent(r -> {
            r.setId(recipes.getId());
            r.setTitle(recipes.getTitle());
            r.setImage(recipes.getImage());
            r.setExtendedIngredients(recipes.getIngredients());
            r.setInstructions(recipes.getInstructions());
            recipesRepository.save(r);
        });
        return new ResponseEntity<>("Recipe updated", HttpStatus.OK);
    }

}
