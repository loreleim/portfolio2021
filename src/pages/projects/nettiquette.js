import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class Nettiquette extends React.Component {
  render() {
    return (
      <div>
        <h1>Nettiquette</h1>
        <div className={style.spacer} />
      </div>
    );
  }
}
