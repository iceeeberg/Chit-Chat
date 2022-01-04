import React, { Fragment, useState } from "react";

const InputMessage = (props) => {
  const [message, setMessage] = useState("");

  const submitMessageHandler = (e) => {
    e.preventDefault();
    props.onAddMessage({ message: message });
    setMessage("");
  };

  return (
    <Fragment>
      <form onSubmit={submitMessageHandler}>
        <div class="input-group mb-1 fixed-bottom">
          <input
            class="form-control"
            placeholder="Send Message..."
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            class="btn btn-primary"
            onClick={submitMessageHandler}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputMessage;
