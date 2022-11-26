package com.team4.groupwareproject.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DeptInfoDto {

    private int rownum;

    private Long deptNo; // 부서 고유번호

    private String deptNm;	// 부서 명

}
