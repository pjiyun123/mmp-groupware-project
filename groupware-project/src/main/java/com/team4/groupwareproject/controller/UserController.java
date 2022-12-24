package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.service.UserService;
import com.team4.groupwareproject.util.CryptoUtil;
import com.team4.groupwareproject.util.SessionUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3030")
@CrossOrigin(origins = "http://localhost:3030, https://simmpleware.netlify.app/")
public class UserController {

    private final UserService uServ;

    // 회원 목록 조회
    @GetMapping("/users/list")
    public List<User> list() {
        return uServ.getUserList();
    }

    // 회원 상세 조회
    @GetMapping("/users/{userNo}")
    public User detail(@PathVariable("userNo") Long userNo) {
        User user = uServ.getUserDetail(userNo);
        return user;
    }

    // 회원 등록
    @PostMapping("/users")
    public User add(@RequestBody User user) {
        User newUser = uServ.addUser(user);
        return newUser;
    }

    // 회원정보 삭제
    @DeleteMapping("/users/{userNo}")
    public List<User> delete(@PathVariable("userNo") Long userNo) {
        uServ.deleteUser(userNo);
        return uServ.getUserList();
    }

    // 회원정보 수정
    @PatchMapping("/users/{userNo}")
    public User edit(@PathVariable("userNo") Long userNo, @RequestBody User user){
        User updatedUser = uServ.updateUser(userNo, user);
        return updatedUser;
    }

}
