package com.team4.groupwareproject.domain;

import com.team4.groupwareproject.domain.constant.CalCategory;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 20)
    private Long calId;

    @Setter @ManyToOne @JoinColumn(name = "userID") private User user; // 사원번호
//    @Setter @ManyToOne @JoinColumn(name = "calTypeId") private CalType calType; // 일정유형번호
    @Setter @Enumerated(EnumType.STRING) @Column private CalCategory calCategory; // 일정유형

    @Setter @Column(length = 100) private String title;
    @Setter private String content;
    @Setter private LocalDate calDate;
    @Setter private LocalTime calStartTime;
    @Setter private LocalTime calEndTime;
    @Setter @Column(length = 100) private String calPlace;
    @Setter private char majorYn;

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

    protected Calendar() {}

    public Calendar(Long calId, User user, CalCategory calCategory, String title, String content,
                    LocalDate calDate, LocalTime calStartTime, LocalTime calEndTime, String calPlace, char majorYn) {
        this.calId = calId;
        this.user = user;
        this.calCategory = calCategory;
        this.title = title;
        this.content = content;
        this.calDate = calDate;
        this.calStartTime = calStartTime;
        this.calEndTime = calEndTime;
        this.calPlace = calPlace;
        this.majorYn = majorYn;
        this.createAt = LocalDateTime.now();
    }

    public static Calendar of(Long calId, User user, CalCategory calCategory, String title, String content,
                              LocalDate calDate, LocalTime calStartTime, LocalTime calEndTime, String calPlace, char majorYn) {
        return new Calendar(calId, user, calCategory, title, content, calDate, calStartTime, calEndTime, calPlace, majorYn);
    }

}
