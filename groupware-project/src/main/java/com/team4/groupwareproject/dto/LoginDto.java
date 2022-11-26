package com.team4.groupwareproject.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {

    private String userId; // 회원 아이디

    private String userPwd; // 회원 비밀번호

}
