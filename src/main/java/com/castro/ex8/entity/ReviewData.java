package com.castro.ex8.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Immutable
@Table(name="data")
public class ReviewData {
    @Id
    private Long dataIdx;
    private Long movieIdx;
    private Long man,woman,teen,twenty,thirty,forty,fifty;
    private Long directing,story,visual,acting,ost;
    private float evaluation;
}
