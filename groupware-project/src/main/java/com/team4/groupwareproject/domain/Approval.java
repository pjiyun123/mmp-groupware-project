package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity
public class Approval extends AuditingFields {

    @Id
    @Column(length = 20)
    private int documentId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "formID") private ApprForm apprForm; // 결재 문서 양식 번호
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

    @Setter @Column(length = 100) private String title;
    @Setter private String content;
    @Setter private char apprYn; //결재 여부

}
