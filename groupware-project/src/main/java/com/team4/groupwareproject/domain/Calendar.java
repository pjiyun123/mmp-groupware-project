package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@ToString
@Entity
public class Calendar {

    @Id
    @Column(length = 20)
    private Long calId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "calTypeId") private CalType calType; // 일정유형번호

    @Setter @Column(nullable = false, length = 100) private String title;
    @Setter private String content;
    @Setter private LocalDate calDate;
    @Setter private LocalTime calTime;
    @Setter @Column(length = 100) private String calPlace;
    @Setter private char majorYn;

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

}
