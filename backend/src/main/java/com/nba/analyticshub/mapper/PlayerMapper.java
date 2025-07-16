package com.nba.analyticshub.mapper;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.domain.entity.Player;

public interface PlayerMapper {
    PlayerDto toDto(Player player);
    Player fromCreateRequest(CreatePlayerRequest request);
}