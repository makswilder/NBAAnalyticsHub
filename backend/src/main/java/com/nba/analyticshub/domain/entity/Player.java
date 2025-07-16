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
    private Integer g;

    @Column(name = "games_starts")
    private Integer gs;

    @Column(name = "minutes_played")
    private Integer mp;

    @Column(name = "field_goals")
    private Integer fg;

    @Column(name = "three_points")
    private Integer threeP;

    @Column(name = "two_points")
    private Integer twoP;

    @Column(name = "assists")
    private Integer ast;

    @Column(name = "steals")
    private Integer stl;

    @Column(name = "blocks")
    private Integer blk;

    @Column(name = "turnovers")
    private Integer tov;

    @Column(name = "points")
    private Integer pts;

    @Column(name = "team_name")
    private String team;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return Objects.equals(id, player.id) && Objects.equals(name, player.name) && Objects.equals(nation, player.nation) && Objects.equals(age, player.age) && Objects.equals(position, player.position) && Objects.equals(g, player.g) && Objects.equals(gs, player.gs) && Objects.equals(mp, player.mp) && Objects.equals(fg, player.fg) && Objects.equals(threeP, player.threeP) && Objects.equals(twoP, player.twoP) && Objects.equals(ast, player.ast) && Objects.equals(stl, player.stl) && Objects.equals(blk, player.blk) && Objects.equals(tov, player.tov) && Objects.equals(pts, player.pts) && Objects.equals(team, player.team);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, nation, age, position, g, gs, mp, fg, threeP, twoP, ast, stl, blk, tov, pts, team);
    }
}
