package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.BusinessLog;
import com.team4.groupwareproject.repository.BusinessLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BusinessLogService {

    @Autowired
    private final BusinessLogRepository businessLogRepository;

    public List<BusinessLog> getBusinessLogs() {
        List<BusinessLog> businessLogs = businessLogRepository.findAll();
        return businessLogs;
    }

    public BusinessLog getBusinessLogByBusinessLogId(Long businessLogId){
        return businessLogRepository.findByBusinessLogId(businessLogId);
    }

}
