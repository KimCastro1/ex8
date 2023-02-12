package com.castro.ex8.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
    private String email;
    private String password;
    private boolean socialLogin;
    private LocalDateTime regDate,modDate;

}
