import React, { Fragment, useState } from "react";

const InputMessage = () => {
  const [message, setMessage] = useState("");

  return (
    <Fragment>
      <form>
        <input
          placeholder="Send Message..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </Fragment>
  );
};

export default InputMessage;
