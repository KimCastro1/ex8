package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieIdx;
    private String title;
    private String eTitle;
    @Column(length = 3000)
    private String content;
    private String director;
    private String actor;
    private String genre;
    private LocalDate openDate;
    private String grade;
    private LocalTime runningTime;

}
