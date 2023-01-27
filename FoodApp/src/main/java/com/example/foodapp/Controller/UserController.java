package com.example.foodapp.Controller;

import com.example.foodapp.Models.Login;
import com.example.foodapp.Models.MyUserDetails;
import com.example.foodapp.Models.User;
import com.example.foodapp.Repository.UserRepository;
import com.example.foodapp.Security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/")
public class UserController {


    private final PasswordEncoder passwordEncoder;

    final UserRepository userRepository;

    public UserController(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<Object> getUsers() {
        return new ResponseEntity<>(userRepository.findAll().stream().map(u -> new User(u.getId(), u.getName(), u.getMail(), u.getPassword())), HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getUser(@PathVariable("id") String id) {
        return new ResponseEntity<>(userRepository.findById(id).map(u -> new User(u.getId(), u.getName(), u.getMail(), u.getPassword())).orElse(null), HttpStatus.OK);
    }

    @RequestMapping(value = "/create-user", method = RequestMethod.POST)
    public ResponseEntity<Object> createUser(@RequestBody User user) {
        user.setName(user.getName());
        user.setMail(user.getMail());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<>("User created", HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateUser(@PathVariable("id") String id, @RequestBody User user) {
        userRepository.findById(id).ifPresent(u -> {
           u.setName(user.getName());
           u.setMail(user.getMail());
            userRepository.save(u);
        });
        return new ResponseEntity<>("User updated", HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteUser(@PathVariable("id") String id) {
       userRepository.deleteById(id);
        return new ResponseEntity<>("The user was deleted with success", HttpStatus.OK);
    }
}
