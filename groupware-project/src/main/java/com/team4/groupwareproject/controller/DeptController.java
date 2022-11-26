package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Dept;
import com.team4.groupwareproject.service.DeptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/dept")
@RequiredArgsConstructor
public class DeptController {

    private final DeptService dServ;

    // 부서 목록 조회
    @GetMapping("/list")
    public List<Dept> list() {
        return dServ.getDeptList();
    }

    // 부서 상세 조회
    @GetMapping("/detail/{deptNo}")
    public Dept detail(@PathVariable Long deptNo) {
        Dept dept = dServ.getDeptDetail(deptNo);
        return dept;
    }

    // 부서 등록
    @PostMapping("/add")
    public Dept add(@RequestBody Dept dept) {
        Dept newDept = dServ.addDept(dept);
        return newDept;
    }

    // 부서 삭제
    @DeleteMapping("/delete")
    public List<Dept> delete(@PathVariable Long deptNo){
        dServ.deleteDept(deptNo);
        return dServ.getDeptList();
    }

    // 부서 수정
    @PatchMapping("/edit")
    public Dept edit(@PathVariable Long deptNo, @RequestBody Dept dept){
        Dept updatedDept = dServ.editDept(deptNo, dept);
        return updatedDept;
    }

}
