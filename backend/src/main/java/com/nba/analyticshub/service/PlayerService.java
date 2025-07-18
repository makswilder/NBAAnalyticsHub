package com.nba.analyticshub.service;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.domain.entity.Player;

import java.util.List;
import java.util.UUID;

public interface PlayerService {
    List<PlayerDto> getAllPlayers();
    List<PlayerDto> getTopScorers();
    List<PlayerDto> getPlayersSortedByAsc();
    List<PlayerDto> getPlayersSortedByDesc();
    List<PlayerDto> getPlayerByTeam(String team);
    List<PlayerDto> getPlayerByPosition(String position);
    List<PlayerDto> getPlayerByTeamAndPosition(String team, String position);
    List<PlayerDto> getPlayersByNationContainingIgnoreCase(String nation);
    Player getPlayerById(UUID id);

    PlayerDto createPlayer(CreatePlayerRequest request);
    PlayerDto updatePlayer(UUID id, CreatePlayerRequest request);
    void deletePlayer(UUID id);
}
