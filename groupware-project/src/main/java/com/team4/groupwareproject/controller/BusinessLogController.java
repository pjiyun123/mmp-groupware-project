package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.BusinessLog;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.BusinessLogRepository;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.service.BusinessLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BusinessLogController {

    private final BusinessLogService businessLogService;
    private final BusinessLogRepository businessLogRepository;
    private final UserRepository userRepository;

    //업무일지 리스트 읽기
    @GetMapping("/businessLogs")
    public List<BusinessLog> getAllBusinessLogs() {
        return businessLogService.getBusinessLogs();
    }

    //businessLogId로 businessLog 읽기
    @GetMapping("/businessLogs/{businessLogId}")
    public BusinessLog getBusinessLogByBusinessLogId(@PathVariable Long businessLogId) {
        return businessLogService.getBusinessLogByBusinessLogId(businessLogId);
    }

    //업무일지 등록 페이지
    @GetMapping("/businessLogs/createForm")
    public String createBusinessLogsForm() {
        return "/businessLogs/createBusinessLogForm";
    }

    //업무일지 등록 처리
    @PostMapping("/businessLogs/create/{userId}")
    public BusinessLog createBusinessLog(@PathVariable("userId") Long userId, @RequestBody BusinessLog businessLog) {
        User user = userRepository.findByUserId(userId);
        BusinessLog newBusinessLog = new BusinessLog(
                businessLog.getBusinessLogId(),
                user,
                businessLog.getTitle(),
                businessLog.getContent()
        );
        businessLogRepository.save(newBusinessLog);

        return newBusinessLog;
    }

    //업무일지 수정 페이지
    @GetMapping("/businessLogs/updateForm/{businessLogId}")
    public String updateBusinessLogsForm(@PathVariable("businessLogId") Long businessLogId, Model model) {
        model.addAttribute("businessLog", businessLogService.getBusinessLogByBusinessLogId(businessLogId));
        return "/businessLogs/updateBusinessLogForm";
    }

    //businessId로 업무일지 수정 처리
    @PatchMapping("/businessLogs/{userId}/update/{businessLogId}")
    public BusinessLog updateBusinessLogByBusinessLogId(@PathVariable("userId") Long userId, @PathVariable("businessLogId") Long businessLogId, @RequestBody BusinessLog businessLog) {
        User user = userRepository.findByUserId(userId);
        return businessLogService.updateBusinessLogByBusinessLogId(user, businessLogId, businessLog);
    }

    //businessId로 업무일지 삭제
    @DeleteMapping("/businessLogs/delete/{businessLogId}")
    public List<BusinessLog> deleteBusinessLogByBusinessLogId(@PathVariable("businessLogId") Long businessLogId) {
        businessLogService.deleteBusinessLogByBusinessLogId(businessLogId);
        return businessLogService.getBusinessLogs();
    }

}
