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
        <div className="input-group fixed-bottom">
          <input
            className="form-control"
            placeholder="Send Message..."
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="btn btn-primary"
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
