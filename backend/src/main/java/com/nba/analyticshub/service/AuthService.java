package com.nba.analyticshub.service;

import com.nba.analyticshub.domain.dto.RegisterRequest;
import com.nba.analyticshub.domain.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthService {
    UserDetails authenticate(String email, String password);
    String generateToken(UserDetails userDetails);
    UserDetails validateToken(String token);
    UserDto registerUser(RegisterRequest registerRequest);
}
