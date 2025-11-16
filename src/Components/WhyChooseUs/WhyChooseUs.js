import styles from "./WhyChooseUs.module.css";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { motion, transform, useAnimation } from "motion/react";
import BellSvg from "./BellSvg/BellSvg";

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

  function animate1() {
    let value = 1;
    let direction = -1;
    setInterval(() => {
      value += direction * 0.01;
      if (value <= 0.85) {
        direction = 1;
        value = 0.85;
      } else if (value >= 1) {
        value = 1;
        direction = -1;
      }
      // decreasing = !decreasing;
      // console.log(value);
      setAnimateBellValue1(value);
    }, 20);
  }

  function animate5() {
    let value = animateBellValue5;
    let direction = -1;
    setInterval(() => {
      value += direction * 0.5;
      if (value <= -4) {
        direction = 1;
        value = -4;
      } else if (value >= 12) {
        value = 12;
        direction = -1;
      }
      setAnimateBellValue5(value);
    }, 20);
  }

  function animate6() {
    let value = animateBellValue6;
    let direction = -1;

    setInterval(() => {
      value += direction * 0.5;
      if (value <= -20) {
        direction = 1;
        value = -20;
      } else if (value >= 20) {
        value = 20;
        direction = -1;
      }
      setAnimateBellValue6(value);
    }, 20);
  }

  // animate1();
  // animate5();
  // animate6();
  // for (let i = 1; i > 0.85; i = i - 0.0001) {
  //   console.log(i);
  // }

  // function animateBell() {
  //   let animatePreviousValue;
  //   let animateNextValue = animateBellValue;
  //   for (let i = 1; i > 0.85; i--) {
  //     console.log(i);
  //   }
  //   // let decreasing ;
  //   // if (animateValue <= 1 && animateValue > 0.85 && decreasing === true) {
  //   //   animateValue -= 0.01;
  //   //   // decreasing = true;
  //   //   console.log("First Loop run", decreasing);
  //   // } else if ((animateValue = 0.85)) {
  //   //   animateValue += 0.01;
  //   //   decreasing = false;
  //   //   console.log("Second Loop run", decreasing);
  //   // } else {
  //   //   animateValue = 1;
  //   // }
  //   // setAnimateBellValue(animateValue);
  //   requestAnimationFrame(animateBell);
  // }

  // window.requestAnimationFrame(animateBell);

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
          <motion.div
            style={{ backgroundColor: "blue", width: "20px", height: "20px" }}
          ></motion.div>
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
                <svg
                  style={{
                    // width: "100%",
                    height: "100%",
                    contentVisibility: "visible",
                  }}
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <clipPath id="__lottie_element_5">
                      <rect width="128" height="128" x="0" y="0"></rect>
                    </clipPath>
                  </defs>

                  <g clipPath="url(#__lottie_element_5)">
                    <g
                      opacity="1"
                      style={{ display: "block" }}
                      // transform="martrix(1,1,1,1,4.5,-7.84)"
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g transform="matrix(1,0,0,1,64,64)" opacity="1">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="butt"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          d="M0,-37 C20.434999465942383,-37 37,-20.434999465942383 37,0 C37,20.434999465942383 20.434999465942383,37 0,37 C-20.434999465942383,37 -37,20.434999465942383 -37,0 C-37,-20.434999465942383 -20.434999465942383,-37 0,-37z"
                        ></path>
                      </g>
                    </g>
                    <g
                      opacity="1"
                      style={{ display: "block" }}
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g transform="matrix(1,0,0,1,71,71)" opacity="1">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="round"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          // d="M 8 ,-2.5 C 6.4,2.9 2.17, 2.5 0,2.5"
                          d=" M-7.570000171661377,-7.570000171661377 C-7.570000171661377,-7.570000171661377 7.570000171661377,7.570000171661377 7.570000171661377,7.570000171661377"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="round"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          d=" M64,49 C64,49 64,64 64,64"
                        ></path>
                      </g>
                    </g>
                    <g></g>
                  </g>
                </svg>
              </div>
              <h3>Timely Project Updates</h3>
              <p>
                Reguler progress updates and stay informed at every stage of
                your project.
              </p>
            </div>
            <div className={styles.individualReason} id={styles["reason3"]}>
              <div className={styles.lottieAnimation4} datatype="lottie">
                <svg
                  style={{
                    // width: "100%",
                    height: "100%",
                    contentVisibility: "visible",
                  }}
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <clipPath id="__lottie_element_5">
                      <rect width="128" height="128" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_5)">
                    <g
                      opacity="1"
                      style={{ display: "block" }}
                      transform="martrix(1,1,1,1,4.5,-7.84)"
                    >
                      <g transform="matrix(1,0,0,1,64,64)" opacity="1">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="butt"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          d=" M-11,-37 C-11,-37 11,-37 11,-37 C25.358999252319336,-37 37,-25.358999252319336 37,-11 C37,-11 37,11 37,11 C37,25.358999252319336 25.358999252319336,37 11,37 C11,37 -11,37 -11,37 C-25.358999252319336,37 -37,25.358999252319336 -37,11 C-37,11 -37,-11 -37,-11 C-37,-25.358999252319336 -25.358999252319336,-37 -11,-37z"
                        ></path>
                      </g>
                    </g>
                    <g
                      opacity="1"
                      style={{ display: "block" }}
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g transform="matrix(1,0,0,1,64,64)" opacity="1">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="round"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          // d="M 8 ,-2.5 C 6.4,2.9 2.17, 2.5 0,2.5"
                          d=" M3.4049999713897705,1.5269999504089355 C8.925000190734863,-3.9100000858306885 15.5,-10.385000228881836 15.5,-10.385000228881836"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g transform="matrix(1,0,0,1,64,64)">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="round"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          d=" M-15.5,3.0859999656677246 C-15.5,3.0859999656677246 -9.645999908447266,8.85200023651123 -9.645999908447266,8.85200023651123 C-8.08899974822998,10.385000228881836 -5.590000152587891,10.385000228881836 -4.0329999923706055,8.85200023651123 C-4.0329999923706055,8.85200023651123 15.5,-10.385000228881836 15.5,-10.385000228881836"
                        ></path>
                      </g>
                    </g>
                    <g></g>
                  </g>
                </svg>
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
