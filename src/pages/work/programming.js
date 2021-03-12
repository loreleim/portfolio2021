import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class Programming extends React.Component {
  render() {
    return (
      <div className={style.sketchbookContainer}>
        {store.workData.ProgArray.map((ProgArray) => (
          <div key={ProgArray.name} className={style.projectCard} 
          onClick={(event) => {
            event.preventDefault();
            window.open(ProgArray.github);
          }}>
            <div className={style.imageCrop}>
              <img src={ProgArray.image} />
            </div>
            <div className={style.overlay}></div>
            <div className={style.projectDetails}>
              <h4>{ProgArray.name}</h4>
              <h5>{ProgArray.medium}</h5>
            </div>
          </div>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
