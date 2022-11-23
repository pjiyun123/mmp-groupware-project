package com.team4.groupwareproject.controller;

import com.team4.groupwareproject.service.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AttachmentController {

    private final AttachmentService attachmentService;

    //파일 업로드
    @PostMapping("/attachment/download")
    public void downloadFile(@RequestParam Long attachmentId, HttpServletResponse response) throws Exception {

    }


}
