package com.team4.groupwareproject.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobInfoDto {

    private int rownum;

    private Long jobNo; // 부서 고유번호

    private String jobNm;	// 부서 명

}
