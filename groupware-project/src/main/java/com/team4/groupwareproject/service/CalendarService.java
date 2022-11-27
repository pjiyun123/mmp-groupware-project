package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Calendar;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.CalendarRepository;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarService {

    private final CalendarRepository calRepo;
    private final UserRepository uRepo;

    // 일정 목록 조회
    public List<Calendar> getCalList() {
        List<Calendar> calList = calRepo.findAll();
        return calList;
    }

    // 일정 상세 조회
    public Calendar getCalDetail(Long calNo) {
        Calendar cal = calRepo.findByCalNo(calNo);
        return cal;
    }

    // 일정 등록
    public Calendar addCalendar(Long userNo, Calendar cal) {
        User user = uRepo.findByUserNo(userNo);
        Calendar newCal = Calendar.builder()
                .ctNo(cal.getCtNo())
                .userNo(userNo)
                .userNm(user.getUserNm())
                .calTit(cal.getCalTit())
                .calContent(cal.getCalContent())
                .calDate(cal.getCalDate())
                .calStartTime(cal.getCalStartTime())
                .calEndTime(cal.getCalEndTime())
                .calPlace(cal.getCalPlace())
                .calMajor(cal.getCalMajor())
                .createDt(LocalDateTime.now())
                .build();

        calRepo.save(newCal);
        return newCal;
    }

    // 일정 수정
    public Calendar updateCalendar(Long userNo, Long calNo, Calendar cal) {
        Calendar tempCal = calRepo.findByCalNo(calNo);

        tempCal.setUpdateDt(LocalDateTime.now());
        if(cal.getCtNo() != null)
            tempCal.setCtNo(cal.getCtNo());
        if(cal.getCalTit() != null)
            tempCal.setCalTit(cal.getCalTit());
        if(cal.getCalContent() != null)
            tempCal.setCalContent(cal.getCalContent());
        if(cal.getCalDate() != null)
            tempCal.setCalDate(cal.getCalDate());
        if(cal.getCalStartTime() != null)
            tempCal.setCalStartTime(cal.getCalStartTime());
        if(cal.getCalEndTime() != null)
            tempCal.setCalEndTime(cal.getCalEndTime());
        if(cal.getCalPlace() != null)
            tempCal.setCalPlace(cal.getCalPlace());
        if(cal.getCalMajor() != null)
            tempCal.setCalMajor(cal.getCalMajor());

        Calendar updatedCal = calRepo.save(tempCal);
        return updatedCal;
    }

    //일정 삭제
    public void deleteCalendar(Long calNo) {
        calRepo.deleteById(calNo);
    }

}
