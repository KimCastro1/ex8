package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Builder
@ToString(exclude = {"screen","movie"})
@AllArgsConstructor
@NoArgsConstructor
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;
    private LocalDate OpenDate;
    private LocalTime OpenTime;
    @ManyToOne(fetch = FetchType.LAZY)
    private Screen screen;
    @ManyToOne(fetch = FetchType.LAZY)
    private Movie movie;



}
