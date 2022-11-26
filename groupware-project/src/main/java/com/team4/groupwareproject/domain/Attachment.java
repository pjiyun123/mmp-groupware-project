package com.team4.groupwareproject.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Attachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long atcNo; // 글 번호

    @Column(nullable=false)
    private Long atcDocNo; // 첨부파일 필드

    @Column(nullable=false)
    private Long atcPrtNo; // 첨부파일 필드

    @Column(nullable=false, length = 100)
    private String atcOriName;	// 첨부파일 원본명

    @Column(nullable=false, length = 200)
    private String atcFtpName;	// 첨부파일 ftp명

    @Column(nullable = false)
    private LocalDateTime createDt; // 첨부파일 생성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 첨부파일 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 첨부파일 삭제일자

}
