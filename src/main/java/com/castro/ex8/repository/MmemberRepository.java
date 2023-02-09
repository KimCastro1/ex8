package com.castro.ex8.repository;

import com.castro.ex8.entity.Mmember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MmemberRepository extends JpaRepository<Mmember, String> {

}
