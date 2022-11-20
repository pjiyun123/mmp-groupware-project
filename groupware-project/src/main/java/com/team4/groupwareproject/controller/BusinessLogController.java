package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.BusinessLog;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.BusinessLogRepository;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.service.BusinessLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
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

}
