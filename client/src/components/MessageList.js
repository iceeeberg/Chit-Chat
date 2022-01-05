import { Fragment } from "react";
import { ChatData } from "./ChatData";

const MessageList = (props) => {
  return (
    <Fragment>
      <ul>
        {props.messages.map((msg) => (
          <p key={msg.id}>
            <span>
              {ChatData.map((val) => (
                <p  key={val}>
                  {" "}
                  {val.name}: {msg.message}
                </p>
              ))}
            </span>
          </p>
        ))}
      </ul>
    </Fragment>
  );
};

export default MessageList;
