package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class Mmember {

    @Id
    private String id;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    private String nickname;
    private boolean socialLogin;
    @Enumerated(EnumType.STRING)
    private Author author;


}
