package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
    Job findByJobNo(Long jobNo);
}
