package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Apprform;
import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.service.ApprformService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3030")
public class ApprformController {

    private final ApprformService afServ;
    private final AttachmentRepository atcRepo;

    // 결재 양식 목록 조회
    @GetMapping("/apprform/list")
    public List<Apprform> list() {
        List<Apprform> afList = afServ.getApprformList();
        return afList;
    }

    // 결재 양식 등록
    @PostMapping("/apprform/{userNo}")
    public Apprform add(@PathVariable Long userNo, @RequestPart("af") Apprform af, @RequestPart("files") List<MultipartFile> files) throws IOException {
        Apprform newAf = afServ.addApprform(userNo, af, files);
        return newAf;
    }

    // 결재 양식 상세 조회
    @GetMapping("/apprform/{afNo}")
    public Apprform detail(@PathVariable Long afNo) {
        Apprform af = afServ.getDetailApprform(afNo);
        return af;
    }

    // 결재 양식 상세 파일 정보 조회
    @GetMapping("/apprform/{afNo}/atc")
    public List<Attachment> detailAtc(@PathVariable Long afNo) {
        List<Attachment> afFiles = afServ.getApprformFiles(afNo);
        return afFiles;
    }

    // 결재문서 상세 파일 다운로드
    @GetMapping("/apprform/{afNo}/atc/{atcNo}/download")
    public String download(@PathVariable Long afNo, @PathVariable Long atcNo) {
        String mmpUrl = "https://360map.co.kr/groupware/apprform/";
        String ftpName = atcRepo.findByAtcNo(atcNo).getAtcFtpName();
        return mmpUrl + ftpName;
    }

    // 결재 양식 수정
    @PatchMapping("/apprform/{userNo}/{afNo}")
    public Apprform edit(@PathVariable Long userNo, @PathVariable Long afNo, @RequestPart("af") Apprform af, @RequestPart("files") List<MultipartFile> files) throws IOException {
        Apprform updatedAf = afServ.updateApprform(afNo, af, files);
        return updatedAf;
    }

    // 결재 양식 삭제
    @DeleteMapping("/apprform/{afNo}")
    public List<Apprform> delete(@PathVariable Long afNo) {
        afServ.deleteApprform(afNo);
        return afServ.getApprformList();
    }

}
