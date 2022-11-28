package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Approver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApproverRepository extends JpaRepository<Approver, Long> {
    Approver findByApNo(Long apNo);
}
