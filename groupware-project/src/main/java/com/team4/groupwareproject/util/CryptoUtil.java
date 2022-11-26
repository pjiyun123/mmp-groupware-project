package com.team4.groupwareproject.util;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CryptoUtil {

    /** 1. 문자열 암호화 */
    public String strEncoder(String str) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(str);
    }

    /** 2. 암호화 문자열 매치 */
    public boolean strMatch(String encodeStr, String notEncodeStr) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if(encoder.matches(notEncodeStr, encodeStr)) {
            return true;
        }
        else {
            return false;
        }
    }

}
