import styles from "../Services/Services.module.css";
import servicesImageLeasabites from "../../images/672c6741e01a986a52015586_leasebites.webp";
import servicesImageGuriEnterprise from "../../images/672c6786b45a0a10ae7790a0_guri enterprise.webp";
import servicesImageTalkAsia from "../../images/672c67b0b245d962f937266b_Talk Asia.webp";
import servicesImageSsafLogistics from "../../images/672c67f0b45a0a10ae77ef57_SSAF Logistics.webp";
import serviceImageAnimation from "../../images/service-1.webp";

const Services = () => {
  return (
    <div className={styles.servicesMain}>
      <div className={styles.servicesBanner}>
        <ul>
          <li>
            <img src={servicesImageLeasabites}></img>
          </li>
          <li>
            <img src={servicesImageGuriEnterprise}></img>
          </li>
          <li>
            <img src={servicesImageSsafLogistics}></img>
          </li>
          <li>
            <img src={servicesImageTalkAsia}></img>
          </li>
        </ul>
      </div>
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
