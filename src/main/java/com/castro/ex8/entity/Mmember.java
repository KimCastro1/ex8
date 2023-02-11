package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString

public class Mmember extends BaseEntity {

    @Id
    private String email;
    @Column(nullable = false)
    private String password;
    private boolean socialLogin;
    @Builder.Default
    @ElementCollection(fetch = FetchType.LAZY)
    private Set<Author> roleSet = new HashSet<>();
    public void addMemberRole(Author author){
        roleSet.add(author);
    }

}
