package com.example.demo.User;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
        return args -> {
        List<User> list = new LinkedList<>();
        Collections.addAll(list,new User("sachithra","password")
        , new User("samantha","password")
        ,new User("samantha2","password"));
userRepository.saveAll(list);
        };

    }
}
