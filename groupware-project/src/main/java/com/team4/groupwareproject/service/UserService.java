package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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

    /*
    public User updateUserById(Long userId){
        User user = userRepository.findByUserId(userId);
        user.setUserName("잉잉");
        user.setUpdateAt(LocalDateTime.now());

        User updatedUser = userRepository.save(user); //확실하지 않아요 함수 다시찾기
        return updatedUser;
    }
    */

}
