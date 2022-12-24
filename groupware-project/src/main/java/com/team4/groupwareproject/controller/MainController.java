package com.team4.groupwareproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
//@CrossOrigin(origins = "http://localhost:3030")
@CrossOrigin(origins = "http://localhost:3030, https://simmpleware.netlify.app/")
public class MainController {

    @GetMapping("")
    public String hello() {
        return "hello~";
    }
}
