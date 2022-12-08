package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.domain.Businesslog;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.service.BusinesslogService;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3030, https://simmpleware.netlify.app/")
public class BusinesslogController {

    private final BusinesslogService blServ;
    private final FileUtil fileutil;
    private final AttachmentRepository atcRepo;

    // 업무일지 목록 조회
    @GetMapping("/businesslog/list")
    public List<Businesslog> list() {
        List<Businesslog> blList = blServ.getBusinesslogList();
        return blList;
    }

    // 업무일지 등록
    @PostMapping("/businesslog/{userNo}")
    public Businesslog add(@PathVariable Long userNo, @RequestPart("bl") Businesslog bl, @RequestPart("files") List<MultipartFile> files) throws IOException {
        Businesslog newBl = blServ.addBusinesslog(userNo, bl, files);
        return newBl;
    }

    // 업무일지 상세 조회
    @GetMapping("/businesslog/{blNo}")
    public Businesslog detail(@PathVariable Long blNo) {
        Businesslog bl = blServ.getBusinesslogDetail(blNo);
        return bl;
    }

    // 업무일지 상세 파일 정보 조회
    @GetMapping("/businesslog/{blNo}/atc")
    public List<Attachment> detailAtc(@PathVariable Long blNo) {
        List<Attachment> blFiles = blServ.getBusinesslogFiles(blNo);
        return blFiles;
    }

    // 업무일지 상세 파일 다운로드
    @GetMapping("/businesslog/{blNo}/atc/{atcNo}/download")
    public String download(@PathVariable Long blNo, @PathVariable Long atcNo) {
        String mmpUrl = "https://360map.co.kr/groupware/businesslog/";
        String ftpName = atcRepo.findByAtcNo(atcNo).getAtcFtpName();
        return mmpUrl + ftpName;
    }

    // 업무일지 수정
    @PatchMapping("/businesslog/{userNo}/{blNo}")
    public Businesslog edit(@PathVariable Long userNo, @PathVariable Long blNo, @RequestPart("bl") Businesslog bl, @RequestPart("files") List<MultipartFile> files) throws IOException{
        Businesslog updatedBl = blServ.updateBusinesslog(blNo, bl, files);
        return updatedBl;
    }

    // 업무일지 삭제
    @DeleteMapping("/businesslog/{blNo}")
    public List<Businesslog> delete(@PathVariable Long blNo){
        blServ.deleteBusinesslog(blNo);
        return blServ.getBusinesslogList();
    }

}
