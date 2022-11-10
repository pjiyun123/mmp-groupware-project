package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public List<User> getUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    public User getUserByUserId(Long userId) {
        return userRepository.findByUserId(userId);
    }

}
