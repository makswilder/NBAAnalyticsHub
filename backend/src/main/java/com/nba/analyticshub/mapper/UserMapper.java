package com.nba.analyticshub.mapper;

import com.nba.analyticshub.domain.dto.UserDto;
import com.nba.analyticshub.domain.entity.User;

public interface UserMapper {
    UserDto toDto(User user);
}
