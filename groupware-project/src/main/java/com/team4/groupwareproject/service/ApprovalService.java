package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.*;
import com.team4.groupwareproject.domain.constant.apprStatus;
import com.team4.groupwareproject.domain.constant.constant;
import com.team4.groupwareproject.domain.constant.levelConstant;
import com.team4.groupwareproject.repository.*;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApprovalService {

    private final FileUtil fileutil;

    private final ApprovalRepository avlRepo;
    private final UserRepository uRepo;
    private final AttachmentRepository atcRepo;
    private final ApprformRepository afRepo;
    private final ApproverRepository apRepo;

    // 결재 문서 목록 조회
    public List<Approval> getApprovalList() {
        List<Approval> avlList = avlRepo.findAll();
        return avlList;
    }

    // 결재 문서 등록
    public Approval addApproval(Long userNo, Approval approval, List<MultipartFile> files) throws IOException {
        User user = uRepo.findByUserNo(userNo);
        Apprform af = afRepo.findByAfNo(approval.getAfNo());

        Approval newAvl = Approval.builder()
                .afNo(approval.getAfNo())
                .afNm(af.getAfNm())
                .apNo(af.getApNo())
                .apNm(af.getApNm())
                .userNo(userNo)
                .userNm(user.getUserNm())
                .avlTit(approval.getAvlTit())
                .avlContent(approval.getAvlContent())
                .apprYn(apprStatus.WAIT)
                .createDt(LocalDateTime.now())
                .build();

        Long avlNo = avlRepo.save(newAvl).getAvlNo();

        if(!files.isEmpty()) {
            for(int i=0; i<files.size(); i++) {
                String fileName = fileutil.uploadFile(files.get(0), "approval");

                Attachment atc = Attachment.builder()
                        .atcDocNo(constant.APPROVAL)
                        .atcPrtNo(avlNo)
                        .atcOriName(files.get(i).getOriginalFilename())
                        .atcFtpName(fileName)
                        .createDt(LocalDateTime.now())
                        .build();

                atcRepo.save(atc);
            }
        }

        return newAvl;
    }

    // 결재문서 상세 조회
    public Approval getDetailApproval(Long avlNo) {
        Approval avl = avlRepo.findByAvlNo(avlNo);
        return avl;
    }

    // 결재문서 상세 파일정보 조회
    public List<Attachment> getApprovalFiles(Long avlNo) {
        List<Attachment> avlFiles = atcRepo.findByAtcDocNoAndAtcPrtNo(constant.APPROVAL, avlNo);
        return avlFiles;
    }

    // 결재문서 수정
    public Approval updateApproval(Long userNo, Long avlNo, Approval approval, List<MultipartFile> files) throws IOException {
        Approval tempAvl = avlRepo.findByAvlNo(avlNo);

        tempAvl.setUpdateDt(LocalDateTime.now());
        if(approval.getAfNo() != null) {
            tempAvl.setAfNo(approval.getAfNo());
            tempAvl.setAfNm(afRepo.findByAfNo(approval.getAfNo()).getAfNm());
            tempAvl.setApNo(afRepo.findByAfNo(approval.getAfNo()).getApNo());
            tempAvl.setApNm(afRepo.findByAfNo(approval.getAfNo()).getApNm());
        }
        if(approval.getAvlTit() != null)
            tempAvl.setAvlTit(approval.getAvlTit());
        if(approval.getAvlContent() != null)
            tempAvl.setAvlContent(approval.getAvlContent());
        if(approval.getApprYn() != null)
            tempAvl.setApprYn(approval.getApprYn());

        Approval updatedAvl = avlRepo.save(tempAvl);

        if(files != null) {
            atcRepo.deleteByAtcDocNoAndAtcPrtNo(constant.APPROVAL, avlNo);

            for(int i=0; i<files.size(); i++) {
                String fileName = fileutil.uploadFile(files.get(0), "approval");

                Attachment atc = Attachment.builder()
                        .atcDocNo(constant.APPROVAL)
                        .atcPrtNo(avlNo)
                        .atcOriName(files.get(i).getOriginalFilename())
                        .atcFtpName(fileName)
                        .createDt(LocalDateTime.now())
                        .updateDt(LocalDateTime.now())
                        .build();

                atcRepo.save(atc);
            }
        }

        return updatedAvl;
    }

    // 결재문서 삭제
    public void deleteApproval(Long avlNo) {
        avlRepo.deleteById(avlNo);
    }

}
