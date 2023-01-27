package com.example.foodapp.Repository;

import com.example.foodapp.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();
    Optional<User> findByName(String name);
    User findByMail(String mail);
}
