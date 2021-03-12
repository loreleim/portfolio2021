import React from "react";
import style from "./index.module.scss";
import { ReactComponent as GithubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedin.svg";
import {Helmet} from "react-helmet";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LikeList: [
        "posca markers",
        "spreadsheets",
        "topographic maps",
        "azuki beans",
        "pogs",
        "pocket notebooks",
        "menpachi",
        "monstera variegata",
        "mini meat jun",
        "hinode rice",
        "a good pair of pants",
        "chicago pigeons",
        "@wabashartdrop",
        "simple green",
        "baby dill pickles",
      ],
      one: 0,
      two: 1,
      three: 3,
    };
  }

  One = () => {
    const frick = ~~(Math.random() * this.state.LikeList.length);
    this.setState({ one: frick });
  };
  Two = () => {
    const frick = ~~(Math.random() * this.state.LikeList.length);
    this.setState({ two: frick });
  };
  Three = () => {
    const frick = ~~(Math.random() * this.state.LikeList.length);
    this.setState({ three: frick });
  };

  render() {
    const { LikeList, one, two, three } = this.state;
    return (
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About Lorelei, contact + more"/>
        </Helmet>
        <section className={style.aboutContainer}>
          <div className={style.centerAbout}>
          <h1>Aloha!</h1>
          <p>
            I'm Lorelei, an Interaction Designer from Oahu, HI. I nurture cross
            platform experiences through the lens of human centered design. I'm currently based in Portland, OR.
          </p>

          <h2 className={style.loveText}>
            I love{" "}
            <span role="img" aria-label="heart" className={style.loveEmoji}>
              &#128150;
            </span>
          </h2>
          <div className={style.likeContainer}>
            <div
              className={style.likeText}
              id={style.itemOne}
              onClick={this.One}
            >
              {LikeList[one]},
            </div>
            <div
              className={style.likeText}
              id={style.itemTwo}
              onClick={this.Two}
            >
              {LikeList[two]},
            </div>
            <div
              className={style.likeText}
              id={style.itemThree}
              onClick={this.Three}
            >
              &amp; {LikeList[three]}!
            </div>
          </div>

          <div className={style.socialContainer}>
            <a
              href="https://www.linkedin.com/in/lorelei-miyamura/"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.linkedin.com/in/lorelei-miyamura/");
              }}
            >
              <LinkedInSVG className={style.linkedin} />
            </a>
            <a
              href="https://github.com/loreleim"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://github.com/loreleim");
              }}
            >
              <GithubSVG className={style.github} />
            </a>
          </div>
          </div>

          <div className={style.spacer} />
        </section>
      </div>
    );
  }
}
