package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.domain.Businesslog;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.domain.constant.constant;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.repository.BusinesslogRepository;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BusinesslogService {

    private final FileUtil fileutil;

    private final BusinesslogRepository blRepo;
    private final UserRepository uRepo;
    private final AttachmentRepository atcRepo;


    // 업무일지 목록 조회
    public List<Businesslog> getBusinesslogList(){
        return blRepo.findAll();
    }

    // 업무일지 등록
    public Businesslog addBusinesslog(Long userNo, Businesslog businesslog) {
        User user = uRepo.findByUserNo(userNo);
        Businesslog newBl = Businesslog.builder()
                .userNo(userNo)
                .userNm(user.getUserNm())
                .blTit(businesslog.getBlTit())
                .blContent(businesslog.getBlContent())
                .createDt(LocalDateTime.now())
                .build();

        blRepo.save(newBl);
        return newBl;
    }

    // 업무일지 상세 조회
    public Businesslog getBusinesslogDetail(Long blNo) {
        Businesslog bl = blRepo.findByBlNo(blNo);
        return bl;
    }

    /*
    // 업무일지 상세 파일정보 조회
    public List<Attachment> getBusinesslogFiles(Long blNo) {
        List<Attachment> blFiles = atcRepo.findByAtcDocNoAndAtcPrtNo(constant.BUSINESSLOG, blNo);

        return blFiles;
    }
     */

    // 업무일지 수정
    public Businesslog updateBusinesslog(Long blNo, Businesslog businesslog) {
        Businesslog tempBl = blRepo.findByBlNo(blNo);

        tempBl.setUpdateDt(LocalDateTime.now());
        if(businesslog.getBlTit() != null)
            tempBl.setBlTit(businesslog.getBlTit());
        if(businesslog.getBlContent() != null)
            tempBl.setBlContent(businesslog.getBlContent());

        Businesslog updatedBl = blRepo.save(tempBl);
        return updatedBl;
    }

    // 업무일지 삭제
    public void deleteBusinesslog(Long blNo){
        blRepo.deleteById(blNo);
    }

}
