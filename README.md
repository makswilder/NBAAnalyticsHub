# NBA Analytics Hub 🏀

NBA Player Analytics Hub is a full-stack web app built to help users explore detailed NBA player stats. It pulls data for 500+ players, stores it in a PostgreSQL database, and provides various filters and sorting options to analyze performance. The backend is built with Spring Boot and secured with JWT-based auth, while the frontend uses React for a clean and interactive UI. Regular users can browse data, while authorised users can create, update, and delete players.


<img width="1907" height="881" alt="Main Page" src="https://github.com/user-attachments/assets/97519cf6-853c-4c4b-bdf7-11fc8ec8f208" />


---

## Overview

NBA Analytics Hub enables:

- JWT-based authentication and role-based access control
- View and search NBA player stats
- Sort players by team, position, nationality, or score
- Auth User endpoints to manage player entries
- PostgreSQL persistence with UUIDs for IDs
- CORS-enabled frontend integration with React

---

## Architecture

- Backend: Spring Boot handles domain logic, authentication, authorization, and persistence.
- Frontend: React + Axios handles the UI and communicates with the backend.
- Database: PostgreSQL stores player and user data.

---

## Domain Model
![Domain Model](https://github.com/user-attachments/assets/9376564e-2e41-4acc-880e-f04ae483c6cd)

---

## Security

- Authentication: JWT token-based
- Authorization: User
- Public endpoints: Login, register, player listing
- Protected endpoints: Create, update, delete (auth user only)

## Tech Stack

| Layer         | Technology                    |
|---------------|-------------------------------|
| Language      | Java 21                       |
| Backend       | Spring Boot 3                 |
| Frontend      | React, Axios                  |
| Auth          | Spring Security, JWT          |
| Persistence   | Spring Data JPA               |
| Database      | PostgreSQL                    |
| Build Tool    | Maven                         |
| ID Strategy   | UUID                          |
| API Format    | RESTful (JSON)                |

---

## API Endpoints

| Method | Endpoint                            | Access         | Description                              |
|--------|-------------------------------------|----------------|------------------------------------------|
| POST   | `/api/v1/auth/register`             | Public         | Register a new user                      |
| POST   | `/api/v1/auth`                      | Public         | Login and receive JWT token              |
| GET    | `/api/v1/players`                   | Public         | Get all players                          |
| GET    | `/api/v1/players/sort/name`         | Public         | Sort players by name                     |
| GET    | `/api/v1/players/sort/top`          | Public         | Get top scoring players                  |
| GET    | `/api/v1/players/sort/team`         | Public         | Sort players by team                     |
| GET    | `/api/v1/players/sort/position`     | Public         | Sort players by position                 |
| GET    | `/api/v1/players/sort/team-position`| Public         | Sort players by team and position        |
| GET    | `/api/v1/players/sort/nation`       | Public         | Sort players by nationality              |
| GET    | `/api/v1/players/sort/asc`          | Public         | Sort players by ascending score          |
| GET    | `/api/v1/players/sort/desc`         | Public         | Sort players by descending score         |
| POST   | `/api/v1/players/`                  | Auth User Only | Create a new player                      |
| PUT    | `/api/v1/players/`                  | Auth User Only | Update an existing player                |
| DELETE | `/api/v1/players/**`                | Auth User Only | Delete a player by ID                    |


## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/makswilder/NBAAnalyticsHub.git
   cd NBAAnalyticsHub
2. Ensure PostgreSQL is running and accessible.
3. Create the required tables:
   -- Run the schema.sql from backend resources or your IDE
4. Start the backend:
   ```bash
   cd backend
   ./mvnw spring-boot:run
5. Start the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   
---

## Sample Payloads
### Register
   ```bash
   POST /api/v1/auth/register
   {
      "name": "LeBron James",
      "email": "lebron@lakers.com",
      "password": "goat23"
   }
```
### Login
```bash
POST /api/v1/auth/login
{
   "email": "lebron@lakers.com",
   "password": "goat23"
}
```
