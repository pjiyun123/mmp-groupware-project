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
public class Authorization {

    @Id
    @Column(length = 20)
    private Long authorId;

    @Setter @Column(nullable = false, length = 50) private String authorName;

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

    protected Authorization() {}

    public Authorization (Long authorId, String authorName) {
        this.authorId = authorId;
        this.authorName = authorName;
        this.creatAt = LocalDateTime.now();
    }

    public static Authorization of(Long authorId, String authorName) {
        return new Authorization(authorId, authorName);
    }
}
