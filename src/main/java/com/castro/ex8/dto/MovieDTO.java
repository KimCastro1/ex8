package com.castro.ex8.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO {

    private Long movieIdx;
    private String title;
    private String eTitle;
    private String content;
    private String director;
    private String actor;
    private String genre;
    private LocalDate openDate;
    private String grade;
    private LocalTime runningTime;
    private List<String> imgList;
    private Long man,woman,teen,twenty,thirty,forty,fifty;
    private Long directing,story,visual,acting,ost;
    private float evaluation;

}
