package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class Member extends BaseEntity {

    @Id
    private String email;
    @Column(nullable = false)
    private String password;
    private boolean socialLogin;


}
