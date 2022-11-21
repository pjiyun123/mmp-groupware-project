package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Calendar;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.CalendarRepository;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CalendarController {

    private final CalendarService calendarService;
    private final CalendarRepository calendarRepository;
    private final UserRepository userRepository;

    //전체 일정 읽기
    @GetMapping("/calendar")
    public List<Calendar> getAllCalendar() {
        return calendarService.getCalendars();
    }

    //calId로 일정 읽기
    @GetMapping("/calendar/{calId}")
    public Calendar getCalByCalId(@PathVariable Long calId) {
        return calendarService.getCalByCalId(calId);
    }

    //일정 등록 페이지
    @GetMapping("/calendar/createForm")
    public String createCalendarForm() {
        return "/calendar/createCalendarForm";
    }

    //일정 등록 처리
    @PostMapping("/calendar/create/{userId}")
    public Calendar createCalendar(@PathVariable Long userId, @RequestBody Calendar calendar) {
        User user = userRepository.findByUserId(userId);
        Calendar newCalendar = new Calendar(
                calendar.getCalId(),
                user,
                calendar.getCalCategory(),
                calendar.getTitle(),
                calendar.getContent(),
                calendar.getCalDate(),
                calendar.getCalStartTime(),
                calendar.getCalEndTime(),
                calendar.getCalPlace(),
                calendar.getMajorYn()
        );
        calendarRepository.save(newCalendar);

        return newCalendar;
    }

}
