package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Entity
public class Authorization extends AuditingFields{

    @Id
    @Column(length = 20)
    private int authorId;

    @Setter @Column(length = 50) private String authorName;

}
