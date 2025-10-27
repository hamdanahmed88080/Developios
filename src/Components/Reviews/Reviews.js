import styles from "./Reviews.module.css";

import { useInView } from "react-intersection-observer";
const Reviews = () => {
  const {
    ref: ref1,
    inView: inView1,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref2,
    inView: inView2,
    entry2,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
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
                  <div className={`${styles.divBlock124}`}>
                    <div
                      ref={ref1}
                      className={`${styles.innerDivBlock124}  ${
                        inView1 ? styles.slideIn : ""
                      }`}
                    >
                      <h2>
                        What Our <span>Clients</span>
                        <br></br>Are Saying
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div
                      ref={ref2}
                      className={`${styles.paraOuterDiv} ${
                        inView2 ? styles.slideIn : ""
                      }`}
                    >
                      <p className={styles.paragraph10}>
                        See how we've helped our clients achieve success with
                        our expertise, dedication, and tailored solutions.
                      </p>
                    </div>
                  </div>
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
