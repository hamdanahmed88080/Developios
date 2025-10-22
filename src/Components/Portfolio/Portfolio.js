import styles from "../Portfolio/Portfolio.module.css";

import portfolioImageLeasabites from "../../images/672c6741e01a986a52015586_leasebites.webp";
import portfolioImageGuriEnterprise from "../../images/672c6786b45a0a10ae7790a0_guri enterprise.webp";
import portfolioImageTalkAsia from "../../images/672c67b0b245d962f937266b_Talk Asia.webp";
import portfolioImageSsafLogistics from "../../images/672c67f0b45a0a10ae77ef57_SSAF Logistics.webp";

const Portfolio = () => {
  return (
    <div>
      <div className={styles.portfolio}>
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
      <div className={styles.portfolioBanner}>
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
