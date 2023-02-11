package com.castro.ex8.auth.service;

import com.castro.ex8.auth.dto.MAuthMemberDTO;
import com.castro.ex8.entity.Mmember;
import com.castro.ex8.repository.MmemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
public class MmemberDetailsService implements UserDetailsService {

    private final MmemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Mmember> result = repository.findByEmail(username, false);
        if(!result.isPresent()){
            throw new UsernameNotFoundException("not found");
        }
        Mmember member = result.get();

        MAuthMemberDTO authMember = new MAuthMemberDTO(
                member.getEmail(),
                member.getPassword(),
                member.isSocialLogin(),
                member.getRoleSet().stream()
                        .map(role-> new SimpleGrantedAuthority(role.name())).collect(Collectors.toSet())
                );
        authMember.setSocialLogin(member.isSocialLogin());

        return authMember;
    }

}

