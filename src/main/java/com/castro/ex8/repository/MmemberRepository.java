package com.castro.ex8.repository;

import com.castro.ex8.entity.Mmember;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface MmemberRepository extends JpaRepository<Mmember, String> {

    @EntityGraph(attributePaths = {"roleSet"}, type=EntityGraph.EntityGraphType.LOAD)
    @Query("SELECT m FROM Mmember m where m.socialLogin = :social and m.email = :email")
    Optional<Mmember> findByEmail(@Param("email") String email, @Param("social") boolean social);

}
