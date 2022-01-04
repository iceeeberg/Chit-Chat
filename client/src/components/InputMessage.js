import React, { Fragment, useState } from "react";

const InputMessage = (props) => {
  const [message, setMessage] = useState("");

  const submitMessageHandler = e => {
    e.preventDefault();
    props.onAddMessage({message: message});
    setMessage('');
  }

  return (
    <Fragment>
      <form onSubmit={submitMessageHandler}>
        <input
          placeholder="Send Message..."
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={submitMessageHandler} type="submit">Send</button>
      </form>
    </Fragment>
  );
};

export default InputMessage;
