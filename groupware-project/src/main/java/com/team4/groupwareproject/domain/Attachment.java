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
public class Attachment {

    @Id
    @Column(length = 20)
    private Long attachmentId;

    @Setter private Long docId;
    @Setter private Long docType;
    @Setter @Column(nullable = false, length = 250) private String oriName; //원본 파일명
    @Setter @Column(nullable = false, length = 250) private String upName; //업로드 파일명
    @Setter @Column(nullable = false, length = 500) private String route; //경로명

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
