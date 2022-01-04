import { Fragment } from "react"

const MessageList = (props) => {
  return (
    <Fragment>
      <h1>Dummy GroupChat</h1>
      <ul>
        {props.messages.map(msg =>(
          <li key={msg.id}>
            <span>{msg.message}</span>
            </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default MessageList