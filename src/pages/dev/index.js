import React from "react";
import style from "./index.module.scss";
import Featured from "./featured";
import FullStack from "./featured";
import WIP from "./featured";
import {Helmet} from "react-helmet";

class Dev extends React.Component {
  state = {
    workShown: false,
    uxShown: false,
    resourcesShown: false,
    featuredShown: true,
    pageTitle: "Featured Projects",
  };

  renderFeatured() {
    return <Featured />;
  }

  renderFullStack() {
    return <FullStack />;
  }

  renderWIP() {
    return <WIP />;
  }

  showProgramming = (e) => {
    const name = e.target.name;
    if (name === "featured") {
      this.setState({
        featuredShown: false,
        workShown: true,
        uxShown: false,
        resourcesShown: false,
        pageTitle: "Featured Projects",
      });
      this.renderFeatured();
    }
    if (name === "fullstack") {
      this.setState({
        featuredShown: false,
        workShown: false,
        uxShown: true,
        resourcesShown: false,
        pageTitle: "Full Stack",
      });
      this.renderFullStack();
    }
    if (name === "wip") {
      this.setState({
        featuredShown: false,
        workShown: false,
        uxShown: false,
        resourcesShown: true,
        pageTitle: "WIP",
      });
      this.renderWIP();
    }
  };

  render() {
    console.log("Page Title: " + this.state.pageTitle);
    return (
      <div>
        <Helmet>
          <title>Development</title>
          <meta name="description" content="Lorelei Miyamura's Development Work"/>
        </Helmet>
        <section className={style.workContainer}>
          <h1>{this.state.pageTitle}</h1>
          <div className={style.filterContainer}>
            <button name="featured" onClick={this.showProgramming} className={this.state.pageTitle === "Featured Projects" ? style.selected: ""}>
              Featured
            </button>
            <button name="fullstack" onClick={this.showProgramming} className={this.state.pageTitle === "Full Stack" ? style.selected: ""}>
              Full Stack
            </button>
            <button name="wip" onClick={this.showProgramming} className={this.state.pageTitle === "WIP" ? style.selected: ""}>
              WIP
            </button>
          </div>
          {this.state.featuredShown && this.renderFeatured()}
          {this.state.workShown && this.renderFeatured()}
          {this.state.uxShown && this.renderFullStack()}
          {this.state.resourcesShown && this.renderWIP()}
        </section>
      </div>
    );
  }
}

export default Dev;
