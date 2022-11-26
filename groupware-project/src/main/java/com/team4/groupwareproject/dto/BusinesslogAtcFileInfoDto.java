package com.team4.groupwareproject.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BusinesslogAtcFileInfoDto {

    private Long atcNo; // 첨부파일 번호

    private Long atcDocNo; // 첨부파일 필드 번호

    private String atcOriName;	// 첨부파일 원본명

    private String atcFtpName;	// 첨부파일 ftp명

    private LocalDateTime createDt; // 작성일자

    private LocalDateTime updateDt; // 수정일자

    private LocalDateTime deleteDt; // 삭제일자

}
