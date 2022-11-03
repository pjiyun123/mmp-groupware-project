package com.team4.groupwareproject.domain;

import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CalType extends AuditingFields{

    @Id
    @Column(length = 20)
    private int calType;

    @Setter @Column(length = 50) private String calTypeName;

}
