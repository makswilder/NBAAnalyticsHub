package com.nba.analyticshub.mapper.mapperImpl;

import com.nba.analyticshub.domain.dto.UserDto;
import com.nba.analyticshub.domain.entity.User;
import com.nba.analyticshub.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }
}
