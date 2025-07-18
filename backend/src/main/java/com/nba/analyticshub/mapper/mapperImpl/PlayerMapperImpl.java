package com.nba.analyticshub.mapper.mapperImpl;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.domain.entity.Player;
import com.nba.analyticshub.mapper.PlayerMapper;
import org.springframework.stereotype.Component;

@Component
public class PlayerMapperImpl implements PlayerMapper {

    @Override
    public PlayerDto toDto(Player player) {
        return PlayerDto.builder()
                .id(player.getId())
                .name(player.getName())
                .nation(player.getNation())
                .age(player.getAge())
                .position(player.getPosition())
                .gamesPlayed(player.getGamesPlayed())
                .gameStarts(player.getGameStarts())
                .minutesPlayed(player.getMinutesPlayed())
                .fieldGoals(player.getFieldGoals())
                .threePoints(player.getThreePoints())
                .twoPoints(player.getTwoPoints())
                .assists(player.getAssists())
                .steals(player.getSteals())
                .blocks(player.getBlocks())
                .turnovers(player.getTurnovers())
                .points(player.getPoints())
                .team(player.getTeam())
                .build();
    }

    @Override
    public Player fromCreateRequest(CreatePlayerRequest request) {
        return Player.builder()
                .name(request.getName())
                .nation(request.getNation().toUpperCase())
                .age(request.getAge())
                .position(request.getPosition())
                .assists(request.getAssists())
                .points(request.getPoints())
                .team(request.getTeam())
                .blocks(request.getBlocks())
                .threePoints(request.getThreePoints())
                .twoPoints(request.getTwoPoints())
                .minutesPlayed(request.getMinutesPlayed())
                .gameStarts(request.getGameStarts())
                .fieldGoals(request.getFieldGoals())
                .steals(request.getSteals())
                .turnovers(request.getTurnovers())
                .gamesPlayed(request.getGamesPlayed())
                .build();
    }
}
