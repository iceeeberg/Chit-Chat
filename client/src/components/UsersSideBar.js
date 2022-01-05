import React from "react";
import { Fragment } from "react";
import "../App.css";
import { ChatData } from "./ChatData";

const UsersSideBar = () => {
  return (
    <Fragment>
      <div id="sidebar">
        <ul>
          <h2 className="text-white">Users</h2>
          <hr id="row" />
          {ChatData.map((val, key) => {
            return <p className="text-white" key={key}>
              <span>{val.name}</span>
            </p>;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default UsersSideBar;
