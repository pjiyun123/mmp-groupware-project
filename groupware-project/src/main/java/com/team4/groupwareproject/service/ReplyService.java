package com.team4.groupwareproject.service;

import com.team4.groupwareproject.domain.Reply;
import com.team4.groupwareproject.domain.User;
import com.team4.groupwareproject.repository.ReplyRepository;
import com.team4.groupwareproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReplyService {

    private final ReplyRepository reRepo;
    private final UserRepository uRepo;

    // 댓글 목록 조회
    public List<Reply> getReplyList(Long avlNo) {
        List<Reply> reList = reRepo.findByAvlNo(avlNo);
        return reList;
    }

    // 댓글 상세 조회
    public Reply getDetailReply(Long reNo) {
        Reply re = reRepo.findByReNo(reNo);
        return re;
    }

    // 댓글 등록
    public Reply addReply(Long userNo, Long avlNo, Reply reply) {
        User user = uRepo.findByUserNo(userNo);
        Reply newRe = Reply.builder()
                .userNo(userNo)
                .userNm(user.getUserNm())
                .avlNo(avlNo)
                .preNo(0L)
                .reContent(reply.getReContent())
                .createDt(LocalDateTime.now())
                .build();

        reRepo.save(newRe);
        return newRe;
    }

    // 댓글 수정
    public Reply updateReply(Long userNo, Long reNo, Reply reply) {
        Reply tempRe = reRepo.findByReNo(reNo);

        tempRe.setUpdateDt(LocalDateTime.now());
        if(reply.getReContent() != null)
            tempRe.setReContent(reply.getReContent());
        if(reply.getPreNo() != null)
            tempRe.setPreNo(reply.getPreNo());

        Reply updatedRe = reRepo.save(tempRe);
        return updatedRe;
    }

    // 댓글 삭제
    public void deleteReply(Long reNo) {
        reRepo.deleteById(reNo);
    }

}
