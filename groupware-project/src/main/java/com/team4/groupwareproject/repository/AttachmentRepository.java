package com.team4.groupwareproject.repository;

import com.team4.groupwareproject.domain.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AttachmentRepository extends JpaRepository<Attachment, Long> {
    List<Attachment> findByAtcNo(Long atcNo);
    List<Attachment> findByAtcDocNoAndAtcPrtNo(Long atcDocNo, Long atcPrtNo);

    @Transactional
    @Modifying
    @Query(value = "delete from Attachment where atc_doc_no=:atcDocNo and atc_prt_no=:atcPrtNo", nativeQuery = true)
    void deleteByAtcDocNoAndAtcPrtNo(@Param("atcDocNo") Long atcDocNo, @Param("atcPrtNo") Long atcPrtNo);
}
