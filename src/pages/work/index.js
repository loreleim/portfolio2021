import React from "react";
import style from "./index.module.scss";
import Featured from "./featured";
import Programming from "./programming";
import Resources from "./resources";
import UX from "./ux";
import {Helmet} from "react-helmet";

class Sandbox extends React.Component {
  state = {
    workShown: false,
    uxShown: false,
    resourcesShown: false,
    featuredShown: true,
    pageTitle: "Currently Featured",
  };

  renderFeatured() {
    return <Featured />;
  }

  renderProg() {
    return <Programming />;
  }

  renderUX() {
    return <UX />;
  }

  renderResources() {
    return <Resources />;
  }

  showProgramming = (e) => {
    const name = e.target.name;
    if (name === "prog") {
      this.setState({
        featuredShown: false,
        workShown: true,
        uxShown: false,
        resourcesShown: false,
        pageTitle: "Code",
      });
      this.renderProg();
    }
    if (name === "ux") {
      this.setState({
        featuredShown: false,
        workShown: false,
        uxShown: true,
        resourcesShown: false,
        pageTitle: "UX",
      });
      this.renderUX();
    }
    if (name === "resources") {
      this.setState({
        featuredShown: false,
        workShown: false,
        uxShown: false,
        resourcesShown: true,
        pageTitle: "Resources",
      });
      this.renderResources();
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Work</title>
          <meta name="description" content="Featured works of 2021"/>
        </Helmet>
        <section className={style.workContainer}>
          <h1>{this.state.pageTitle}</h1>
          <div className={style.filterContainer}>
            <button name="prog" onClick={this.showProgramming}>
              Code
            </button>
            <button name="ux" onClick={this.showProgramming}>
              UX
            </button>
            <button name="resources" onClick={this.showProgramming}>
              Resources
            </button>
          </div>
          {this.state.featuredShown && this.renderFeatured()}
          {this.state.workShown && this.renderProg()}
          {this.state.uxShown && this.renderUX()}
          {this.state.resourcesShown && this.renderResources()}
        </section>
      </div>
    );
  }
}

export default Sandbox;
