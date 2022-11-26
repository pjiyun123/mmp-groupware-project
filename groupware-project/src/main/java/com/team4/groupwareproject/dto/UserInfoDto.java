package com.team4.groupwareproject.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoDto {

    private Long userNo; // 회원 번호

    private String userNum; // 회원 사원번호

    private String userPwd; // 회원 비밀번호

    private String userNm; // 회원 이름

    private String userEmail; // 회원 이메일

    private LocalDate userBirth; // 회원 생년월일

    private String userPicture; // 회원 프로필 사진

    private LocalDateTime createDt; // 회원정보 생성일자

    private LocalDateTime updateDt; // 회원정보 수정일자

    private LocalDateTime deleteDt; // 회원정보 삭제일자

    private Long userLv; // 회원 권한번호

    private String userLvNm;	// 회원 권한명

    private Long deptNo; // 부서 번호

    private String deptNm; // 부서 명

    private Long jobNo; // 직급 번호

    private String jobNm; // 직급 명
}
