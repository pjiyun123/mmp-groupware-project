package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Approval;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprovalRepository extends JpaRepository<Approval, Long> {
    Approval findByAvlNo(Long avlNo);
}
