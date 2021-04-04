import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class Featured extends React.Component {
  render() {
    return (
      <div className={style.sketchbookContainer}>
        {store.projects.Featured.map((Featured) => (
          <section key={Featured.name} className={style.projectCard}
          onClick={(event) => {
            event.preventDefault();
            window.open(Featured.github);
          }}>
              <div className={style.imageCrop}>
                <img src={Featured.image} />
              </div>
              <div className={style.overlay}></div>
              <div className={style.projectDetails}>
                <h4>{Featured.name}</h4>
                <h5>{Featured.collab}</h5>
              </div>
          </section>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
