package com.castro.ex8.service;

import com.castro.ex8.dto.MemberDTO;
import com.castro.ex8.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository repository;

    @Override
    public ResponseEntity login(Map<String, String> data) {

        return null;
    }

    @Override
    public ResponseEntity registration(Map<String, String> data) {

        return null;
    }
}
