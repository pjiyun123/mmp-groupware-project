package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Authorization;
import com.team4.groupwareproject.domain.Dept;
import com.team4.groupwareproject.domain.Rank;
import com.team4.groupwareproject.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserId(Long userId);

}
