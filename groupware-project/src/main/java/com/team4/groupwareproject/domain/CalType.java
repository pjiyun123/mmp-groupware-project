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
public class CalType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 20)
    private Long calType;

    @Setter @Column(nullable = false, length = 50) private String calTypeName;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createAt; //생성일

//    @Setter
//    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
//    @LastModifiedDate
//    @Column(nullable = false)
//    private LocalDateTime updateAt; //수정일

//    @Setter
//    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
//    @Column(nullable = false)
//    private LocalDateTime deleteAt; //삭제일 //구현 중

}
