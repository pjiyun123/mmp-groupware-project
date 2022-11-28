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
public class Approver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long apNo; //결재문서 결재자 인덱스

    @Column
    private Long afNo; // 결재 문서 양식 번호

    @Column
    private String userNm; //결재자 이름

    @Column
    private String deptNm; // 결재자 부서이름

    @Column(nullable = false)
    private LocalDateTime createDt; // 작성일자

    @Column(nullable = true)
    private LocalDateTime updateDt; // 수정일자

    @Column(nullable = true)
    private LocalDateTime deleteDt; // 삭제일자

}
