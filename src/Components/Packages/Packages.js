import styles from "./Packages.module.css";
import Package from "./Package/Package";

import { useInView } from "react-intersection-observer";

const Packages = () => {
  const {
    ref: ref,
    inView: inView,
    entry: entry1,
  } = useInView({
    rootMargin: "-20%",
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    rootMargin: "-20%",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div>
      <div className="package-home-process">
        <div className="page-padding">
          <div className="container-medium">
            <div className="page-vertical page-xhuge">
              <div className="margin-bottom margin-xhuge">
                <div className="max-width-large align-center text-align-center">
                  <div
                    ref={ref}
                    className={`${styles.divBlock124} ${
                      inView ? styles.slideIn : ""
                    }`}
                  >
                    <h2 className={`${styles.divBlock124Heading}`}>
                      Choose a <span>Package</span>
                      <br></br>That suites you
                    </h2>
                  </div>
                  <p
                    className={`${styles.paragraph10} ${
                      inView2 ? styles.slideIn : ""
                    }`}
                    ref={ref2}
                  >
                    Whether you're just starting or scaling your business, we
                    have the right plan for you. Select a pricing plan that fits
                    your needs and get access to top-notch digital services.
                  </p>
                </div>
              </div>
              <div className="process_container">
                <div className="process_wrapper">
                  <div className={styles.packages}>
                    <Package></Package>
                    <Package></Package>
                    <Package></Package>
                    <Package></Package>
                    <Package></Package>
                    <Package></Package>
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

export default Packages;
