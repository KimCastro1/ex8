package com.castro.ex8.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;

import java.io.UnsupportedEncodingException;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtToken {

    @Value("${org.castro.jwt.secretkey}")
    private String secretKey;
    private int access_expire = 60;
    private int refresh_expire = 60*24*7;

    public Map<String, String> generateToken(String content) throws Exception {
        Map<String, String> result = new HashMap<>();

        String refresh_token = Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(Date.from(ZonedDateTime.now()
                        .plusMinutes(access_expire).toInstant()))
                .claim("sub", content)
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))
                .compact();

        String access_token = Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(Date.from(ZonedDateTime.now()
                        .plusMinutes(refresh_expire).toInstant()))
                .claim("sub", content)
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))
                .compact();
        result.put("refresh_token", refresh_token);
        result.put("access_token", access_token);

        return result;
    }

}
