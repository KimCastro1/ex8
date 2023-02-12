package com.castro.ex8.service;

import com.castro.ex8.dto.MovieDTO;

import java.util.List;

public interface MovieService {

    MovieDTO get(Long movieIdx);
    List<MovieDTO> getMovieList();


}
