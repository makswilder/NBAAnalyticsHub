package com.nba.analyticshub.controller;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.service.PlayerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/players")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @PostMapping
    private ResponseEntity<PlayerDto> createPlayer(
            @Valid @RequestBody CreatePlayerRequest request
    ) {
        PlayerDto createdPlayer = playerService.createPlayer(request);
        return new  ResponseEntity<>(
                createdPlayer,
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    private ResponseEntity<PlayerDto> updatePlayer(
            @PathVariable UUID id,
            @Valid @RequestBody CreatePlayerRequest request
    ) {
        PlayerDto updatedPlayer = playerService.updatePlayer(id, request);
        return new  ResponseEntity<>(
                updatedPlayer,
                HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<PlayerDto> deletePlayer(
            @PathVariable UUID id
    ) {
        playerService.deletePlayer(id);
        return ResponseEntity.noContent().build();
    }
}