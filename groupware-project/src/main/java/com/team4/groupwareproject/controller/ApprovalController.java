package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Approval;
import com.team4.groupwareproject.service.ApprovalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3030")
public class ApprovalController {

    private final ApprovalService avlServ;

    // 결재문서 목록 조회
    @GetMapping("/approval/list")
    public List<Approval> list() {
        List<Approval> avlList = avlServ.getApprovalList();
        return avlList;
    }

}
