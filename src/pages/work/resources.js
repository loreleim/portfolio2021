import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class Resources extends React.Component {
  render() {
    return (
      <div className={style.sketchbookContainer}>
        {store.workData.ResourcesArray.map((ResourcesArray) => (
          <a href={ResourcesArray.link} target="_blank">
            <div key={ResourcesArray.name} className={style.projectCard}>
                <div className={style.imageCrop}>
                  <img src={ResourcesArray.image} />
                </div>
              <div className={style.overlay}></div>
              <div className={style.projectDetails}>
                <h4>{ResourcesArray.name}</h4>
                <h5>{ResourcesArray.medium}</h5>
              </div>
            </div>
          </a>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
