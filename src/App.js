import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import style from "./style/index.scss";
import Nav from "./components/nav";
import NavOverlay from "./components/nav-overlay";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Dev from "./pages/dev";
import UiUx from "./pages/uiux";
import ProjectTemplate from "./components/project-template";

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHit: false,
        butthole: 0,
        potato: "hidden",
        rice: "0%",
      };
    }

    componentDidUpdate(prevLocation) {
      if (this.props.location.pathname !== prevLocation.location.pathname) {
        this.setState({isHit: false}, () => this.navCheck());
      }
    }

    toggleOverlay = () => {
      this.setState({isHit: !this.state.isHit}, () => this.navCheck());
    };

    navCheck = () => {
      if (this.state.isHit === true) {
        this.setState({ butthole: 1 });
        this.setState({ potato: "visible" });
        this.setState({ rice: "100vh" });
      }
      if (this.state.isHit === false ) {
        this.setState({ butthole: 0 });
        this.setState({ potato: "hidden" });
        this.setState({ rice: "0%" });
      }
    }

    render() {
      return (
        <div className={style.mainContainer}>
          <Nav drawerClickHandler={this.toggleOverlay} />
          <NavOverlay
            opacity={this.state.butthole}
            visibility={this.state.potato}
            height={this.state.rice}
          ></NavOverlay>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/dev" component={Dev}></Route>
            <Route path="/uiux" component={UiUx}></Route>
            <Route path="/featured-projects" component={Projects}></Route>
            <Route path="/projects/:projectId" component={ProjectTemplate} />
          </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;
