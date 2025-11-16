import Service from "./Service/Service";

import styles from "../Services/Services.module.css";
import serviceStyles from "./Service/Service.module.css";

import { useInView } from "react-intersection-observer";

const Services = () => {
  // const { ref, inView, entry } = useInView({
  //   rootMargin: "-20%",
  //   triggerOnce: true,
  //   threshold: 0,
  // });

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    rootMargin: "-15%",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.servicesMain}>
      <div className={styles.servicesHpOuter}>
        <div
          className={`${styles.servicesHp} ${inView2 ? styles.slideIn : ""}`}
          ref={ref2}
        >
          <div className={`${styles.servicesHpHeading}`}>
            <h2>SERVICES</h2>
          </div>
          <div className={`${styles.servicesHpPara}`}>
            <p>
              From initial design to ongoing management, our team delivers
              tailored solutions that enhance user experience, boost
              conversions, and drive growth. Explore our core offerings below
              and see how we can help you.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.servicesSection}>
        <Service id={serviceStyles["service1"]}></Service>
        <Service id={serviceStyles["service2"]}></Service>
        <Service id={serviceStyles["service3"]}></Service>
        <Service id={serviceStyles["service4"]}></Service>
        <Service id={serviceStyles["service5"]}></Service>
        <Service id={serviceStyles["service6"]}></Service>
      </div>
    </div>
  );
};

export default Services;
