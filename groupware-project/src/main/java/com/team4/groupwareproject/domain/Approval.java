package com.team4.groupwareproject.domain;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
public class Approval {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aNo; // 결재 문서 번호

    @Column(nullable = false)
    private Long afNo; // 결재 양식 번호

    @Column(nullable=false)
    private Long userNo; // 회원 번호

    @Column(nullable = false, length = 100)
    private String aTit; // 제목

    @Column(nullable=false, length = 5000)
    private String aContent;	// 내용

    @Column
    private char apprYn; // 결재 여부

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
