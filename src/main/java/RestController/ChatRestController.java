package RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.chitchat.messenger.entity.Users;
import com.chitchat.messenger.repository.UsersRepository;

@RestController
@CrossOrigin
@RequestMapping
public class ChatRestController {

  public ChatRestController(){}

  @Autowired
  UsersRepository usersRepository;

  @GetMapping("users")
  public List<Users>getUsers(){

    List<Users> users = usersRepository.findAll();

    return users;
  }

  @GetMapping("users/{id}")
  public Users getUserById(@PathVariable("id") int id){

    Users user = usersRepository.findById(id).orElseThrow();

    return user;
  }

  @PostMapping("/users")
  public Users addUser(Users user){
    usersRepository.save(user);

    return user;
  }
}
