package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {
    Calendar findByCalNo(Long calNo);
}
