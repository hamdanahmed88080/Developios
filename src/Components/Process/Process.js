import styles from "./Process.module.css";
import serviceImageAnimation from "../../images/service-1.webp";
import { useEffect, useState, useRef } from "react";

import image_1 from "../../images/image11.svg";
import image_2 from "../../images/image12.svg";
import image_3 from "../../images/image13.svg";
import image_4 from "../../images/image14.svg";

// console.log(window.scrollY, "Window ScrollY");

const Process = () => {
  var divRef = useRef(0);
  // var [processScrolled, setProcessScrolled] = useState(0);
  var [myScrollValue, setMyScrollValue] = useState(0);

  useEffect(() => {
    const myDiv = divRef.current;
    const handleScroll = () => {
      var percentage = ((window.scrollY - 2500) / 900) * 100;
      if (percentage < 0) {
        percentage = 0;
      } else if (percentage > 100) {
        percentage = 100;
      }
      setMyScrollValue(percentage);
      // console.log("Scrol", window.scrollY);
    };
    // const handleNewScroll = () => {
    //   console.log(myDiv);
    // };

    window.addEventListener("scroll", handleScroll);
    // myDiv.addEventListener("scroll", handleNewScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(myScrollValue);

  return (
    <div ref={divRef}>
      <div className={styles.sectionHomeProcess}>
        <div className={styles.pagePadding}>
          <div className={styles.containerMedium}>
            <div className={`${styles.pageVertical} ${styles.pageXhuge}`}>
              <div className={`${styles.marginBottom} ${styles.marginXhuge}`}>
                <div
                  className={`${styles.maxWidthLarge} ${styles.alignCenter} ${styles.textAlignCenter}`}
                >
                  <div className={styles.divBlock124}>
                    <h2>
                      Simple 3 <span>Steps</span>
                      <br></br>Process we Follow
                    </h2>
                  </div>
                  <p className={styles.paragraph10}>
                    "Our three-step process ensures you stay in the loop from
                    day one, while we tackle each phase with precision—turning
                    your vision into a final product that propels your brand
                    forward."
                  </p>
                </div>
              </div>
              <div className={styles.processContainer}>
                <div className={styles.processWrapper}>
                  <div className={styles.processStep}>
                    <div
                      className={`${styles.processItemContainer} ${styles.processItemContainer1111111}`}
                    >
                      <div className={styles.processItemImageContainer}>
                        <img
                          loading="lazy"
                          className={styles.image63}
                          src={serviceImageAnimation}
                        ></img>
                        <div className={styles.divBlock61}>
                          <div className={styles.divBlock63}>
                            <img className={styles.image57} src={image_1}></img>
                          </div>
                          <div className={styles.divBlock62}>
                            <img className={styles.image58} src={image_2}></img>
                          </div>
                          <div className={styles.divBlock64}>
                            <img className={styles.image59} src={image_3}></img>
                          </div>
                          <div className={styles.divBlock65}>
                            <img className={styles.image60} src={image_4}></img>
                          </div>
                        </div>
                        <div className={styles.divBlock66}></div>
                        <div></div>
                      </div>
                    </div>
                    <div className={styles.processItemIndicator}>
                      <div
                        className={`${styles.textStylecallout} ${styles.textWeightMedium}`}
                      >
                        1
                      </div>
                    </div>
                    <div className={styles.processItemDescription}>
                      <div
                        className={`${styles.marginBottom} ${styles.marginSmall}`}
                      >
                        <h3 className={styles.heading7}>Onboarding</h3>
                      </div>
                      <p
                        className={`${styles.textColorSecondary} ${styles.textSizeMedium}`}
                      >
                        We kick off with a comprehensive onboarding. This
                        includes setting up a dedicated Slack workspace, sharing
                        a detailed project plan, and aligning on goals to ensure
                        we’re fully prepared to meet your needs.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.processItemDescription}>
                      <div
                        className={`${styles.marginBottom} ${styles.marginSmall}`}
                      >
                        <h3 className={styles.heading7}>
                          Design & Development
                        </h3>
                      </div>
                      <p
                        className={`${styles.textColorSecondary} ${styles.textSizeMedium}`}
                      >
                        Our team transforms your ideas into reality, focusing on
                        both aesthetics and functionality. We create a
                        user-friendly design and develop it after getting
                        approval.
                      </p>
                    </div>
                    <div className={styles.processItemIndicator}>
                      <div
                        className={`${styles.textStyleCallout} ${styles.textWeightMedium}`}
                      >
                        2
                      </div>
                    </div>
                    <div
                      className={`${styles.processItemContainer} ${styles.processItemContainer1111111}`}
                    >
                      <div className={styles.processItemImageContainer}>
                        <img
                          loading="lazy"
                          className={styles.image63}
                          src={serviceImageAnimation}
                        ></img>
                        <div className={styles.divBlock61}></div>
                        <div className={styles.divBlock66}></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div
                      className={`${styles.processItemContainer} ${styles.processItemContainer1111111}`}
                    >
                      <div className={styles.processItemImageContainer}>
                        <img
                          loading="lazy"
                          className={styles.image63}
                          src={serviceImageAnimation}
                        ></img>
                        <div className={styles.divBlock61}></div>
                        <div className={styles.divBlock66}></div>
                        <div></div>
                      </div>
                    </div>
                    <div className={styles.processItemIndicator}>
                      <div
                        className={`${styles.textStyleCallout} ${styles.textWeightMedium}`}
                      >
                        3
                      </div>
                    </div>
                    <div className={styles.processItemDescription}>
                      <div
                        className={`${styles.marginBottom} ${styles.marginXhuge}`}
                      >
                        <h3 className={styles.heading7}>Test & Go live</h3>
                      </div>
                      <p
                        className={`${styles.textColorSecondary} ${styles.textSizeMedium}`}
                      >
                        Before launch, we carefully test every aspect of the
                        project to guarantee optimal performance. Once
                        everything is perfected, we go live—delivering a
                        polished final product ready to make an impact.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processTimeline}>
                    <div
                      className={styles.processTimelineProgress}
                      style={{
                        willChange: "width, height",
                        height: `100%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
