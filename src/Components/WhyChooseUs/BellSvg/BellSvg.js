import { useEffect } from "react";
import styles from "./BellSvg.module.css";

import { motion, useTransform, useMotionValue, animate } from "motion/react";

const BellSvg = () => {
  // create motion values for each matrix part: a b c d e f
  const a = useMotionValue(1);
  const b = useMotionValue(0);
  const c = useMotionValue(0);
  const d = useMotionValue(1);
  const e = useMotionValue(0);
  const f = useMotionValue(0);

  // recombine into a full matrix() string
  const matrix = useTransform(
    [a, b, c, d, e, f],
    ([aVal, bVal, cVal, dVal, eVal, fVal]) =>
      `matrix(${aVal}, ${bVal}, ${cVal}, ${dVal}, ${eVal}, ${fVal})`
  );

  // trigger animation
  useEffect(() => {
    // Use the top-level animate() to animate MotionValues.
    // animate(motionValue, keyframesArray, { options })
    // animate returns a controls object with .stop()
    const duration = 1.2;

    const aAnim = animate(a, [1, 0.98, 0.95, 1], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    const bAnim = animate(b, [0, -0.15, 0.15, 0], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    const cAnim = animate(c, [0, 0.15, -0.15, 0], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    const dAnim = animate(d, [1, 0.98, 0.95, 1], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    // translations (e,f)
    const eAnim = animate(e, [0, -4, 4, 0], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    const fAnim = animate(f, [0, 2, -2, 0], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    });

    // cleanup on unmount
    return () => {
      aAnim.stop();
      bAnim.stop();
      cAnim.stop();
      dAnim.stop();
      eAnim.stop();
      fAnim.stop();
    };
  }, [a, b, c, d, e, f]);

  return (
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
        {/* <img src={bellSVG}></img> */}
        <motion.g
          opacity="1"
          // style={{ display: "block" }}
          // className={styles.bellWrap}
          //   animate={{
          //     rotate: [0, 25, -12, 20, -10, 15, -8, 0],
          //   }}
          //   transition={{
          //     duration: 1.2,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          //   }}
          //   style={{ transformOrigin: "50% 0%", display: "block" }}
          transform={{ matrix }}
          // transform="matrix(0.98,-0.17,0.17,0.98,-4.46,11.80)"
          // transform={`matrix(${animateBellValue1},${-0.17},${0.17},${0.98},${animateBellValue5},${animateBellValue6})`}
        >
          <g transform="matrix(1,0,0,1,64,56)" opacity="1">
            <path
              strokeMiterlimit="4"
              fillOpacity="0"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              stroke="rgb(0,0,0)"
              strokeOpacity="1"
              strokeWidth="5"
              d="M-22.858999252319336,-2.006999969482422 C-22.858999252319336,-14.706000328063965 -12.564000129699707,-25 0.13500000536441803,-25 C12.833999633789062,-25 23.128000259399414,-14.706000328063965 23.128000259399414,-2.006999969482422 C23.128000259399414,-2.006999969482422 23.128000259399414,0.6129999756813049 23.128000259399414,0.6129999756813049 C23.128000259399414,2.193000078201294 23.39900016784668,3.760999917984009 23.926000595092773,5.25 C23.926000595092773,5.25 27.145000457763672,14.326000213623047 27.145000457763672,14.326000213623047 C28.992000579833984,19.533000946044922 25.128999710083008,25 19.604999542236328,25 C19.604999542236328,25 -19.54599952697754,25 -19.54599952697754,25 C-25.125999450683594,25 -28.990999221801758,19.43000030517578 -27.040000915527344,14.20199966430664 C-27.040000915527344,14.20199966430664 -23.729999542236328,5.336999893188477 -23.729999542236328,5.336999893188477 C-23.152999877929688,3.7909998893737793 -22.858999252319336,2.1549999713897705 -22.858999252319336,0.5049999952316284 C-22.858999252319336,0.5049999952316284 -22.858999252319336,-2.006999969482422 -22.858999252319336,-2.006999969482422z"
            ></path>
          </g>
        </motion.g>
        {/* <div>Bottom Stroke</div> */}
        <motion.g
          opacity="1"
          // style={{ display: "block" }}
          initial={{ y: 0, opacity: 1, skewX: "0deg" }}
          // className={styles.bottomStroke}
          transform="matrix(1,0,0,1,0,0)"
          animate={{
            x: [0, -3, 0, 3, 0, -3, 0, 0],
            // sequence that syncs with bell swings: slight up/down + tiny skew + opacity pulse
            y: [0, -3, 0, -3, 0, -3, 0, 0],
            rotate: [
              "0deg",
              "-12deg",
              "0deg",
              "12deg",
              "0deg",
              "-12deg",
              "0deg",
              "0deg",
            ],
            opacity: [1, 0.9, 1, 0.92, 1, 0.95, 1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
          style={{
            originX: "50%",
            originY: "50%",
            display: "block",
          }}
        >
          <g transform="matrix(1,0,0,1,64,94.5)" opacity="1">
            <path
              strokeMiterlimit="4"
              fillOpacity="0"
              strokeLinejoin="miter"
              strokeLinecap="round"
              stroke="rgb(0,0,0)"
              strokeOpacity="1"
              strokeWidth="5"
              // d="M 8 ,-2.5 C 6.4,2.9 2.17, 2.5 0,2.5"
              d=" M8,-2.5 C6.400000095367432,2.299999952316284 2.177000045776367,2.5 0,2.5 C-2.1760001182556152,2.5 -6.400000095367432,2.299999952316284 -8,-2.5"
            ></path>
          </g>
        </motion.g>
        {/* <div>Side Stroke</div> */}
        {/* <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity="1"
                      className={styles.innerStroke}
                      style={{ display: "block" }}
                    >
                      <g transform="matrix(1,0,0,1,57,48.5)">
                        <path
                          strokeMiterlimit="4"
                          fillOpacity="0"
                          strokeLinejoin="miter"
                          strokeLinecap="round"
                          stroke="rgb(0,0,0)"
                          strokeOpacity="1"
                          strokeWidth="5"
                          d=" M-4,4.5 C-3.4000000953674316,-0.21199999749660492 -0.33399999141693115,-4.138000011444092 4,-4.5"
                        ></path>
                      </g>
                    </g> */}
        <g></g>
      </g>
    </svg>
  );
};

export default BellSvg;
