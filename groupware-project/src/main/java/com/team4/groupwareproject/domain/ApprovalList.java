package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity
public class ApprovalList extends AuditingFields{

    @Id
    @Column(length = 20)
    private int idx; //결재문서 결재자 인덱스

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "formID") private ApprForm apprForm; // 결재 문서 양식 번호
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

}
