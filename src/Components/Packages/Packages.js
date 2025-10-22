import styles from "./Packages.module.css";
import Package from "./Package/Package";

const Packages = () => {
  return (
    <div>
      <div className="package-home-process">
        <div className="page-padding">
          <div className="container-medium">
            <div className="page-vertical page-xhuge">
              <div className="margin-bottom margin-xhuge">
                <div className="max-width-large align-center text-align-center">
                  <div className="div-block-124">
                    <h2>
                      Choose a <span>Package</span>
                      <br></br>That suites you
                    </h2>
                  </div>
                  <p className="paragraph-10">
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
