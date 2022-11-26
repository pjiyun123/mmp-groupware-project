package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AttachmentRepository extends JpaRepository<Attachment, Long> {
    List<Attachment> findByAtcNo(Long atcNo);
    List<Attachment> findByAtcDocNoAndAtcPrtNo(Long atcDocNo, Long atcPrtNo);

    @Query(value = "delete Attachment where atcDocNo=:atcDocNo and atcPrtNo=:atcPrtNo", nativeQuery = true)
    void deleteByAtcDocNoAndAtcPrtNo(@Param("atcDocNo") Long atcDocNo, @Param("atcPrtNo") Long atcPrtNo);
}
