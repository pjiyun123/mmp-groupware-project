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
public class BusinessLog {

    @Id
    @Column(length = 20)
    private Long businessLogId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호

    @Setter @Column(nullable = false, length = 50) private String title;
    @Setter private String content;

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

    protected BusinessLog() {}

    public BusinessLog(Long businessLogId, User user, String title, String content) {
        this.businessLogId = businessLogId;
        this.title = title;
        this.content = content;
        this.creatAt = LocalDateTime.now();
    }

    public static BusinessLog of(Long businessLogId, User user, String title, String content) {
        return new BusinessLog(businessLogId, user, title, content);
    }
}
