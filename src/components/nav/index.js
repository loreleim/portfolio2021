import React from "react";
import { ReactComponent as LoeSVG } from "../../images/loe-logo.svg";
import { ReactComponent as BentoSVG } from "../../images/bento.svg";
import { ReactComponent as WorkSVG } from "../../images/folder.svg";
import { ReactComponent as AboutSVG } from "../../images/profile.svg";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className={style.siteLogo}>
          <Link to={"/"}>
            <LoeSVG />
          </Link>
        </div>
        <nav className={style.mainNav}>
          <ul>
            <li>
              <Link to={"/"} className={style.navLogo}>
                <LoeSVG />
              </Link>
            </li>
            <li>
              <Link to={"/featured-projects"}>
                <WorkSVG />
              </Link>
            </li>
            <Link to={"/about"}>
              <li>
                <AboutSVG></AboutSVG>
              </li>
            </Link>
            <li onClick={this.props.drawerClickHandler}>
              <BentoSVG />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
