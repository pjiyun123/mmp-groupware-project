package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Calendar;
import com.team4.groupwareproject.repository.CalendarRepository;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CalendarService {

    @Autowired
    private final CalendarRepository calendarRepository;
    @Autowired
    private final UserRepository userRepository;

    public List<Calendar> getCalendars() {
        List<Calendar> calendars = calendarRepository.findAll();
        return calendars;
    }

    public Calendar getCalByCalId(Long calId) {
        return calendarRepository.findByCalId(calId);
    }

}
