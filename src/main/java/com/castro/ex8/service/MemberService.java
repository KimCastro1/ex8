package com.castro.ex8.service;

import com.castro.ex8.dto.MemberDTO;
import com.castro.ex8.entity.Member;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface MemberService {

    ResponseEntity login(Map<String, String> data);
    ResponseEntity registration(Map<String, String> data);

    default Member dtoToEntity(MemberDTO dto){
        Member member = Member.builder()
                .email(dto.getEmail())
                .password(dto.getPassword())
                .socialLogin(dto.isSocialLogin())
                .build();
        return member;
    }

    default MemberDTO entityToDto(Member member){
        MemberDTO dto = MemberDTO.builder()
                .email(member.getEmail())
                .password(member.getPassword())
                .socialLogin(member.isSocialLogin())
                .regDate(member.getRegDate())
                .modDate(member.getModDate())
                .build();
        return dto;
    }

}
