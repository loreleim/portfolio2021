"use client"; 
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from "next/image";
import fries from "../../images/fries.svg";
import pinkright from  "../../images/pink1.svg";
import pinkleft from "../../images/pink2.svg";
import circle from "../../images/circle.svg";
import Link from 'next/link';

export default function Hero() {

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
      className="heroContainer"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      {/* Fries */}
      <animated.div
        className="fries absolute bottom-[10vh] right-0 w-[20vh] lg:w-[50vh]"
        style={{ transform: props.xy.to(friesTransform) }}
      >
        <Image src={fries} alt="Fries" />
      </animated.div>
      {/* Pink Right */}
      <animated.div
        className="pinkRight absolute top-0 right-0 w-[20vh] lg:w-[50vh]"
        style={{ transform: props.xy.to(pinkRTransform) }}
      >
        <Image src={pinkright} alt="Pink element, right" />
      </animated.div>
      <animated.div
        className="pinkLeft absolute bottom-0 left-0 w-[20vh] lg:w-[50vh]"
        style={{ transform: props.xy.to(pinkLTransform) }}
      >
        <Image src={pinkleft} alt="Pink element, left" />
      </animated.div>
      {/*bottom-[15%]*/}
      <animated.div
        className="flex align-center justify-center relative w-screen h-screen mx-auto bottom-[5%] lg:bottom-[15%] lg:h-auto"
        style={{ transform: props.xy.to(circleTransform) }}
      >
        <Image className='w-[100vw] mx-auto lg:w-[70vw]' src={circle} alt="Circle" />
      </animated.div>
      <div className="heroText">
        <div className="heroCentered">
          <div className='mb-2'>
          <h1 className='text-5xl lg:text-7xl'>Lorelei Miyamura</h1>
          <h3 className='text/[1rem] tracking-wider mt-5 mb-6 lg:tracking-widest lg:text-3xl'>Interaction Designer</h3>
          </div>
          <Link href="/work" className="text-[.5rem] tracking-wide pt-2 pb-2 px-5 border-[1px] border-[var(--theme-black)] dark:border-white rounded-full uppercase hover:bg-[var(--theme-pink)] hover:border-[var(--theme-pink)]">
            View Work →
          </Link>
          <div className="arrowContainer">
          </div>
        </div>
      </div>
    </section>
  );

}