import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class UX extends React.Component {
  render() {
    return (
      <div className={style.sketchbookContainer}>
        {store.workData.UXArray.map((UXArray) => (
          <div key={UXArray.name} className={style.projectCard}>
            <div className={style.imageCrop}>
              <img src={UXArray.image} />
            </div>
            <div className={style.overlay}></div>
            <div className={style.projectDetails}>
              <h4>{UXArray.name}</h4>
              <h5>{UXArray.medium}</h5>
            </div>
          </div>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
