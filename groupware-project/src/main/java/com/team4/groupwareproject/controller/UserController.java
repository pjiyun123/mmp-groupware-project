package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    private UserService userService;

    //user 리스트 읽기
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    //userId로 user 읽기
    @GetMapping("/users/{userId}")
    public User getUserByUserId(@PathVariable("userId") Long userId) {
        return userService.getUserByUserId(userId);
    }

}
