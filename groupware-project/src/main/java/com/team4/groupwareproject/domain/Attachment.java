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
public class Attachment extends AuditingFields {

    @Id
    @Column(length = 20)
    private int attachmentId;

    @Setter private int docId;
    @Setter private int docType;
    @Setter @Column(length = 250) private String oriName; //원본 파일명
    @Setter @Column(length = 250) private String upName; //업로드 파일명
    @Setter @Column(length = 500) private String route; //경로명

}
