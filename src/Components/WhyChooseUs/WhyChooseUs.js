import styles from "./WhyChooseUs.module.css";
import { useState, useEffect, useRef } from "react";

const WhyChooseUs = () => {
  var [movingValue, setMovingValue] = useState(1);
  var [myScrollValue, setMyScrollValue] = useState(0);
  var divRef = useRef(null);
  var min = 0.8;
  var max = 1;

  useEffect(() => {
    const handleScroll = () => {
      setMyScrollValue(window.scrollY);
      console.log("Scroll", myScrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   // const interval = setInterval(() => {}, 50);

  //   const div = divRef.current;

  //   const handleScroll = (event) => {
  //     console.log("Div scrolled! scrollTop:", div.scrollTop);
  //   };

  //   window.addEventListener("scroll", () => {
  //     console.log(window.scrollY);
  //   });

  //   console.log(window.scrollY);

  //   // ✅ Add scroll event listener
  //   div.addEventListener("scroll", handleScroll);

  //   return () => {
  //     div.removeEventListener("scroll", handleScroll);
  //   };
  // , []);

  var onScrollingHandler = () => {
    const div = divRef.current;
    console.log("Scrolled");
    div.addEventListener("scroll", () => {
      console.log("I am scrolled", div.scrollTop);
    });
  };

  var scale = myScrollValue / 2300;

  return (
    <div>
      <div
        // ref={divRef}
        className={styles.whyChooseUs}
        style={{
          transform: `translate3d(0px,0px,0px) scale3d(${scale},${scale},${scale})`,
        }}
        onClick={() => {
          console.log("I am clicked");
        }}
        // onScroll={onScrollingHandler}
      >
        <div className={styles.whyChooseUsContainer}>
          <div className={styles.whyChooseUsHero}>
            <h2>Why Choose Us</h2>
            <p>
              With established SOPs for seamless operations, we ensure
              efficiancy, quality and consistent result in every project. Trust
              our proven process to deliver exceptional results.
            </p>
          </div>
          <div className={styles.whyChooseUsReasons}>
            <div className={styles.reasons} id={styles["reason1"]}>
              <div className=""></div>
              <h3>Seamless Communication</h3>
              <p>
                Stay Connected with our team on Slack for ongoing collaboration
                and updates.
              </p>
            </div>
            <div className={styles.reasons} id={styles["reason2"]}>
              <div></div>
              <h3>Timely Project Updates</h3>
              <p>
                Reguler progress updates and stay informed at every stage of
                your project.
              </p>
            </div>
            <div className={styles.reasons} id={styles["reason3"]}>
              <div></div>
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
