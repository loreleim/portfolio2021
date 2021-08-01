import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

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
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/dev"}>Dev</Link></li>
            <li><Link to={"/uiux"}>UI/UX</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </div>
        </nav>
      </div>
    );
  }
}
