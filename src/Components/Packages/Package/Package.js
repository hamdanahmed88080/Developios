import styles from "../Package/Package.module.css";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Package = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-20%",
    triggerOnce: true,
    threshold: 0,
  });

  let [packageAnimationValue, setPackageAnimationValue] = useState(10);
  var [div, setDiv] = useState(null);

  var min = 0;
  var max = 10;

  useEffect(() => {
    const myDiv = document.getElementsByClassName(
      "Package_individualPackage__T4QgP"
    )[0];
    // console.log(myDiv);
    setDiv(myDiv);
  }, []);

  return (
    <div className={styles.package}>
      <div
        ref={ref}
        className={`${styles.individualPackage} ${
          inView ? styles.individualPackageSlideIn : ""
        }`}
      >
        <div className={styles.content}>
          <div className={styles.individualPackageHeader}>
            <div className={styles.flexVerticalContainer}>
              <div className="" style={{ textAlign: "center" }}>
                <div className={styles.headingDiv}>
                  <h2>CX+CRO Audit</h2>
                </div>
                <div className={styles.individualPackageParagraph}>
                  <p>
                    Fix critical areas of your website to improve conversions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
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
          </div>
          <div className={styles.getStarted}>
            {/* <button className={styles.getStartedButton}>Get Started</button> */}
            <p>Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
