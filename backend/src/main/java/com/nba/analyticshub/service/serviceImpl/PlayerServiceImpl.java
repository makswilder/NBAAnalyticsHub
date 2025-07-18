package com.nba.analyticshub.service.serviceImpl;

import com.nba.analyticshub.domain.dto.CreatePlayerRequest;
import com.nba.analyticshub.domain.dto.PlayerDto;
import com.nba.analyticshub.domain.entity.Player;
import com.nba.analyticshub.mapper.PlayerMapper;
import com.nba.analyticshub.repository.PlayerRepository;
import com.nba.analyticshub.service.PlayerService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;

    @Override
    public List<PlayerDto> getAllPlayers() {
        return playerRepository.findAll()
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getTopScorers() {
        return playerRepository.findTopScorer()
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getPlayersSortedByAsc() {
        return playerRepository.findAllByNameAsc()
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getPlayersSortedByDesc() {
        return playerRepository.findAllByNameDesc()
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getPlayerByTeam(String team) {
        return playerRepository.findByTeam(team)
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getPlayerByPosition(String position) {
        return playerRepository.findByPosition(position)
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public List<PlayerDto> getPlayerByTeamAndPosition(String team, String position) {
        return playerRepository.findByTeamAndPosition(team, position)
                .stream()
                .map(playerMapper::toDto)
                .toList();
    }

    @Override
    public Player getPlayerById(UUID id) {
        return playerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Player with id " + id + " not found"));
    }

    @Override
    public PlayerDto createPlayer(CreatePlayerRequest request) {
        if (playerRepository.findByName(request.getName()).isPresent()) {
            throw new ValidationException("Player already exists with name " + request.getName());
        }

        Player createdPlayer = playerRepository.save(playerMapper.fromCreateRequest(request));
        return playerMapper.toDto(createdPlayer);
    }

    @Override
    public PlayerDto updatePlayer(UUID id, CreatePlayerRequest request) {
        Player existingPlayer = playerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Player with id " + id + " not found"));

        existingPlayer.setName(request.getName());
        existingPlayer.setNation(request.getNation());
        existingPlayer.setAge(request.getAge());
        existingPlayer.setTeam(request.getTeam());
        existingPlayer.setPosition(request.getPosition());
        existingPlayer.setAssists(request.getAssists());
        existingPlayer.setBlocks(request.getBlocks());
        existingPlayer.setFieldGoals(request.getFieldGoals());
        existingPlayer.setThreePoints(request.getThreePoints());
        existingPlayer.setTwoPoints(request.getTwoPoints());
        existingPlayer.setPoints(request.getPoints());

        Player updatedPlayer = playerRepository.save(existingPlayer);
        return playerMapper.toDto(updatedPlayer);
    }

    @Override
    @Transactional // <- I am not sure, we need to use this annotation or no
    public void deletePlayer(UUID id) {
        Player player = playerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Player not found with id: " + id));

        playerRepository.delete(player);
    }
}
