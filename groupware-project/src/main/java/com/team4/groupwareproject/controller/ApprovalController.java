package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Approval;
import com.team4.groupwareproject.domain.Approver;
import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.service.ApprovalService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3030")
public class ApprovalController {

    private final ApprovalService avlServ;
    private final AttachmentRepository atcRepo;

    // 결재문서 목록 조회
    @GetMapping("/approval/list")
    public List<Approval> list() {
        List<Approval> avlList = avlServ.getApprovalList();
        return avlList;
    }

    // 결재문서 등록
    @PostMapping("/approval/{userNo}")
    public Approval add(@PathVariable Long userNo, @RequestPart("avl") Approval approval, @RequestPart("files") List<MultipartFile> files) throws IOException {
        Approval newAvl = avlServ.addApproval(userNo, approval, files);
        return newAvl;
    }

    // 결재문서 상세 조회
    @GetMapping("/approval/{avlNo}")
    public Approval detail(@PathVariable Long avlNo) {
        Approval avl = avlServ.getDetailApproval(avlNo);
        return avl;
    }

    // 결재문서 상세 파일정보 조회
    @GetMapping("/approval/{avlNo}/atc")
    public List<Attachment> detailAtc(@PathVariable Long avlNo) {
        List<Attachment> avlFiles = avlServ.getApprovalFiles(avlNo);
        return avlFiles;
    }

    // 결재문서 상세 파일 다운로드
    @GetMapping("/approval/{avlNo}/atc/{atcNo}/download")
    public String download(@PathVariable Long avlNo, @PathVariable Long atcNo) {
        String mmpUrl = "https://360map.co.kr/groupware/";
        String ftpName = atcRepo.findByAtcNo(atcNo).getAtcFtpName();
        return mmpUrl + ftpName;
    }

    // 결재문서 수정
    @PatchMapping("/approval/{userNo}/{avlNo}")
    public Approval edit(@PathVariable Long userNo, @PathVariable Long avlNo, @RequestPart("avl") Approval avl, @RequestPart("files") List<MultipartFile> files) throws IOException {
        Approval updatedAvl = avlServ.updateApproval(userNo, avlNo, avl, files);
        return updatedAvl;
    }

    // 결재문서 삭제
    @DeleteMapping("/approval/{avlNo}")
    public List<Approval> delete(@PathVariable Long avlNo) {
        avlServ.deleteApproval(avlNo);
        return avlServ.getApprovalList();
    }

}
