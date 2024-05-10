package com.example.demo.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.Period;

@Data
@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @SequenceGenerator(name = "student_sequence",
    sequenceName = "student_sequence",
    allocationSize = 1)
    @GeneratedValue(
            strategy =  GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
@Column(name = "id")
    private Long id;
    @Column(name = "name",unique = true)
    private String name;
    @Column(name = "password")
    private String password;

public User(String name, String password){
this.name = name;
this.password = password;
}


}
