package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@ToString(exclude = {"member","movie"})
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class Review extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewIdx;
    private String content;
    private String gender;
    private String age;
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;
    private String point;
    @ManyToOne(fetch = FetchType.LAZY)
    private Movie movie;

}
