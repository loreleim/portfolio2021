import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class HiSurvey extends React.Component {
  render() {
    return (
      <div className={style.equityContainer}>
        <section className={style.projectTitle}>
          <img src={require("../../images/bus-thumbnail.jpg")} />
          <h1>Research Anthology</h1>
        </section>
        <section className={style.overviewContainer}>
          <div className={style.bits}>
            <h2>Project Overview</h2>
            <p>
              dissolving barriers to entry for reading and implementing
              equitable practices.
            </p>
          </div>
          <div className={style.bits}>
            <h2>Timeline</h2>
            <p>August 2019 - September 2020</p>
          </div>
          <div className={style.bits}>
            <h2>Role</h2>
            <p>UX Designer</p>
          </div>
        </section>
        <section className={style.challengeContainer}>
          <h2>The Challenge</h2>
          <p>{store.details.daBus[0].words}</p>
        </section>
        {store.details.Equity.map((Equity) => (
          <section key={Equity.section} className={style.detailsContainer}>
            <div className={style.textContainer}>
              <h4>{Equity.title}</h4>
              <p>{Equity.subtext}</p>
              <img src={Equity.image} />
            </div>
          </section>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
