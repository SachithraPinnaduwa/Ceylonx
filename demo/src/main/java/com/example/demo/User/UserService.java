package com.example.demo.User;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
    return  userRepository.findAll();
    }

    public User getUser(User user) {
        User usersearch = userRepository.findUserByName(user.getName());
        if (!Objects.equals(usersearch.getPassword(), user.getPassword())){
            throw new IllegalStateException("Password is incorrect");
        }
        if (usersearch == null){
             throw new IllegalStateException("User returned null");
        }
        return  usersearch;
    }

    @Transactional
    public void addNewUser(User user) {
       boolean exist =  userRepository.existsByName(user.getName());
        if (exist) {
            throw  new IllegalStateException("Name already taken");
        }
        userRepository.save(user);
    }

    @Transactional
    public  void  deleteUser(String name){
        boolean exist = userRepository.existsByName(name);
        if (!exist) {
            throw  new IllegalStateException("A student with this"+ name +" name does not exist");
        }
        userRepository.deleteByName(name);
    }
//
//    @Transactional
//    public void  updateStudent(User user){
//        boolean exist = userRepository.existsById(user.getId());
//        if (!exist) {
//            throw  new IllegalStateException("A student with this"+ user.getId() +" id does not exist");
//        }
//        Optional<User> st = userRepository.findById(user.getId());
//        if (user.getName() != st.get().getName()) {
//            st.get().setName(user.getName());
//        }
//        if (user.getEmail() != st.get().getEmail()) {
//            st.get().setEmail(user.getEmail());
//        }
//        userRepository.save(user);
//    }
}
