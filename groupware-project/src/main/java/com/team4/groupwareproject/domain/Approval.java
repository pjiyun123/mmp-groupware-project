package com.team4.groupwareproject.domain;

import com.team4.groupwareproject.domain.constant.apprStatus;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
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
    private Long avlNo; // 결재 문서 번호

    @Column(nullable = false)
    private Long afNo; // 결재 양식 번호

    @Column(nullable = false)
    private String afNm; // 결재 양식 이름

    @Column(nullable = false)
    private Long apNo; // 결재자 번호

    @Column(nullable = false)
    private String apNm; // 결재자 이름

    @Column(nullable=false)
    private Long userNo; // 회원 번호 (작성자)

    @Column(nullable = false)
    private String userNm; // 작성자 이름

    @Column(nullable = false, length = 100)
    private String avlTit; // 제목

    @Column(length = 5000)
    private String avlContent;	// 내용

    @Column(nullable = false)
    private String apprYn; // 결재 여부 (대기, 승인, 반려)

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
