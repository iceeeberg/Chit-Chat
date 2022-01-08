package com.chitchat.messenger.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;

import java.util.*;

@Entity
public class Users {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int Id;
  @NonNull
  private String userName;
  @NonNull
  private String passWord;
  @OneToMany(mappedBy = "user")
  @JoinColumn(name="chat_id")
  private List<Chats> chats;

  public int getId() {
    return Id;
  }
  public void setId(int id) {
    Id = id;
  }
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  public String getPassWord() {
    return passWord;
  }
  public void setPassWord(String passWord) {
    this.passWord = passWord;
  }
  public List<Chats> getChats() {
    return chats;
  }
  public void setChats(List<Chats> chats) {
    this.chats = chats;
  }

  

}
