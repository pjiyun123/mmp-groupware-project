package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Approval;
import com.team4.groupwareproject.repository.*;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

    //결재 문서 목록 조회
    public List<Approval> getApprovalList() {
        List<Approval> avlList = avlRepo.findAll();
        return avlList;
    }


}
