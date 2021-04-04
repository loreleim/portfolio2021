import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class NavOverlay extends React.Component {
  render() {
    return (
      <div>
        <nav
          className={style.mainNav}
          style={{
            visibility: this.props.visibility,
            opacity: this.props.opacity,
            height: this.props.height,
          }}
        >
          <div className={style.centerLi}>
          {store.projects.Featured.map((Featured) => (
            <li onClick={(event) => {event.preventDefault();window.open(Featured.github)}}>{Featured.name}</li>
          ))}
          </div>
          {/*<div className={style.gridContainer}>
            {store.projects.Featured.map((Featured) => (
                <div className={style.projectThumbs} 
                onClick={(event) => {
                  event.preventDefault();
                  window.open(Featured.github);
                }}
                style={{ backgroundImage: "url(" + Featured.image + ")", backgroundSize: "cover" }}>
                </div>
              ))}
              </div>*/}
        </nav>
      </div>
    );
  }
}