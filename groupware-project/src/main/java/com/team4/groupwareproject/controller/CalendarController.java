package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Calendar;
import com.team4.groupwareproject.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class CalendarController {

    private final CalendarService calServ;

    // 일정 목록 조회
    @GetMapping("/calendar/list")
    public List<Calendar> list() {
        List<Calendar> calList = calServ.getCalList();
        return calList;
    }

    // 일정 상세 조회
    @GetMapping("/calendar/{calNo}")
    public Calendar detail(@PathVariable Long calNo) {
        Calendar cal = calServ.getCalDetail(calNo);
        return cal;
    }

    // 일정 등록
    @PostMapping("/calendar/{userNo}")
    public Calendar add(@PathVariable Long userNo, @RequestBody Calendar cal) {
        Calendar newCal = calServ.addCalendar(userNo, cal);
        return newCal;
    }

    // 일정 수정
    @PatchMapping("/calendar/{userNo}/{calNo}")
    public Calendar edit(@PathVariable Long userNo, @PathVariable Long calNo, @RequestBody Calendar cal) {
        Calendar updatedCal = calServ.updateCalendar(userNo, calNo, cal);
        return updatedCal;
    }

    // 일정 삭제
    @DeleteMapping("/calendar/{calNo}")
    public List<Calendar> delete(@PathVariable Long calNo) {
        calServ.deleteCalendar(calNo);
        return calServ.getCalList();
    }

}
