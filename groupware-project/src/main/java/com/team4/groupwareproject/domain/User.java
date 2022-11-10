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
import java.util.Objects;

@Getter
@ToString
@Entity
public class User {

    @Id
    @Column(length = 20)
    private Long userId;

    @Setter @ManyToOne(optional = false) @JoinColumn(name = "deptNo") private Dept dept; // 부서 정보
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "authorId") private Authorization authorization; // 권한 정보
    @Setter @ManyToOne(optional = false) @JoinColumn(name = "rankId") private Rank rank; // 직급 정보

    @Setter @Column(nullable = false) private String userName;
    @Setter @Column(nullable = false) private String password;
    @Setter @Column private LocalDate birthDate;
    @Setter @Column(length = 20) private String phone;
    @Setter @Column(length = 250) private String email;
    @Setter private String picture;

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

    protected User() {}
    public User(Long userId, Dept dept, Authorization authorization, Rank rank, String userName, String password,
                LocalDate birthDate, String phone, String email, String picture) {
        this.userId = userId;
        this.dept = dept;
        this.authorization = authorization;
        this.rank = rank;
        this.userName = userName;
        this.password = password;
        this.birthDate = birthDate;
        this.phone = phone;
        this.email = email;
        this.picture = picture;
        this.creatAt = LocalDateTime.now();
    }
    public static User of(Long userId, Dept dept, Authorization authorization, Rank rank, String userName, String password, LocalDate birthDate, String phone, String email, String picture) {
        return new User(userId, dept, authorization, rank, userName, password, birthDate, phone, email, picture);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User that)) return false;
        return userId == that.getUserId();
    }
    @Override
    public int hashCode() {
        return Objects.hash(userId);
    }

}
