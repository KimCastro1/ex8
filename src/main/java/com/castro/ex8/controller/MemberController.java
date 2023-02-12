package com.castro.ex8.controller;

import com.castro.ex8.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/member/")
@RequiredArgsConstructor
public class MemberController {

    private MemberService service;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String, String> data){
        return service.login(data);
    }
    @PostMapping("/registeration")
    public ResponseEntity registration(@RequestBody Map<String, String> data){
        return service.registration(data);
    }

}
