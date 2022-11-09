package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.getUsers();
    }

}
