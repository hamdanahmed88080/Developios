import styles from "../Package/Package.module.css";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Package = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  console.log(inView);

  let [packageAnimationValue, setPackageAnimationValue] = useState(10);
  var [div, setDiv] = useState(null);

  var min = 0;
  var max = 10;

  useEffect(() => {
    const myDiv = document.getElementsByClassName(
      "Package_individualPackage__T4QgP"
    )[0];
    console.log(myDiv);
    setDiv(myDiv);
  }, []);

  // function isInViewport(element) {
  //   if (element != null) {
  //     const rect = element.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <=
  //         (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  // const myDiv = document.querySelector("#myDiv"); // Replace with your div's ID or selector

  // console.log("Div", div);

  // if (isInViewport(div)) {
  //   const intervalId = setInterval(() => {
  //     debugger;
  //     var moving = packageAnimationValue;
  //     var decrement = 0.5;
  //     if (moving >= min) {
  //       moving -= decrement;
  //       console.log("Moving Value:", moving);
  //       setPackageAnimationValue(9);
  //     } else {
  //       clearInterval(intervalId); // Stop the interval when target is reached

  //       console.log("Target value reached:", moving);
  //     }
  //   }, 1000);
  // } else {
  //   console.log("Div is not in viewport!");
  // }

  return (
    <div>
      <div
        ref={ref}
        className={`${styles.individualPackage} ${
          inView ? styles.individualPackageSlideIn : ""
        }`}
        // style={{ transform: `translate3d(0,${packageAnimationValue}%,0)` }}
      >
        <div className={styles.heading}>
          <h2>CX+CRO Audit</h2>
          <p>Fix critical areas of your website to improve conversions</p>
        </div>
        <div className={styles.price}>
          <p>$1500</p>
        </div>
        <div className={styles.offers}>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>X3 Critical Redesigned sections</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>5+ Page Audit Report</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Figma Source File</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Loom Walkthrough</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Desktop + Mobile Design</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Onpage SEO and Copy Review</p>
          </div>
        </div>
        <div className={styles.getStarted}>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Package;
