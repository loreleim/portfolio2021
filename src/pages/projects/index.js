import React from "react";
import style from "./index.module.scss";
import store from "../../database";

class Projects extends React.Component {
  render() {
    return (
      <body className={style.bodyContainer}>
        <h1>Projects</h1>
        <div className={style.spacer} />
      </body>
    );
  }
}

export default Projects;
