import styles from "../Faq/Faq.module.css";
import { useInView } from "react-intersection-observer";

import faqIcon from "../../images/faq-icon.svg";

const Faq = () => {
  const {
    ref: ref1,
    inView: inView1,
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

  const onClickedHandler = (event) => {
    event.target.classList.toggle(styles.iconClicked);
    // console.log(event.target);
    const parent = event.target.parentElement;
    const parentSibling = parent.nextElementSibling;
    const myDivs = document.getElementsByClassName(styles.lynxAccordionContent);
    const myDiv = myDivs[5];
    console.log("Parent Node Sibling", parentSibling);
    parentSibling.classList.toggle(styles.lynxAccordionContentToggle);
  };

  return (
    <div>
      <div className={styles.faq}>
        <div className={styles.containerDiv}>
          <div className={styles.faqMaminDiv}>
            <div className={styles.faqInner1}>
              <div
                ref={ref1}
                className={`${styles.divBlock124} ${
                  inView1 ? styles.slideIn : ""
                }`}
              >
                <h2 id={styles["faqHeading"]}>
                  Frequently Asked
                  <br></br>
                  <span>Questions</span>
                </h2>
              </div>
              <div
                ref={ref2}
                className={`${styles.paraOuter} ${
                  inView1 ? styles.slideIn : ""
                }`}
              >
                {" "}
                <p
                  className={styles.paragraph13}
                  id={styles["faqParagraphHeading"]}
                >
                  Got questions? We've got answers! Explore our FAQs to find
                  solutions to common queries. contact us at<br></br>
                  sales@developios.com if you need to ask something specific
                  about your project.
                </p>
              </div>
            </div>
            <div className={styles.faqInner3}>
              <div className={styles.lynxBlockFaq}>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How does the process look like?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    ></div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
                  </div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      What’s included in your UX CRO Audit?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    ></div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
                  </div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How long does it take to build a custom website or SaaS
                      platform?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    >
                      {" "}
                    </div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
                  </div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      Do you offer support for eCommerce development after
                      launch?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    ></div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
                  </div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      What platforms do you work with for web development?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    ></div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
                  </div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How many revisions do I get?
                    </h3>
                    <div
                      className={styles.lynxIconArrow}
                      onClick={onClickedHandler}
                    ></div>
                  </div>
                  <div className={styles.lynxAccordionContent}>
                    <p className={styles.lynxParagraphAccordion}>
                      We’ll send you an link to the onboarding form, after
                      filling it out you’ll be invited to the slack workspace to
                      communicate effectively. furthermore, we schedule calls to
                      make sure we’re on same page.
                    </p>
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

export default Faq;
