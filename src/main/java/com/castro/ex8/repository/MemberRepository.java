package com.castro.ex8.repository;

import com.castro.ex8.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {

    @Query("select m from Member m where m.email = :email and m.socialLogin = :socialLogin")
    Optional<Member> findByEmail(@Param("email") String email, @Param("socialLogin") boolean social);
    
}
