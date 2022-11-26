package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Job;
import com.team4.groupwareproject.service.JobService;
import com.team4.groupwareproject.util.FileUtil;
import com.team4.groupwareproject.util.SessionUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
@RequiredArgsConstructor
public class JobController {

    private final SessionUtil sess;
    private final FileUtil fileutil;

    private final JobService jServ;

    // 직급 목록 조회
    @GetMapping("/job/list")
    public List<Job> list() {
        List<Job> jobList = jServ.getJobList();
        return jobList;
    }

    // 직급 상세 조회
    @GetMapping("/job/{jobNo}")
    public Job detail(@PathVariable Long jobNo) {
        Job job = jServ.getJobDetail(jobNo);
        return job;
    }

    // 직급 등록
    @PostMapping("/job")
    public Job add(@RequestBody Job job) {
        Job newJob = jServ.addJob(job);
        return newJob;
    }

    // 직급 삭제
    @DeleteMapping("/job/{jobNo}")
    public List<Job> delete(@PathVariable Long jobNo){
        jServ.deleteJob(jobNo);
        return jServ.getJobList();
    }

    // 직급 수정
    @PatchMapping("/job/{jobNo}")
    public Job edit(@PathVariable Long jobNo, @RequestBody Job job){
        Job updatedJob = jServ.editJob(jobNo, job);
        return updatedJob;
    }

}
