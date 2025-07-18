package com.nba.analyticshub.config;

import com.nba.analyticshub.domain.entity.User;
import com.nba.analyticshub.repository.UserRepository;
import com.nba.analyticshub.security.JwtAuthFilter;
import com.nba.analyticshub.security.NbaUserDetailsService;
import com.nba.analyticshub.service.AuthService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;


@Configuration
public class SecurityConfig {

    @Bean
    public JwtAuthFilter jwtAuthFilter(AuthService authService) {
        return new JwtAuthFilter(authService);
    }

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        NbaUserDetailsService nbaUserDetailsService = new NbaUserDetailsService(userRepository);

        String email = "user1@test.com";
        userRepository.findByEmail(email).orElseGet(() -> {
            User newUser = User.builder()
                    .name("Test User")
                    .email(email)
                    .password(passwordEncoder().encode("password"))
                    .build();
            return userRepository.save(newUser);
        });

        return  nbaUserDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http,
            JwtAuthFilter jwtAuthFilter,
            CorsConfigurationSource corsConfigurationSource) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/api/v1/auth/register").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/v1/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/name").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/top").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/team").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/position").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/team-position").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/nation").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/asc").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/sort/desc").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/players/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/v1/players/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/api/v1/players/**").authenticated()
                        .requestMatchers(HttpMethod.DELETE, "/api/v1/players/**").authenticated()
                        .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                ).addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
