package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Calendar;
import com.team4.groupwareproject.domain.User;
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

    public Calendar updateCalByCalId(User user, Long calId, Calendar calendar) {
        Calendar tempCal = calendarRepository.findByCalId(calId);

        tempCal.setUser(user);
        tempCal.setCalCategory(calendar.getCalCategory());
        tempCal.setTitle(calendar.getTitle());
        tempCal.setContent(calendar.getContent());
        tempCal.setCalDate(calendar.getCalDate());
        tempCal.setCalStartTime(calendar.getCalStartTime());
        tempCal.setCalEndTime(calendar.getCalEndTime());
        tempCal.setCalPlace(calendar.getCalPlace());
        tempCal.setMajorYn(calendar.getMajorYn());

        Calendar updatedCal = calendarRepository.save(tempCal);
        return updatedCal;
    }

    public void deleteCalByCalId(Long calId) {
        calendarRepository.deleteById(calId);
    }

}
