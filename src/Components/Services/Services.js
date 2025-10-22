import styles from "../Services/Services.module.css";
import serviceImageAnimation from "../../images/service-1.webp";

const Services = () => {
  return (
    <div className={styles.servicesMain}>
      <div className={styles.servicesHp}>
        <div className={styles.servicesInnerDiv}>
          <ul>
            <li className={styles.servicesHpHeading}>
              <h2>SERVICES</h2>
            </li>
            <li className={styles.servicesHpPara}>
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
        <a>
          <div className={styles.serviceDiv} id="service1">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </a>
        <a>
          {" "}
          <div className={styles.serviceDiv} id="service2">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </a>
        <a>
          {" "}
          <div className={styles.serviceDiv} id="service3">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </a>
        <a>
          {" "}
          <div className={styles.serviceDiv} id="service4">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </a>
        <a>
          {" "}
          <div className={styles.serviceDiv} id="service5">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </a>
        <a>
          {" "}
          <div className={styles.serviceDiv} id="service6">
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
    </div>
  );
};

export default Services;
