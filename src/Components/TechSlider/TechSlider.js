import { useState } from "react";
import styles from "./TechSlider.module.css";

import figmaImg from "../../images/tech-slider-figma.svg";
import framerImg from "../../images/tech-slider-framer.svg";
import webflowImg from "../../images/tech-slider-webflow.svg";
import wordpressImg from "../../images/tech-slider-wordpress.svg";
import shopifyImg from "../../images/tech-slider-shopify.svg";
import reactImg from "../../images/tech-slider-react.svg";
import nextjsImg from "../../images/tech-slider-nextjs.svg";

const TechSlider = () => {
  var [scrollValue, setScrollValue] = useState(0);
  var max = 0;
  var min = -1400;

  function animateSlider() {
    var scroll = scrollValue;
    if (scroll > min) {
      scroll -= 1;
    } else {
      scroll = 0;
    }
    setScrollValue(scroll);
    // console.log(scrollValue);
    requestAnimationFrame(animateSlider);
  }

  window.requestAnimationFrame(animateSlider);

  return (
    <div>
      <div className={styles.techSlider}>
        <div className={styles.brix}>
          <div
            className={styles.wContainer}
            style={{ transform: `translateX(${scrollValue}px)` }}
            // style={{ transfrom: `translate3d(${100}px, 0,0)` }}
          >
            <div className={styles.wLayoutGrid}>
              <img src={figmaImg}></img>
              <img src={framerImg}></img>
              <img src={webflowImg}></img>
              <img src={wordpressImg}></img>
              <img src={shopifyImg}></img>
              <img src={reactImg}></img>
              <img src={nextjsImg}></img>
            </div>
            <div className={styles.wLayoutGrid}>
              <img src={figmaImg}></img>
              <img src={framerImg}></img>
              <img src={webflowImg}></img>
              <img src={wordpressImg}></img>
              <img src={shopifyImg}></img>
              <img src={reactImg}></img>
              <img src={nextjsImg}></img>
            </div>
            <div className={styles.wLayoutGrid}>
              <img src={figmaImg}></img>
              <img src={framerImg}></img>
              <img src={webflowImg}></img>
              <img src={wordpressImg}></img>
              <img src={shopifyImg}></img>
              <img src={reactImg}></img>
              <img src={nextjsImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;
