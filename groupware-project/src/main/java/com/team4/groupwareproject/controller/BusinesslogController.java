package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.domain.Businesslog;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.service.BusinesslogService;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
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

    /*
    @GetMapping("/businesslog/{blNo}/atc/{atcNo}/download")
    public void download(@PathVariable Long blNo, @PathVariable Long atcNo, HttpServletResponse response) throws IOException {
        FileOutputStream fos = null;
        InputStream is = null;

        try{
           String oriNm = atcRepo.findByAtcNo(atcNo).getAtcOriName();
           String ftpNm = atcRepo.findByAtcNo(atcNo).getAtcFtpName();
           String path = "https://360map.co.kr/groupware/businesslog/";
           String downPath = "C:\\Users\\박지윤\\Downloads";
           fos = new FileOutputStream(downPath + "\\" + ftpNm);
           URL url = new URL(path + ftpNm);
            URLConnection urlConnection = url.openConnection();
            //https
            //HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            is = urlConnection.getInputStream();

            response.setHeader("Content-Disposition", "attachment; filename=\"" + oriNm + "\";");
            response.setHeader("Content-Transfer-Encoding", "binary");
            response.setHeader("Pragma", "no-cache;");
            response.setHeader("Expires", "-1;");

            byte[] buffer = new byte[1024];
            int readBytes;
            while ((readBytes = is.read(buffer)) != -1) {
                fos.write(buffer, 0, readBytes);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if (fos != null) {
                    fos.close();
                }
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    */

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
