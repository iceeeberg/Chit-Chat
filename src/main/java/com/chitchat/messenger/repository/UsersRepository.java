package com.chitchat.messenger.repository;

import com.chitchat.messenger.entity.Users;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {
  
}
