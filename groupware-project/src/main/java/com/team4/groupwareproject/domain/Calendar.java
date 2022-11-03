package com.team4.groupwareproject.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Entity
public class Calendar extends AuditingFields{

    @Id
    @Column(length = 20)
    private int calId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "userID") private User user; // 사원번호
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "calTypeId") private CalType calType; // 일정유형번호

    @Setter @Column(length = 100) private String title;
    @Setter private String content;
    @Setter private LocalDate calDate;
    @Setter private LocalTime calTime;
    @Setter @Column(length = 100) private String calPlace;
    @Setter private char majorYn;

}
