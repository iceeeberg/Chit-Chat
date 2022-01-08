package com.chitchat.messenger.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.util.*;

@Entity
public class Chats {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int Id;
  private List<String> messages;

  public int getId() {
    return Id;
  }
  public void setId(int id) {
    Id = id;
  }
  public List<String> getMessages() {
    return messages;
  }
  public void setMessages(List<String> messages) {
    this.messages = messages;
  }

}
