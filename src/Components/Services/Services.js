import Service from "./Service/Service";

import styles from "../Services/Services.module.css";
import serviceImageAnimation from "../../images/service-1.webp";

import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div className={styles.servicesMain}>
      <div className={styles.servicesHp}>
        <div
          ref={ref}
          className={`${styles.servicesInnerDiv} ${
            inView ? styles.slideIn : ""
          }`}
        >
          <ul>
            <li className={`${styles.servicesHpHeading}`}>
              <h2>SERVICES</h2>
            </li>
            <li className={`${styles.servicesHpPara}`}>
              <p>
                From initial design to ongoing management, our team delivers
                tailored solutions that enhance user experience, boost
                conversions, and drive growth. Explore our core offerings below
                and see how we can help you.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.servicesSection}>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
      </div>
    </div>
  );
};

export default Services;
