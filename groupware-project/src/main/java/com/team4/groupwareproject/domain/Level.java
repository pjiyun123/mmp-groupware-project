package com.team4.groupwareproject.domain;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;


@Entity
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicUpdate
public class Level {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lvNo; // 권한 고유번호

    @Column(nullable=false, length = 50)
    private String lvNm;	// 권한 명

}
