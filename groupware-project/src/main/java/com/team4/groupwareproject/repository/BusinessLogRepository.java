package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.BusinessLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessLogRepository extends JpaRepository<BusinessLog, Long> {
    BusinessLog findByBusinessLogId(Long businessLogId);
}
