package com.nba.analyticshub.controller;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.service.PlayerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/players")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @GetMapping
    public ResponseEntity<List<PlayerDto>> getAllPlayers() {
        return ResponseEntity.ok(playerService.getAllPlayers());
    }

    @GetMapping("/sort/top")
    public ResponseEntity<List<PlayerDto>> getTopScorers() {
        return ResponseEntity.ok(playerService.getTopScorers());
    }

    @GetMapping("/sort/team")
    public ResponseEntity<List<PlayerDto>> getByTeam(@RequestParam String team) {
        return ResponseEntity.ok(playerService.getPlayerByTeam(team));
    }

    @GetMapping("/sort/position")
    public ResponseEntity<List<PlayerDto>> getByPosition(@RequestParam String position) {
        return ResponseEntity.ok(playerService.getPlayerByPosition(position));
    }

    @GetMapping("/sort/team-position")
    public ResponseEntity<List<PlayerDto>> getByTeamAndPosition(@RequestParam String team,  @RequestParam String position) {
        return ResponseEntity.ok(playerService.getPlayerByTeamAndPosition(team, position));
    }

    @GetMapping("/sort/asc")
    public ResponseEntity<List<PlayerDto>> getPlayersSortedByAsc() {
        return  ResponseEntity.ok(playerService.getPlayersSortedByAsc());
    }

    @GetMapping("/sort/desc")
    public ResponseEntity<List<PlayerDto>> getPlayersSortedByDesc() {
        return  ResponseEntity.ok(playerService.getPlayersSortedByDesc());
    }

    @PostMapping
    public ResponseEntity<PlayerDto> createPlayer(
            @Valid @RequestBody CreatePlayerRequest request
    ) {
        PlayerDto createdPlayer = playerService.createPlayer(request);
        return new  ResponseEntity<>(
                createdPlayer,
                HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerDto> updatePlayer(
            @PathVariable UUID id,
            @Valid @RequestBody CreatePlayerRequest request
    ) {
        PlayerDto updatedPlayer = playerService.updatePlayer(id, request);
        return new  ResponseEntity<>(
                updatedPlayer,
                HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PlayerDto> deletePlayer(
            @PathVariable UUID id
    ) {
        playerService.deletePlayer(id);
        return ResponseEntity.noContent().build();
    }
}