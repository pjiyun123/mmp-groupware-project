package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@ToString
@Entity
public class ApprovalList {

    @Id
    @Column(length = 20)
    private Long idx; //결재문서 결재자 인덱스

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "formID") private ApprForm apprForm; // 결재 문서 양식 번호
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime creatAt; //생성일

    @Setter
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updateAt; //수정일

    @Setter
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @Column(nullable = false)
    private LocalDateTime deleteAt; //삭제일 //구현 중

}
