import styles from "./WhyChooseUs.module.css";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { motion, transform, useAnimation } from "motion/react";
import BellSvg from "./BellSvg/BellSvg";
import ClockSvg from "./ClockSvg/ClockSvg";
import CheckSvg from "./CheckSvg/CheckSvg";

// import bellSVG from "../../images/bellsvg.svg";

const WhyChooseUs = ({
  pointA = { x: 20, y: 20 },
  pointB = { x: 300, y: 140 },
  duration = 1.6,
  loop = true,
  easing = "easeInOut",
}) => {
  var [movingValue, setMovingValue] = useState(1);
  var [myScrollValue, setMyScrollValue] = useState(0);
  var [animateBellValue1, setAnimateBellValue1] = useState(1);
  var [animateBellValue5, setAnimateBellValue5] = useState(12);
  var [animateBellValue6, setAnimateBellValue6] = useState(20);

  const controls = useAnimation;

  var divRef = useRef(null);
  var min = 0.8;
  var max = 1;

  useEffect(() => {
    const handleScroll = () => {
      setMyScrollValue(window.scrollY);
      // console.log("Scrol", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    //Framer Motion
    if (loop) {
      controls.start({
        x: [pointA.x, pointB.x],
        y: [pointA.y, pointB.y],
        transition: {
          x: {
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easing,
          },
          y: {
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: easing,
          },
        },
      });
    } else {
      // single run: A -> B
      controls.start({
        x: pointB.x,
        y: pointB.y,
        transition: { duration, ease: easing },
      });
    }
  }, [pointA, pointB, duration, loop, easing, controls]);

  var scale = myScrollValue / 1970;

  if (scale > 1) {
    scale = 1;
  }

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-15%",
  });

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-15%",
  });

  return (
    <div>
      <div
        className={styles.whyChooseUs}
        style={{
          transform: `translate3d(0px,0px,0px) scale3d(${scale},${scale},${scale})`,
        }}
        onClick={() => {
          console.log("I am clicked");
        }}
      >
        <div className={styles.whyChooseUsContainer}>
          <div className={styles.whyChooseUsHero}>
            <div style={{ overflow: "hidden" }}>
              <h2 className={`${inView ? styles.slideIn : ""}`} ref={ref}>
                Why Choose Us?
              </h2>
            </div>
            <div className={styles.divBlock128}>
              <p className={`${inView2 ? styles.slideIn : ""}`} ref={ref2}>
                With established SOPs for seamless operations, we ensure
                efficiancy, quality and consistent result in every project.
                Trust our proven process to deliver exceptional results.
              </p>
            </div>
          </div>
          <div className={styles.whyChooseUsReasons}>
            <div className={styles.individualReason} id={styles["reason1"]}>
              <div className={styles.lottieAnimation4} datatype="lottie">
                <BellSvg></BellSvg>
              </div>
              <h3>Seamless Communication</h3>
              <p>
                Stay Connected with our team on Slack for ongoing collaboration
                and updates.
              </p>
            </div>
            <div className={styles.individualReason} id={styles["reason2"]}>
              <div className={styles.lottieAnimation4} datatype="lottie">
                <ClockSvg></ClockSvg>
              </div>
              <h3>Timely Project Updates</h3>
              <p>
                Reguler progress updates and stay informed at every stage of
                your project.
              </p>
            </div>
            <div className={styles.individualReason} id={styles["reason3"]}>
              <div className={styles.lottieAnimation4} datatype="lottie">
                <CheckSvg></CheckSvg>
              </div>
              <h3>Satisfaction Guarantee</h3>
              <p>
                If our work doesn't meet your expectations, we'll provide
                refund-no questions asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
