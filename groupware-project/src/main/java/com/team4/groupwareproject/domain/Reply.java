package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity
public class Reply extends AuditingFields {

    @Id
    @Column(length = 20)
    private int replyId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

    @Setter private int docId;
    @Setter private int docType;
    @Setter private String content;
    @Setter private int parentReplyId;

}
