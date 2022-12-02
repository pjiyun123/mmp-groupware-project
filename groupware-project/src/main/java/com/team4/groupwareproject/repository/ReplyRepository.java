package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    Reply findByReNo(Long reNo);
    List<Reply> findByAvlNo(Long avlNo);
}
