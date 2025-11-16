import styles from "./HeroSmSlider.module.css";

import slider1Image1 from "../../images/hero-sm-slider1-img1.svg";
import slider1Image2 from "../../images/hero-sm-slider1-img2.svg";
import slider1Image3 from "../../images/hero-sm-slider1-img3.svg";
import slider1Image4 from "../../images/hero-sm-slider1-img4.svg";
import slider1Image5 from "../../images/hero-sm-slider1-img5.svg";
import slider1Image6 from "../../images/hero-sm-slider1-img6.svg";
import slider2Image1 from "../../images/hero-sm-slider2-img1.svg";
import slider2Image2 from "../../images/hero-sm-slider2-img2.svg";
import slider2Image3 from "../../images/hero-sm-slider2-img3.svg";
import slider2Image4 from "../../images/hero-sm-slider2-img4.svg";
import slider2Image5 from "../../images/hero-sm-slider2-img5.svg";
import slider2Image6 from "../../images/hero-sm-slider2-img6.svg";
import slider3Image1 from "../../images/hero-sm-slider3-img1.svg";
import slider3Image2 from "../../images/hero-sm-slider3-img2.svg";
import slider3Image3 from "../../images/hero-sm-slider3-img3.svg";
import slider3Image4 from "../../images/hero-sm-slider3-img4.svg";
import slider3Image5 from "../../images/hero-sm-slider3-img5.svg";
import slider3Image6 from "../../images/hero-sm-slider3-img6.svg";
import { useState } from "react";

const HeroSmSlider = () => {
  var [scrollValue, setScrollValue] = useState(0);

  function scrollSlider() {
    let scroll = scrollValue;
    if (scroll > -1500) {
      scroll -= 1;
    } else {
      scroll = 0;
    }
    setScrollValue(scroll);
    // console.log(scrollValue);
    requestAnimationFrame(scrollSlider);
  }

  window.requestAnimationFrame(scrollSlider);

  return (
    <div>
      <div className={styles.divBlock16}>
        <div
          className={styles.divBlock18}
          style={{ transform: `translate3d(${scrollValue}px, 0px, 0px)` }}
        >
          <div className={styles.divBlock17}>
            <img src={slider1Image1} className={`${styles.image12} `}></img>
            <img
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
            ></img>
            <img
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
            ></img>
            <img src={slider1Image4} className={`${styles.image15}`}></img>
            <img src={slider1Image5} className={`${styles.image16}`}></img>
            <img
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
          <div className={styles.divBlock17}>
            <img src={slider1Image1} className={`${styles.image12} `}></img>
            <img
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
            ></img>
            <img
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
            ></img>
            <img src={slider1Image4} className={`${styles.image15}`}></img>
            <img src={slider1Image5} className={`${styles.image16}`}></img>
            <img
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
          <div className={styles.divBlock17}>
            <img src={slider1Image1} className={`${styles.image12} `}></img>
            <img
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
            ></img>
            <img
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
            ></img>
            <img src={slider1Image4} className={`${styles.image15}`}></img>
            <img src={slider1Image5} className={`${styles.image16}`}></img>
            <img
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSmSlider;
