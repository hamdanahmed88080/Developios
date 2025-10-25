import styles from "./Service.module.css";

import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div>
      <a>
        <div
          id="service1"
          ref={ref}
          className={`${styles.serviceDiv} ${
            inView ? styles.serviceSlideIn : ""
          }`}
        >
          <h2>UX CRO Edit</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.0
          </p>
          <button></button>
          <div className={styles.buttonText}>Learn More</div>
        </div>
      </a>
    </div>
  );
};

export default Service;
