package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Approver;
import com.team4.groupwareproject.domain.Dept;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.ApproverRepository;
import com.team4.groupwareproject.repository.DeptRepository;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApproverService {

    private final ApproverRepository apRepo;
    private final UserRepository uRepo;
    private final DeptRepository dRepo;

    // 결재자 목록 조회
    public List<Approver> getApproverList() {
        List<Approver> apList = apRepo.findAll();
        return apList;
    }

    // 결재자 상세 조회
    public Approver getApproverDetail(Long apNo) {
        Approver ap = apRepo.findByApNo(apNo);
        return ap;
    }

    // 결재자 등록
    public Approver addApprover(Long userNo, Approver approver) {
        User apUser = uRepo.findByUserNo(userNo);
        Dept apDept = dRepo.findByDeptNo(apUser.getDeptNo());
        Approver newAp = Approver.builder()
                .afNo(approver.getAfNo())
                .userNo(userNo)
                .userNm(apUser.getUserNm())
                .deptNm(apDept.getDeptNm())
                .createDt(LocalDateTime.now())
                .build();

        apRepo.save(newAp);
        return newAp;
    }

    // 결재자 삭제
    public void deleteApprover(Long apNo) {
        apRepo.deleteById(apNo);
    }

}
