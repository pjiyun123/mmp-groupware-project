package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.*;
import com.team4.groupwareproject.domain.constant.apprStatus;
import com.team4.groupwareproject.domain.constant.constant;
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
        Approver ap = apRepo.findByApNo(approval.getApNo());

        Approval newAvl = Approval.builder()
                .afNo(approval.getAfNo())
                .afNm(af.getAfNm())
                .apNo(approval.getApNo())
                .apNm(ap.getUserNm())
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

}
