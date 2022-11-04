package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity
public class BusinessLog extends AuditingFields{

    @Id
    @Column(length = 20)
    private Long businessLogId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

    @Setter @Column(nullable = false, length = 50) private String title;
    @Setter private String content;

}
