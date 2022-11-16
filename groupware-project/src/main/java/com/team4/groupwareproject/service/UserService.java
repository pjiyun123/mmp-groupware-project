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

    public Long createUser(User user) {
        userRepository.save(user);
        return user.getUserId();
    }

    public User updateUserByUserId(Long userId, User user){
        User tempUser = userRepository.findByUserId(userId);

        //TODO: 권한 설정
        tempUser.setDept(user.getDept());
        tempUser.setAuthorization(tempUser.getAuthorization());
        tempUser.setRank(tempUser.getRank());
        tempUser.setUserName(user.getUserName());
        tempUser.setPassword(user.getPassword());
        tempUser.setBirthDate(user.getBirthDate());
        tempUser.setPhone(user.getPhone());
        tempUser.setEmail(user.getEmail());
        tempUser.setPicture(user.getPicture());
        tempUser.setUpdateAt(LocalDateTime.now());

        User updatedUser = userRepository.save(tempUser);

        return updatedUser;
    }

    public void deleteUserByUserId(Long userId) {
        userRepository.deleteById(userId);
    }

}
