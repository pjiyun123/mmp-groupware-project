package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Apprform;
import com.team4.groupwareproject.domain.Approver;
import com.team4.groupwareproject.domain.Attachment;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.domain.constant.constant;
import com.team4.groupwareproject.repository.ApprformRepository;
import com.team4.groupwareproject.repository.ApproverRepository;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApprformService {

    private final FileUtil fileutil;

    private final ApprformRepository afRepo;
    private final AttachmentRepository atcRepo;
    private final UserRepository uRepo;
    private final ApproverRepository apRepo;

    // 결재 양식 목록 조회
    public List<Apprform> getApprformList() {
        List<Apprform> afList = afRepo.findAll();
        return afList;
    }

    // 결재 양식 등록
    public Apprform addApprform(Long userNo, Apprform apprform, List<MultipartFile> files) throws IOException {
        User user = uRepo.findByUserNo(userNo);
        Approver ap = apRepo.findByApNo(apprform.getApNo());

        Apprform newAf = Apprform.builder()
                .afNm(apprform.getAfNm())
                .apNo(apprform.getApNo())
                .apNm(ap.getUserNm())
                .createDt(LocalDateTime.now())
                .build();

        Long afNo = afRepo.save(newAf).getAfNo();

        if(!files.isEmpty()) {
            for(int i=0; i<files.size(); i++) {
                String fileName = fileutil.uploadFile(files.get(0), "apprform");

                Attachment atc = Attachment.builder()
                        .atcDocNo(constant.APPRFORM)
                        .atcPrtNo(afNo)
                        .atcOriName(files.get(i).getOriginalFilename())
                        .atcFtpName(fileName)
                        .createDt(LocalDateTime.now())
                        .build();

                atcRepo.save(atc);
            }
        }

        return newAf;
    }

    // 결재 양식 상세 조회
    public Apprform getDetailApprform(Long afNo) {
        Apprform af = afRepo.findByAfNo(afNo);
        return af;
    }

    // 결재 양식 상세 파일정보 조회
    public List<Attachment> getApprformFiles(Long afNo) {
        List<Attachment> afFiles = atcRepo.findByAtcDocNoAndAtcPrtNo(constant.APPRFORM, afNo);

        return afFiles;
    }

    // 결재 양식 수정
    public Apprform updateApprform(Long afNo, Apprform apprform, List<MultipartFile> files) throws IOException {
        Apprform tempAf = afRepo.findByAfNo(afNo);

        tempAf.setUpdateDt(LocalDateTime.now());
        if(apprform.getAfNm() != null)
            tempAf.setAfNm(apprform.getAfNm());
        if(apprform.getApNo() != null) {
            tempAf.setApNo(apprform.getApNo());
            tempAf.setApNm(apRepo.findByApNo(apprform.getApNo()).getUserNm());
        }

        Apprform updatedAf = afRepo.save(tempAf);

        if(files != null) {
            atcRepo.deleteByAtcDocNoAndAtcPrtNo(constant.APPRFORM, afNo);

            for(int i=0; i<files.size(); i++) {
                String fileName = fileutil.uploadFile(files.get(0), "apprform");

                Attachment atc = Attachment.builder()
                        .atcDocNo(constant.APPRFORM)
                        .atcPrtNo(afNo)
                        .atcOriName(files.get(i).getOriginalFilename())
                        .atcFtpName(fileName)
                        .createDt(LocalDateTime.now())
                        .updateDt(LocalDateTime.now())
                        .build();

                atcRepo.save(atc);
            }
        }

        return updatedAf;
    }

    // 결재 양식 삭제
    public void deleteApprform(Long afNo) {
        afRepo.deleteById(afNo);
    }

}
