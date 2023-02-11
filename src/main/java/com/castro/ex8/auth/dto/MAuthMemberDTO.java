package com.castro.ex8.auth.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
@Getter
@Setter
@ToString
@Log4j2
public class MAuthMemberDTO extends User {

    private String email;
    private boolean socialLogin;

    public MAuthMemberDTO(String username,
                          String password,
                          boolean socialLogin,
                          Collection<? extends GrantedAuthority> authorities){
        super(username, password, authorities);
    }

}
