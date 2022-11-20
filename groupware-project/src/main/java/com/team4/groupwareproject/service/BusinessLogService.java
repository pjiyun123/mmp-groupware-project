package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.BusinessLog;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.BusinessLogRepository;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BusinessLogService {

    @Autowired
    private final BusinessLogRepository businessLogRepository;
    @Autowired
    private final UserRepository userRepository;

    public List<BusinessLog> getBusinessLogs() {
        List<BusinessLog> businessLogs = businessLogRepository.findAll();
        return businessLogs;
    }

    public BusinessLog getBusinessLogByBusinessLogId(Long businessLogId){
        return businessLogRepository.findByBusinessLogId(businessLogId);
    }

    public BusinessLog updateBusinessLogByBusinessLogId(User user, Long businessLogId, BusinessLog businessLog) {
        BusinessLog tempBusinessLog = businessLogRepository.findByBusinessLogId(businessLogId);

        tempBusinessLog.setUser(user);
        tempBusinessLog.setTitle(businessLog.getTitle());
        tempBusinessLog.setContent(businessLog.getContent());

        BusinessLog updatedBusinessLog = businessLogRepository.save(tempBusinessLog);

        return updatedBusinessLog;
    }

    public void deleteBusinessLogByBusinessLogId(Long businsessLogId) {
        businessLogRepository.deleteById(businsessLogId);
    }

}
