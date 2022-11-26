package com.team4.groupwareproject.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BusinesslogInfoDto {

    private int numrow;

    private Long blNo; // 글 번호

    private Long userNo; // 회원 번호

    private String userNm;	// 작성자

    private String blTit;	// 제목

    private String blContent;	// 내용

    private LocalDateTime createDt; // 작성일자

    private LocalDateTime updateDt; // 수정일자

    private LocalDateTime deleteDt; // 삭제일자

}
