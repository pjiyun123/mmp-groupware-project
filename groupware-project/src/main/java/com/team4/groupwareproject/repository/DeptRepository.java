package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Dept;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeptRepository extends JpaRepository<Dept, Long> {
    Dept findByDeptNo(Long deptNo);
}
