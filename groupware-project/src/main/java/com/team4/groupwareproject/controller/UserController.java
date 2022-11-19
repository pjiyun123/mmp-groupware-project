package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    //user 리스트 읽기
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    //userId로 user 정보 읽기 - user 정보 상세페이지
    @GetMapping("/users/{userId}")
    public User getUserByUserId(@PathVariable("userId") Long userId) {
        return userService.getUserByUserId(userId);
    }

    //User 정보 등록 페이지 - 운영자
    @GetMapping("/users/createForm")
    public String createUsersForm(){
        return "/users/createUserForm";
    }

    //User 정보 등록 처리 - 운영자
    @PostMapping("/users/create")
    public User createUser(@RequestBody User user) throws ParseException{
        User newUser = new User(
                user.getUserId(),
                user.getDeptId(),
                user.getAuthorizationId(),
                user.getRankId(),
                user.getUserName(),
                user.getPassword(),
                user.getBirthDate(),
                user.getPhone(),
                user.getEmail(),
                user.getPicture()
        );
        userRepository.save(newUser);
        //userService.createUser(user);

        return newUser;
    }

    //user 정보 수정 페이지
    @GetMapping("/users/updateForm/{userid}")
    public String updateUsersForm(@PathVariable("userId") Long userId, Model model) {
        model.addAttribute("user", userService.getUserByUserId(userId));
        return "/users/updateUserForm";
    }

    //userId로 user 정보 수정 처리
    @PatchMapping("/users/update/{userId}")
    public User updateUserByUserId(@PathVariable("userId") Long userId, @RequestBody User user) {
        return userService.updateUserByUserId(userId, user);
    }

    //userId로 user 정보 삭제
    @DeleteMapping("/users/delete/{userId}")
    public List<User> deleteUserByUserId(@PathVariable("userId") Long userId) {
        userService.deleteUserByUserId(userId);
        return userService.getUsers();
    }

}
