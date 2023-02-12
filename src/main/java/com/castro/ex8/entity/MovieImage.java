package com.castro.ex8.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@ToString(exclude = "movie")
@AllArgsConstructor
@NoArgsConstructor
public class MovieImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imgIdx;
    private String uuid;
    private String imgName;
    private String path;
    @ManyToOne(fetch=FetchType.LAZY)
    private Movie movie;
}
