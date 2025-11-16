import styles from "./Process.module.css";
import serviceImageAnimation from "../../images/ProcessImage1.webp";
import serviceImgeAnimation_md from "../../images/ProcessImage1_md.webp";
import serviceImageAnimation_sm from "../../images/ProcessImage1_sm.webp";
import serviceImageAnimation2 from "../../images/ProcessImage2.webp";
import serviceImageAnimation3 from "../../images/ProcessImage3.webp";
import processImage1SubMain from "../../images/ProcessImage1_subMain.svg";
import processImage1SubMain2 from "../../images/ProcessImage1_subMain2.svg";
import processImage2Main from "../../images/ProcessImage2Main.svg";
import process3Sub1 from "../../images/Process3IdeasAndAnalytics.svg";
import process3Sub2 from "../../images/Process3DesignAndDevelopment.svg";
import process3Sub3 from "../../images/Process3Testing.svg";
import process3Sub3_2 from "../../images/Process3Testing2.svg";
import process3Sub4 from "../../images/Process3GoLive.svg";
import process3Arrow from "../../images/Process3Arrow.svg";
import Image2Sub from "../../images/Image2Sub.svg";
// import Image2Sub2 from "../../images/Image2Sub2.svg";

// import Image3Sub1 from "../../images/image5.svg";
// import Image3Sub2 from "../../images/image6.svg";
// import Image3Sub3 from "../../images/image7.svg";
// import Image3Sub4 from "../../images/Image8.svg";
// import Image3Sub5 from "../../images/image7 (2).svg";
// import Image3Sub6 from "../../images/svg-image-5.svg";
// import Image3Sub7 from "../../images/img-5.svg";
// import Image3Sub8 from "../../images/img-8.svg";
// import Image3Sub9 from "../../images/icon-10.svg";
// import Image3Sub10 from "../../images/image15.svg";

// import Image3Sub6 from "../../images/Image8.svg";

import { useEffect, useState, useRef } from "react";

import image_1 from "../../images/image11.svg";
import image_2 from "../../images/image12.svg";
import image_3 from "../../images/image13.svg";
import image_4 from "../../images/image14.svg";
import { useInView } from "react-intersection-observer";

// console.log(window.scrollY, "Window ScrollY");

const Process = () => {
  var divRef = useRef(0);
  // var [processScrolled, setProcessScrolled] = useState(0);
  var [myScrollValue, setMyScrollValue] = useState(0);
  var [image3ScrollValue, setImage3ScrollValue] = useState(0);
  var [imageResize, setImageResize] = useState(1);
  // var [imageOpacity, setImageImageOpacity]

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

  useEffect(() => {
    const myDiv = divRef.current;
    const handleScroll = () => {
      var percentage = ((window.scrollY - 2850) / 900) * 100;
      var image3Scroll = (window.scrollY - 3350) / 750;
      if (image3Scroll < 0) {
        image3Scroll = 0;
      } else if (image3Scroll > 1) {
        image3Scroll = 1;
      }
      setImage3ScrollValue(image3Scroll);
      if (percentage < 0) {
        percentage = 0;
      } else if (percentage > 100) {
        percentage = 100;
      }
      setMyScrollValue(percentage);
      // var imageResize = document.getElementsByClassName(
      //   styles.processImage1Main1
      // )[0];
      // imageResize.style.tranform = `scale3d(
      //   ${myScrollValue} / 70,
      //   ${myScrollValue}/ 70
      // )`;
      var imageScroll = imageResize;
      var imagePercentage = percentage / 200 + 1;
      setImageResize(imagePercentage);
      // console.log(imageResize.style);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                    <h2
                      ref={ref}
                      className={`${styles.heroHeading} ${
                        inView ? styles.slideIn : ""
                      }`}
                    >
                      Simple 3 <span>Steps</span>
                      <br></br>Process we Follow
                    </h2>
                  </div>
                  <div className={styles.paraOuter}>
                    <p
                      ref={ref2}
                      className={`${styles.paragraph10} ${
                        inView2 ? styles.slideIn : ""
                      }`}
                    >
                      "Our three-step process ensures you stay in the loop from
                      day one, while we tackle each phase with precision—turning
                      your vision into a final product that propels your brand
                      forward."
                    </p>
                  </div>
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
                          srcSet={`${serviceImageAnimation_sm} 500w, ${serviceImgeAnimation_md} 800w, ${serviceImageAnimation} 1016w`}
                          sizes="(max-width: 1016px) 100vw, 1016px"
                          src={serviceImageAnimation}
                        ></img>
                        <div className={styles.divBlock61}>
                          <div className={styles.divBlock63}>
                            <img className={styles.image57} src={image_1}></img>
                          </div>
                          <div className={styles.divBlock63}>
                            <img className={styles.image57} src={image_2}></img>
                          </div>
                          <div className={styles.divBlock63}>
                            <img className={styles.image57} src={image_3}></img>
                          </div>
                          <div className={styles.divBlock63}>
                            <img className={styles.image57} src={image_4}></img>
                          </div>
                        </div>
                        <div className={styles.divBlock66}>
                          <img
                            src={processImage1SubMain}
                            style={{
                              position: "absolute",
                              width: "75%",
                              transform: `scale3d(${imageResize}, ${imageResize}, 1)`,
                              opacity: `${myScrollValue / 70}`,
                            }}
                            className={styles.processImage1Main1}
                          ></img>
                          <img
                            src={processImage1SubMain2}
                            style={{ width: "75%" }}
                          ></img>
                        </div>
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
                          src={serviceImageAnimation2}
                        ></img>
                        {/* <img src={Image2Sub2}></img> */}
                        <img
                          src={Image2Sub}
                          className={styles.image56}
                          style={{
                            transform: `translatex(${myScrollValue}%)`,
                          }}
                        ></img>
                        <img
                          src={processImage2Main}
                          className={styles.processImage2Main}
                          style={{ opacity: `${myScrollValue / 100}` }}
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
                      <div
                        className={`${styles.processItemImageContainer} ${styles.divBlock5}`}
                      >
                        <img
                          loading="lazy"
                          className={styles.image63}
                          src={serviceImageAnimation3}
                        ></img>
                        <div
                          className={styles.divBlock54}
                          style={{
                            transform: `translateX(${image3ScrollValue * 21}%)`,
                          }}
                        >
                          <img
                            src={process3Sub3_2}
                            className={styles.image45}
                          ></img>
                          <img
                            src={process3Sub3}
                            className={styles.image47}
                            style={{ opacity: `${1 / image3ScrollValue / 3}` }}
                          ></img>
                        </div>
                        <img
                          src={process3Sub1}
                          className={styles.image43}
                          style={{
                            transform: `translateX(${image3ScrollValue * 12}%)`,
                          }}
                        ></img>
                        <img
                          src={process3Sub2}
                          className={styles.image44}
                          style={{
                            transform: `translateX(${image3ScrollValue * 32}%)`,
                          }}
                        ></img>
                        <img
                          src={process3Sub4}
                          className={styles.image46}
                          style={{
                            transform: `translateX(${image3ScrollValue * 75}%)`,
                          }}
                        ></img>
                        <img
                          src={process3Arrow}
                          className={styles.imageArrow}
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
                        height: `${myScrollValue}%`,
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

<img
  sizes="(max-width: 1016px) 100vw, 1016px"
  srcset="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6706693d4c48131ee56b2d40_card%203%20(3)-p-500.webp 500w, https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6706693d4c48131ee56b2d40_card%203%20(3)-p-800.webp 800w, https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6706693d4c48131ee56b2d40_card%203%20(3).webp 1016w"
  alt="img"
  src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6706693d4c48131ee56b2d40_card%203%20(3).webp"
  loading="lazy"
  class="image-63"
></img>;
