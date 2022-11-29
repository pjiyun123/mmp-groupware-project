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
public class Apprform {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long afNo; // 결재 양식 번호

    @Column(nullable = false, length = 50)
    private String afNm; // 결재 양식

    @Column(nullable = false)
    private Long apNo; // 결재자 번호

    @Column(nullable = false)
    private String apNm; // 결재자 이름

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
