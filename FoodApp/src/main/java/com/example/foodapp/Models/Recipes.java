package com.example.foodapp.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;


@Document("recipes")
public class Recipes {

    private String id;
    private String title, image, instructions;
    private ArrayList<String> extendedIngredients = new ArrayList<>();


    public Recipes(String _id, String title, String image, ArrayList<String> extendedIngredients, String instructions) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.extendedIngredients = extendedIngredients;
        this.instructions = instructions;
    }

    public Recipes(String title, String image, ArrayList<String> extendedIngredients, String instructions) {
        this.title = title;
        this.image = image;
        this.extendedIngredients = extendedIngredients;
        this.instructions = instructions;
    }

    public Recipes() {

    }

    @MongoId
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ArrayList<String> getIngredients() {
        return extendedIngredients;
    }

    public void setExtendedIngredients(ArrayList<String> extendedIngredients) {
        this.extendedIngredients = extendedIngredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }


    @Override
    public String toString() {
        return "\n{" +
                "\nId:'" + id + '\'' +
                "\nTitle:'" + title + '\'' +
                ", \nImage:'" + image + '\'' +
                ", \nExtendedIngredients:" + extendedIngredients +
                ", \nInstructions:'" + instructions + '\'' +
                '}';
    }
}
