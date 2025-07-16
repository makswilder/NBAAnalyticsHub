package com.nba.analyticshub.repository;

import com.nba.analyticshub.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PlayerRepository extends JpaRepository<Player, UUID> {

    Optional<Player> findByName(String name);
    List<Player> findByTeam(String team);
    List<Player> findByPosition(String position);
    List<Player> findByTeamAndPosition(String team, String position);
    List<Player> findByNationContainingIgnoreCase(String nation);
}
