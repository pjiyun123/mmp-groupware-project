package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    public static List<User> users;

    static {
        users = new ArrayList<>();
        users.add(new User(1L, "홍길동", "1234", LocalDate.of(1990,11,9), "010-1111-1111", "honggildong@gmail.com", "picture"));
        System.out.println(users);
    }

    public List<User> getUsers() {
        return this.users;
    }
}
