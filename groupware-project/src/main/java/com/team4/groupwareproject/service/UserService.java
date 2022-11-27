package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.UserRepository;
import com.team4.groupwareproject.util.CryptoUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository uRepo;

    // 회원 목록 조회
    public List<User> getUserList(){
        List<User> userList = uRepo.findAll();
        return userList;
    }

    // 회원 상세 조회
    public User getUserDetail(Long userNo) {
        User user = uRepo.findByUserNo(userNo);
        return user;
    }

    // 회원 등록
    public User addUser(User user) {
        User newUser = User.builder()
                .userNum(user.getUserNum())
                .userPwd(user.getUserPwd())
                .userNm(user.getUserNm())
                .userEmail(user.getUserEmail())
                .userBirth(user.getUserBirth())
                .userPhone(user.getUserPhone())
                .userLv(user.getUserLv())
                .deptNo(user.getDeptNo())
                .jobNo(user.getJobNo())
                .createDt(LocalDateTime.now())
                .build();

        uRepo.save(newUser);
        return newUser;
    }

    // 회원정보 수정
    public User updateUser(Long userNo, User user) {
        User tempUser = uRepo.findByUserNo(userNo);

        tempUser.setUpdateDt(LocalDateTime.now());
        if(user.getUserNum() != null)
            tempUser.setUserNum(user.getUserNum());
        if(user.getUserPwd() != null)
            tempUser.setUserPwd(user.getUserPwd());
        if(user.getUserNm() != null)
            tempUser.setUserNm(user.getUserNm());
        if(user.getUserEmail() != null)
            tempUser.setUserEmail(user.getUserEmail());
        if(user.getUserBirth() != null)
            tempUser.setUserBirth(user.getUserBirth());
        if(user.getUserPhone() != null)
            tempUser.setUserPhone(user.getUserPhone());
        if(user.getDeptNo() != null)
            tempUser.setDeptNo(user.getDeptNo());
        if(user.getJobNo() != null)
            tempUser.setJobNo(user.getJobNo());

        User updatedUser = uRepo.save(tempUser);

        return updatedUser;
    }


    // 회원 삭제
    public void deleteUser(Long userNo) {
        uRepo.deleteById(userNo);
    }

}
