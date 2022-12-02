package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.domain.Reply;
import com.team4.groupwareproject.repository.ReplyRepository;
import com.team4.groupwareproject.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3030")
public class ReplyController {

    private final ReplyService reServ;

    // 해당 결재문서의 댓글 목록 조회
    @GetMapping("/reply/{userNo}/{avlNo}/list")
    public List<Reply> list(@PathVariable Long userNo, @PathVariable Long avlNo) {
        return reServ.getReplyList(avlNo);
    }

    // 댓글 번호로 댓글 상세 조회
    @GetMapping("/reply/{userNo}/{avlNo}/{reNo}")
    public Reply detail(@PathVariable Long userNo, @PathVariable Long avlNo, @PathVariable Long reNo) {
        Reply re = reServ.getDetailReply(reNo);
        return re;
    }

    // 댓글 등록
    @PostMapping("/reply/{userNo}/{avlNo}")
    public Reply add(@PathVariable Long userNo, @PathVariable Long avlNo, @RequestBody Reply reply) {
        Reply newRe = reServ.addReply(userNo, avlNo, reply);
        return newRe;
    }

    // 댓글 수정
    @PatchMapping("/reply/{userNo}/{avlNo}/{reNo}")
    public Reply edit(@PathVariable Long userNo, @PathVariable Long reNo, @RequestBody Reply reply) {
        Reply updatedRe = reServ.updateReply(userNo, reNo, reply);
        return updatedRe;
    }

    // 댓글 삭제
    @DeleteMapping("/reply/{avlNo}/{reNo}")
    public List<Reply> delete(@PathVariable Long avlNo, @PathVariable Long reNo) {
        reServ.deleteReply(reNo);
        return reServ.getReplyList(avlNo);
    }

}
