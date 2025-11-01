import Service from "./Service/Service";

import styles from "../Services/Services.module.css";

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
        <div className={`${styles.servicesHpHeading}`}>
          <h2>SERVICES</h2>
        </div>

        <div className={`${styles.servicesHpPara}`}>
          <p>
            From initial design to ongoing management, our team delivers
            tailored solutions that enhance user experience, boost conversions,
            and drive growth. Explore our core offerings below and see how we
            can help you.
          </p>
        </div>
      </div>
      <div className={styles.servicesSection}>
        <Service id="service1"></Service>
        <Service id="service2"></Service>
        <Service id="service3"></Service>
        <Service id="service4"></Service>
        <Service id="service5"></Service>
        <Service id="service6"></Service>
      </div>
    </div>
  );
};

export default Services;
