import { Fragment } from "react"


const MessageList = (props) => {
  return (
    <Fragment>
      <h1 class="text-center">Dummy GroupChat</h1>
      <ul>
        {props.messages.map(msg =>(
          <p key={msg.id}>
            <span >User: {msg.message}</span>
            </p>
        ))}
      </ul>
    </Fragment>
  )
}

export default MessageList