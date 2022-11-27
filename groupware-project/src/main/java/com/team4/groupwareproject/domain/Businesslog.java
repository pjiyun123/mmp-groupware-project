package com.team4.groupwareproject.domain;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

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
public class Businesslog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long blNo; // 글 번호

    @Column(nullable=false)
    private Long userNo; // 회원 번호 (작성자)

    @Column(nullable = false)
    private String userNm; // 작성자 이름

    @Column(nullable=false, length = 50)
    private String blTit;	// 제목

    @Column(nullable=false, length = 5000)
    private String blContent;	// 내용

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
