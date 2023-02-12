package com.castro.ex8.repository;

import com.castro.ex8.entity.MovieOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<MovieOrder, Long> {
}
