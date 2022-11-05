package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@ToString
@Entity
public class Authorization extends AuditingFields{

    @Id
    @Column(length = 20)
    private Long authorId;

    @Setter @Column(nullable = false, length = 50) private String authorName;

}
