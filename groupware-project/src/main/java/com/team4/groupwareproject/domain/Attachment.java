package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@ToString
@Entity
public class Attachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 20)
    private Long attachmentId;

    @Setter private Long docId; //문서 번호
    @Setter private Long docType; //문서 종류 번호
    @Setter @Column(length = 250) private String oriName; //원본 파일명
    @Setter @Column(length = 250) private String upName; //업로드 파일명
    @Setter @Column private int fileSize; //파일 크기
    @Setter @Column private String fileExt; //파일 확장자
    @Setter @Column(length = 500) private String route; //파일 경로명
    @Setter @ColumnDefault("N") private String delete_yn; //삭제 여부

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @CreatedDate
    @Column(updatable = false)
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

    protected Attachment() {}

    public Attachment(Long attachmentId, Long docId, Long docType, String oriName, String upName, int fileSize, String fileExt, String route, String delete_yn) {
        this.attachmentId = attachmentId;
        this.docId = docId;
        this.docType = docType;
        this.oriName = oriName;
        this.upName = upName;
        this.fileSize = fileSize;
        this.fileExt = fileExt;
        this.route = route;
        this.delete_yn = delete_yn;
        this.createAt = LocalDateTime.now();
    }

    public static Attachment of(Long attachmentId, Long docId, Long docType, String oriName, String upName, int fileSize, String fileExt, String route, String delete_yn) {
        return  new Attachment(attachmentId, docId, docType, oriName, upName, fileSize, fileExt, route, delete_yn);
    }

}
