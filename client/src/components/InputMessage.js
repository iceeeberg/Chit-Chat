import React, { Fragment, useState } from "react";

const InputMessage = () => {
  const[message, setMessage] = useState('');

  return (
    <Fragment>
      <form>
        <input type="text" onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </Fragment>
  )
}

export default InputMessage;