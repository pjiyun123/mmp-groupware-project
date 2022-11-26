package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Job;
import com.team4.groupwareproject.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jRepo;

    // 직급 목록 조회
    public List<Job> getJobList(){
        List<Job> jobList = jRepo.findAll();
        return jobList;
    }

    // 직급 상세 조회
    public Job getJobDetail(Long jobNo) {
        Job job = jRepo.findByJobNo(jobNo);
        return job;
    }

    // 직급 등록
    public Job addJob(Job job) {
        Job newJob = Job.builder()
                .jobNm(job.getJobNm())
                .createDt(LocalDateTime.now())
                .build();

        jRepo.save(newJob);
        return newJob;
    }

    // 직급 삭제
    public void deleteJob(Long jobNo){
        jRepo.deleteById(jobNo);
    }

    // 직급 수정
    public Job editJob(Long jobNo, Job job){
        Job tempJob = jRepo.findByJobNo(jobNo);

        tempJob.setUpdateDt(LocalDateTime.now());
        if(job.getJobNm() != null)
            tempJob.setJobNm(job.getJobNm());

        Job updatedJob = jRepo.save(tempJob);
        return updatedJob;
    }

}
