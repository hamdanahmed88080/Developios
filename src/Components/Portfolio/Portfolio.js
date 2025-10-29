import styles from "../Portfolio/Portfolio.module.css";

import { useState, useEffect } from "react";

import portfolioImageLeasabites from "../../images/672c6741e01a986a52015586_leasebites.webp";
import portfolioImageGuriEnterprise from "../../images/672c6786b45a0a10ae7790a0_guri enterprise.webp";
import portfolioImageTalkAsia from "../../images/672c67b0b245d962f937266b_Talk Asia.webp";
import portfolioImageSsafLogistics from "../../images/672c67f0b45a0a10ae77ef57_SSAF Logistics.webp";

const Portfolio = () => {
  var [movingValue, setMovingValue] = useState(-2100);
  var min = -2100;
  var max = 0;

  function changeMovingValue() {
    let value = movingValue;
    if (value < max) {
      value++;
    } else {
      value = -2100;
    }
    setMovingValue(value);
    requestAnimationFrame(changeMovingValue);
  }

  window.requestAnimationFrame(changeMovingValue);

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioHeader}>
        <ul>
          <li>
            <a href="">Web Design</a>
          </li>
          <li>
            <a href="#">Logo</a>
          </li>
          <li>
            <a href="#">UX UI</a>
          </li>
          <li>
            <a href="#">CRO</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.tabsContent} ${styles.wTabContent}`}></div>
      <div
        className={`${styles.wTabActive} ${styles.wTabPane} `}
        style={{ opacity: "1", transform: "all, opacity 200ms" }}
      >
        <div className={`${styles.wTabActive} ${styles.wTabPane}`}>
          <div
            className={styles.portfolioBanner}
            style={{
              transform: `translate3d(${movingValue}px,0px,0px)`,
              scale: "1,1,1",
            }}
          >
            <div className={`${styles.div21}`}>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={portfolioImageTalkAsia}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageGuriEnterprise}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageLeasabites}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                {/* <ul>
                  <li>
                    <img src={portfolioImageLeasabites}></img>
                  </li>
                  <li>
                    <img src={portfolioImageGuriEnterprise}></img>
                  </li>
                  <li>
                    <img src={portfolioImageSsafLogistics}></img>
                  </li>
                  <li>
                    <img src={portfolioImageTalkAsia}></img>
                  </li>
                </ul> */}
              </div>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={portfolioImageTalkAsia}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageGuriEnterprise}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageLeasabites}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                {/* <ul>
                  <li>
                    <img src={portfolioImageLeasabites}></img>
                  </li>
                  <li>
                    <img src={portfolioImageGuriEnterprise}></img>
                  </li>
                  <li>
                    <img src={portfolioImageSsafLogistics}></img>
                  </li>
                  <li>
                    <img src={portfolioImageTalkAsia}></img>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
