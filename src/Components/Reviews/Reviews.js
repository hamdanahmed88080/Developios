import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div>
      {" "}
      <div className={styles.sectionHomeProcess}>
        <div className={styles.pagePadding}>
          <div className={styles.containerMedium}>
            <div className={`${styles.pageVertical} ${styles.pageXhuge}`}>
              <div className={`${styles.marginBottom} ${styles.marginXhuge}`}>
                <div
                  className={`${styles.maxWidthLarge} ${styles.alignCenter} ${styles.textAlignCenter}`}
                >
                  <div className={styles.divBlock124}>
                    <h2>
                      What Our <span>Clients</span>
                      <br></br>Are Saying
                    </h2>
                  </div>
                  <p className={styles.paragraph10}>
                    See how we've helped our clients achieve success with our
                    expertise, dedication, and tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
