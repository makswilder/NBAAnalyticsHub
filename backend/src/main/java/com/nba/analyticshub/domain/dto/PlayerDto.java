package com.nba.analyticshub.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDto {
    private UUID id;
    private String name;
    private String nation;
    private Integer age;
    private String position;
    private Integer gamesPlayer;
    private Integer gameStarts;
    private Integer minutesPlayed;
    private Integer fieldGoals;
    private Integer threePoints;
    private Integer twoPoints;
    private Integer assists;
    private Integer steals;
    private Integer blocks;
    private Integer turnovers;
    private Integer points;
    private String team;
}
