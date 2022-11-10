package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@ToString
@Entity
public class Dept {

    @Id
    @Column(length = 20)
    private Long deptNo;

    @Setter @Column(length = 50) private String deptName;

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

    protected Dept() {}

    public Dept (Long deptNo, String deptName) {
        this.deptNo = deptNo;
        this.deptName = deptName;
        this.creatAt = LocalDateTime.now();
    }

    public static Dept of(Long deptNo, String deptName) {
        return new Dept(deptNo, deptName);
    }
}
