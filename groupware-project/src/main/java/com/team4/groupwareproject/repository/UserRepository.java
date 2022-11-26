package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserNo(Long userNo);
}
