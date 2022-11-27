package com.team4.groupwareproject.service;

import com.team4.groupwareproject.repository.ApprformRepository;
import com.team4.groupwareproject.repository.AttachmentRepository;
import com.team4.groupwareproject.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApprformService {

    private final FileUtil fileutil;

    private final ApprformRepository afRepo;
    private final AttachmentRepository atcRepo;




}
