import { Fragment, useState } from "react";
import InputMessage from "./InputMessage";
import MessageList from "./MessageList";

const Chats = () =>{
  const [userMessages, setUserMessages] = useState([]);

  const addMessageHandler = message => {
    setUserMessages(prevMessages => [...prevMessages, {id: Math.random.toString(), ...message}
    ])
  }

  return (
    <Fragment>
      <section>
        <MessageList messages={userMessages}/>
      </section>
      <InputMessage onAddMessage={addMessageHandler}/>
    </Fragment>
  )
}

export default Chats;