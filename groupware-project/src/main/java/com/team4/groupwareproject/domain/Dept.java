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
public class Dept extends AuditingFields{

    @Id
    @Column(length = 20)
    private Long deptNo;

    @Setter @Column(length = 50) private String deptName;

    protected Dept() {}

    public Dept (Long deptNo, String deptName) {
        this.deptNo = deptNo;
        this.deptName = deptName;
    }

    public static Dept of(Long deptNo, String deptName) {
        return new Dept(deptNo, deptName);
    }
}
