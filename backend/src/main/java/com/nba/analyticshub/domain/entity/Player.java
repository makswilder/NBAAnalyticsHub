package com.nba.analyticshub.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;
import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "player_statistic")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "player_name")
    private String name;

    @Column(name = "nation")
    private String nation;

    @Column(name = "age")
    private Integer age;

    @Column(name = "position")
    private String position;

    @Column(name = "games_played")
    private Integer gamesPlayed;

    @Column(name = "games_starts")
    private Integer gameStarts;

    @Column(name = "minutes_played")
    private Integer minutesPlayed;

    @Column(name = "field_goals")
    private Integer fieldGoals;

    @Column(name = "three_points")
    private Integer threePoint;

    @Column(name = "two_points")
    private Integer twoPoint;

    @Column(name = "assists")
    private Integer assists;

    @Column(name = "steals")
    private Integer steals;

    @Column(name = "blocks")
    private Integer blocks;

    @Column(name = "turnovers")
    private Integer turnovers;

    @Column(name = "points")
    private Integer points;

    @Column(name = "team_name")
    private String team;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return Objects.equals(id, player.id) && Objects.equals(name, player.name) && Objects.equals(nation, player.nation) && Objects.equals(age, player.age) && Objects.equals(position, player.position) && Objects.equals(gamesPlayed, player.gamesPlayed) && Objects.equals(gameStarts, player.gameStarts) && Objects.equals(minutesPlayed, player.minutesPlayed) && Objects.equals(fieldGoals, player.fieldGoals) && Objects.equals(threePoint, player.threePoint) && Objects.equals(twoPoint, player.twoPoint) && Objects.equals(assists, player.assists) && Objects.equals(steals, player.steals) && Objects.equals(blocks, player.blocks) && Objects.equals(turnovers, player.turnovers) && Objects.equals(points, player.points) && Objects.equals(team, player.team);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, nation, age, position, gamesPlayed, gameStarts, minutesPlayed, fieldGoals, threePoint, twoPoint, assists, steals, blocks, turnovers, points, team);
    }
}
