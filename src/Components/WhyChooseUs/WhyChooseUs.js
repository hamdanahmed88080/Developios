import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <div>
      <div className={styles.whyChooseUs}>
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
