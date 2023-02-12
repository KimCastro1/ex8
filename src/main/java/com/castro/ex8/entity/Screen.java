package com.castro.ex8.entity;

import lombok.*;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;

@Entity
@Getter
@Builder
@ToString(exclude = "theater")
@AllArgsConstructor
@NoArgsConstructor
public class Screen {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long screenIdx;
    @ManyToOne(fetch = FetchType.LAZY)
    private Theater theater;
    private String screenName;
    private int seat;
    private String viewType;



}
