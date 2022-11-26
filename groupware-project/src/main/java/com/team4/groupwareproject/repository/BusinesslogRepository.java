package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Businesslog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinesslogRepository extends JpaRepository<Businesslog, Long> {
    Businesslog findByBlNo(Long blNo);
}
