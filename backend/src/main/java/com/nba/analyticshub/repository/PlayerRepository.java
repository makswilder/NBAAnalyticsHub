package com.nba.analyticshub.repository;

import com.nba.analyticshub.domain.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PlayerRepository extends JpaRepository<Player, UUID> {

    @Query("SELECT p FROM Player p ORDER BY p.points DESC")
    List<Player> findTopScorer();

    @Query("SELECT p FROM Player p ORDER BY p.name ASC")
    List<Player> findAllByNameAsc();

    @Query("SELECT p FROM Player p ORDER BY p.name DESC")
    List<Player> findAllByNameDesc();

    Optional<Player> findByName(String name);
    List<Player> findByTeam(String team);
    List<Player> findByPosition(String position);
    List<Player> findByTeamAndPosition(String team, String position);
    List<Player> findByNationContainingIgnoreCase(String nation);
    List<Player> findByNameContainingIgnoreCase(String name);
}