import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class P2P extends React.Component {
  render() {
    return (
      <div>
        <h1>Passion to Purpose</h1>
        <div className={style.spacer} />
      </div>
    );
  }
}
