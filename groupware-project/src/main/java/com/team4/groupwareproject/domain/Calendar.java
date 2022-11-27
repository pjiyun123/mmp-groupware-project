package com.team4.groupwareproject.domain;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calNo; // 일정 번호

    @Column
    private Long ctNo; // 일정 유형

    @Column
    private Long userNo; // 회원 번호 (작성자)

    @Column
    private String userNm; // 작성자 이름

    @Column(nullable = false, length = 100)
    private String calTit; // 제목

    @Column(length = 5000)
    private String calContent;	// 내용

    @Column
    private LocalDate calDate; // 일정 날짜

    @Column
    private LocalTime calStartTime; // 일정 시작시간

    @Column
    private LocalTime calEndTime; // 일정 종료시간

    @Column(length = 100)
    private String calPlace; // 일정 장소

    @Column
    private String calMajor; // 주요 일정 체크

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
