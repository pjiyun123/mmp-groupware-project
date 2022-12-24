package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Approver;
import com.team4.groupwareproject.service.ApproverService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3030")
@CrossOrigin(origins = "http://localhost:3030, https://simmpleware.netlify.app/")
public class ApproverController {

    private final ApproverService apServ;

    // 결재자 목록 조회
    @GetMapping("/approver/list")
    public List<Approver> list() {
        List<Approver> apList = apServ.getApproverList();
        return apList;
    }

    // 결재자 상세 조회
    @GetMapping("/approver/{apNo}")
    public Approver detail(@PathVariable Long apNo) {
        Approver ap = apServ.getApproverDetail(apNo);
        return ap;
    }

    // 결재자 등록
    @PostMapping("/approver/{userNo}")
    public Approver add(@PathVariable Long userNo, @RequestBody Approver approver) {
        Approver newAp = apServ.addApprover(userNo, approver);
        return newAp;
    }

    // 결재자 삭제
    @DeleteMapping("/approver/{apNo}")
    public List<Approver> delete(@PathVariable Long apNo) {
        apServ.deleteApprover(apNo);
        return apServ.getApproverList();
    }

}
