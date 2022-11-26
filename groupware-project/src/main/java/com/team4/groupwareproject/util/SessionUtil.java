package com.team4.groupwareproject.util;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class SessionUtil {

    HttpSession session;

    /** 1. 세션 유무 확인 */
    public boolean sessionCheck(HttpServletRequest request, String key) {
        boolean result = false;

        session = request.getSession();

        if(session.getAttribute(key) == null) {
            result = true;
            return result;
        }

        return result;
    }

    /** 2. 세션 세팅 */
    public boolean sessionSet(HttpServletRequest request , Map<String,Object> SessionMap) {
        session = request.getSession();
        try {
            for(String key : SessionMap.keySet()) {
                session.setAttribute(key, SessionMap.get(key));
            }
        }catch(Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /** 3. 세션 가져오기 */
    public String sessionGet(HttpServletRequest request, String attribute) {
        session = request.getSession();
        return String.valueOf(session.getAttribute(attribute));
    }

    /** 4. 세션 해제 */
    public boolean sessionOut(HttpServletRequest request){
        try {
            session = request.getSession();
            session.invalidate();
        }catch(Exception e) {
            return false;
        }
        return true;
    }

}
