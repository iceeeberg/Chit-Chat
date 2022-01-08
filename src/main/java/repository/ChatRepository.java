package repository;

import com.chitchat.messenger.entity.Chats;
import java.util.*;
import com.chitchat.messenger.entity.Users;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chats, Integer> {
  List<Chats> findByUser(Users user);
}
