import React from "react";
import style from "./index.module.scss";
import store from "../../database";

export default class Equity extends React.Component {
  render() {
    return (
      <div className={style.equityContainer}>
        <section className={style.heroIndividuals}>
          <img src={require("../../images/equity-thumbnail.jpg")} />
          <h1>Equity Framework</h1>
          <p>dissolving barriers to entry for reading and implementing equitable practices.</p>
        </section>
        <section className={style.overviewContainer}>
          <div className={style.bits}>
            <h2>Timeline</h2>
            <p>August 2019 - September 2020</p>
          </div>
          <div className={style.bits}>
            <h2>Role</h2>
            <p>Equity Graphic Designer</p>
          </div>
        </section>
        {store.details.Equity.map((Equity, index) => (
          <section key={Equity.section} className={style.detailsContainer}>
            <div className={style.textContainer}>
              <h4>{Equity.title}</h4>
              <p>{Equity.subtext}</p>
              <img src={Equity.image} />
            </div>
            {index === 1 ? <section className={style.spacerContainer}>
                <div className={style.bits}>
                  <h2>Needfinding</h2>
                  <p>To best inform the redesign of the academic writing, needfinding research was done to understand, client, audience, and user needs.</p>
                </div>
              </section> : null}
              {index === 8 ? <section className={style.spacerContainer}>
                <div className={style.bits}>
                  <h2>Journey Mapping</h2>
                  <p>Exploring the roles of our user, audience, and client.</p>
                </div>
              </section> : null}
              {index === 11 ? <section className={style.spacerContainer}>
                <div className={style.bits}>
                  <h2>Iteration</h2>
                  <p>Based on our user research, we wanted to see the overlap between our stakeholder needs. All of these groups had common goals of equity awareness and implementing equity practices in the classroom. This influenced our ideation. We kept in mind our stakeholder needs as to design the best possible tool for them.</p>
                </div>
              </section> : null}
              {index === 14 ? <section className={style.spacerContainer}>
                <div className={style.bits}>
                  <h2>Implementation</h2>
                  <p>Sessy Designs</p>
                </div>
              </section> : null}
          </section>
        ))}
        <div className={style.spacer} />
      </div>
    );
  }
}
