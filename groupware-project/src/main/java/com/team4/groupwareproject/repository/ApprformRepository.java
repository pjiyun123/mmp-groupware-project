package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Apprform;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprformRepository extends JpaRepository<Apprform, Long> {
    Apprform findByAfNo(Long afNo);
}
