import { Fragment, useState } from "react";
import InputMessage from "./InputMessage";
import MessageList from "./MessageList";
import "../App.css";

const Chats = () =>{
  const [userMessages, setUserMessages] = useState([]);

  const addMessageHandler = message => {
    setUserMessages(prevMessages => [...prevMessages, {id: Math.random.toString(), ...message}
    ])
  }

  return (
    <Fragment>
      <div id="messages">
        <MessageList messages={userMessages}/>
      </div>
      <InputMessage onAddMessage={addMessageHandler}/>
    </Fragment>
  )
}

export default Chats;