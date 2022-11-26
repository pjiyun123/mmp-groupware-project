package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.domain.Businesslog;
import com.team4.groupwareproject.service.BusinesslogService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/businesslog")
@RequiredArgsConstructor
public class BusinesslogController {

    private final BusinesslogService blServ;

    // 업무일지 조회
    @GetMapping("/list")
    public List<Businesslog> list() {
        List<Businesslog> blList = blServ.getBusinesslogList();
        return blList;
    }

    // 업무일지 등록
    @PostMapping("/add/{userNo}")
    public Businesslog add(@PathVariable Long userNo, @RequestBody Businesslog bl, @RequestParam List<MultipartFile> files) throws IOException {
        Businesslog newBl = blServ.addBusinesslog(userNo, bl, files);
        return newBl;
    }

    // 업무일지 상세 조회
    @GetMapping("/detail/{blNo}")
    public Businesslog detail(@PathVariable Long blNo) {
        Businesslog bl = blServ.getBusinesslogDetail(blNo);
        return bl;
    }

    // 업무일지 상세 파일 정보 조회
    @GetMapping("/detail/{blNo}/atc")
    public List<Attachment> detailAtc(@PathVariable Long blNo) {
        List<Attachment> blFiles = blServ.getBusinesslogFiles(blNo);
        return blFiles;
    }

    // 업무일지 수정
    @PatchMapping("/edit/{userNo}/{blNo}")
    public Businesslog edit(@PathVariable Long userNo, @PathVariable Long blNo, @RequestBody Businesslog bl, @RequestParam List<MultipartFile> files) throws IOException{
        Businesslog updatedBl = blServ.updateBusinesslog(blNo, bl, files);
        return updatedBl;
    }

    // 업무일지 삭제
    @DeleteMapping("/delete/{blNo}")
    public List<Businesslog> delete(@PathVariable Long blNo){
        blServ.deleteBusinesslog(blNo);
        return blServ.getBusinesslogList();
    }

}
