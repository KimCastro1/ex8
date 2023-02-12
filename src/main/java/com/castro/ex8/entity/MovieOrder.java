package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@ToString(exclude = {"member","schedule"})
@AllArgsConstructor
@NoArgsConstructor
public class MovieOrder extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderIdx;
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    private Schedule schedule;
    private String seat;



}
