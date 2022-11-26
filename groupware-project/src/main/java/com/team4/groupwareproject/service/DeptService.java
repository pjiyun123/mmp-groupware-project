package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Dept;
import com.team4.groupwareproject.repository.DeptRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DeptService {

    private final DeptRepository dRepo;

    // 부서 목록 조회
    public List<Dept> getDeptList(){
        List<Dept> deptList = dRepo.findAll();
        return deptList;
    }

    // 부서 상세 조회
    public Dept getDeptDetail(Long deptNo) {
        Dept dept = dRepo.findByDeptNo(deptNo);
        return dept;
    }

    // 부서등록
    public Dept addDept(Dept dept) {
        Dept newDept = Dept.builder()
                .deptNm(dept.getDeptNm())
                .createDt(LocalDateTime.now())
                .build();

        dRepo.save(newDept);
        return newDept;
    }

    // 부서 삭제
    public void deleteDept(Long deptNo){
        dRepo.deleteById(deptNo);
    }

    // 부서 수정
    public Dept editDept(Long deptNo, Dept dept){
        Dept tempDept = dRepo.findByDeptNo(deptNo);

        tempDept.setUpdateDt(LocalDateTime.now());
        if(dept.getDeptNm() != null)
            tempDept.setDeptNm(dept.getDeptNm());

        Dept updatedDept = dRepo.save(tempDept);
        return updatedDept;
    }

}
