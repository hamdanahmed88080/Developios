import styles from "../Package/Package.module.css";

const Package = () => {
  return (
    <div>
      <div className={styles.individualPackage}>
        <div className={styles.heading}>
          <h2>CX+CRO Audit</h2>
          <p>Fix critical areas of your website to improve conversions</p>
        </div>
        <div className={styles.price}>
          <p>$1500</p>
        </div>
        <div className={styles.offers}>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>X3 Critical Redesigned sections</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>5+ Page Audit Report</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Figma Source File</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Loom Walkthrough</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Desktop + Mobile Design</p>
          </div>
          <div className={styles.offerIndividual}>
            <div></div>
            <p>Onpage SEO and Copy Review</p>
          </div>
        </div>
        <div className={styles.getStarted}>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Package;
