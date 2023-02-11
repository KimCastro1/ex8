package com.castro.ex8.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member/")
@Log4j2
public class MemberController {

    @GetMapping("/login")
    public void login(){
        log.info("login");
    }
    @GetMapping("/join")
    public void join(){

    }

}
