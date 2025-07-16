package com.nba.analyticshub.domain.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatePlayerRequest {

    @NotBlank(message = "Player name must be provided!")
    @Size(min = 2, max = 75, message = "Player name must be between {min} and {max} characters")
    private String name;

    @NotBlank(message = "Nationality must be provided!")
//    @Size(min = 2, max = 3, message = "Nationality must be between {min} and {max} characters")
    @Pattern(regexp = "^[A-Z]{3}$", message = "Nationality must be a 3 uppercase letters country code like 'HUN'")
    private String nation;

    @NotNull(message = "Age must be provided")
    @Min(value = 18, message = "Age must be at least {value}")
    @Max(value = 55, message = "Age must not exceed {value}")
    private Integer age;

    @NotBlank(message = "Position must be provided!")
    @Pattern(regexp = "^(PG|SG|SF|PF|C)$", message = "Position must be: PG, SG, SF, PF, C")
    private String position;

    @NotBlank(message = "Team name must be provided!")
    @Size(min = 3, max = 75, message = "Team name must be between {min} and {max} characters")
    @Pattern(regexp = "^[A-Za-z0-9\\s-]+$", message = "Team name can only contain letters, numbers, spaces and hyphens")
    private String team;

    @Min(value = 0, message = "Points cannot be negative")
    private Integer points;

    @Min(value = 0, message = "Assists cannot be negative")
    private Integer assists;

    @Min(value = 0, message = "Blocks cannot be negative")
    private Integer blocks;

    @Min(value = 0, message = "3-points shots made cannot be negative")
    private Integer threePoints;

    @Min(value = 0, message = "2-points shots made cannot be negative")
    private Integer twoPoints;
}
