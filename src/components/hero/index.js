import React from "react";
import { useHistory } from "react-router-dom";
import {useSpring, animated} from "react-spring";
import { ReactComponent as Fries } from "../../images/fries.svg";
import { ReactComponent as PinkRight } from "../../images/pink1.svg";
import { ReactComponent as PinkLeft } from "../../images/pink2.svg";
import { ReactComponent as Circle } from "../../images/circle.svg";
import style from "../hero/index.module.scss";

export default function Hero() {
    const history = useHistory();
    const calc = (x, y) => [
      x - window.innerWidth / 2,
      y - window.innerHeight / 2
    ];
    const circleTransform = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
    const friesTransform = (x, y) => `translate3d(${x / -20}px,${y / -20}px,0)`;
    const pinkLTransform = (x, y) => `translate3d(0px,${y / -10}px,0)`;
    const pinkRTransform = (x, y) => `translate3d(${x / -100}px,${y / 20}px,0)`;
  
    const [props, set] = useSpring(() => ({
      xy: [0, 0],
      config: { mass: 50, tension: 1000, friction: 300 }
    }));
    return (
      <section
        className={style.heroContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={style.fries}
          style={{ transform: props.xy.interpolate(friesTransform) }}
        >
          <Fries />
        </animated.div>
        <animated.div
          className={style.pinkRight}
          style={{ transform: props.xy.interpolate(pinkRTransform) }}
        >
          <PinkRight />
        </animated.div>
        <animated.div
          className={style.pinkLeft}
          style={{ transform: props.xy.interpolate(pinkLTransform) }}
        >
          <PinkLeft />
        </animated.div>
        <animated.div
          className={style.containment}
          style={{ transform: props.xy.interpolate(circleTransform) }}
        >
          <Circle className={style.circle} />
        </animated.div>
        <div className={style.heroText}>
          <div className={style.heroCentered}>
            <h1>Lorelei Miyamura</h1>
            <h2>Interaction Designer</h2>
            <button onClick={() => history.push('/dev')} className={style.heroButton}>View Work →</button>
            <div className={style.arrowContainer}>
            </div>
          </div>
        </div>
      </section>
    );
  }