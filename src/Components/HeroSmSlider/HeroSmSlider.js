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
import { useRef, useState } from "react";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const HeroSmSlider = () => {
  var [scrollValue, setScrollValue] = useState(0);
  var value = useMotionValue(0);
  // var direction = useRef(1);

  // useAnimationFrame((_, delta) => {
  //   var current = value.get();
  //   var speed = 100;
  //   current += -1 * speed * (0.5 * (delta / 1000));

  //   if (current > -1500) {
  //     current -= 1;
  //   } else {
  //     current = 0;
  //   }
  //   value.set(current);
  // });

  function scrollSlider() {
    let scroll = scrollValue;
    if (scroll > -1500) {
      scroll -= 1;
    } else {
      scroll = 0;
    }
    setScrollValue(scroll);
    requestAnimationFrame(scrollSlider);
  }

  window.requestAnimationFrame(scrollSlider);

  return (
    <div>
      <div className={styles.divBlock16}>
        <motion.div
          className={styles.divBlock18}
          // style={{ x: value }}
          style={{ transform: `translate3d(${scrollValue}px, 0px, 0px)` }}
        >
          <div className={styles.divBlock17}>
            <img
              src={slider1Image1}
              className={`${styles.image12} `}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image4}
              className={`${styles.image15}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image5}
              className={`${styles.image16}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
          <div className={styles.divBlock17}>
            <img
              src={slider1Image1}
              className={`${styles.image12} `}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
            ></img>
            <img
              src={slider1Image4}
              className={`${styles.image15}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image5}
              className={`${styles.image16}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
          <div className={styles.divBlock17}>
            <img
              src={slider1Image1}
              className={`${styles.image12} `}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image2}
              className={`${styles.image13} ${styles.precisionTax}`}
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image3}
              className={`${styles.image14} ${styles.advanceAmz}`}
            ></img>
            <img
              src={slider1Image4}
              className={`${styles.image15}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              src={slider1Image5}
              className={`${styles.image16}`}
              alt="LOGO"
              loading="lazy"
            ></img>
            <img
              alt="LOGO"
              loading="lazy"
              src={slider1Image6}
              className={`${styles.image16} ${styles.gobaPlay}`}
            ></img>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSmSlider;
