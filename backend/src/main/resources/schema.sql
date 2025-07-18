CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- player_statistic table
CREATE TABLE IF NOT EXISTS player_statistic (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_name VARCHAR(100) NOT NULL,
    nation VARCHAR(50),
    age INTEGER,
    position VARCHAR(50),
    games_played INTEGER,
    games_starts INTEGER,
    minutes_played INTEGER,
    field_goals INTEGER,
    three_points INTEGER,
    two_points INTEGER,
    assists INTEGER,
    steals INTEGER,
    blocks INTEGER,
    turnovers INTEGER,
    points INTEGER,
    team_name VARCHAR(100)
);