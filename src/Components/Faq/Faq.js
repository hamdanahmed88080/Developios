import styles from "../Faq/Faq.module.css";

const Faq = () => {
  return (
    <div>
      <div className={styles.faq}>
        <div className={styles.containerDiv}>
          <div className={styles.faqMaminDiv}>
            <div className={styles.faqInner1}>
              <div className={styles.divBlock124}>
                <h2 id={styles["faqHeading"]}>
                  Frequently Asked
                  <br></br>
                  <span>Questions</span>
                </h2>
              </div>
              <p
                className={styles.paragraph13}
                id={styles["faqParagraphHeading"]}
              >
                Got questions? We've got answers! Explore our FAQs to find
                solutions to common queries. contact us at<br></br>
                sales@developios.com if you need to ask something specific about
                your project.
              </p>
            </div>
            <div className={styles.faqInner3}>
              <div className={styles.lynxBlockFaq}>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How does the process look like?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      What’s included in your UX CRO Audit?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How long does it take to build a custom website or SaaS
                      platform?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      Do you offer support for eCommerce development after
                      launch?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      What platforms do you work with for web development?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
                </div>
                <div className={styles.lynxAccordionItem}>
                  <div className={styles.lynxAccordionHeader}>
                    <h3 className={styles.lynxHeadingAccordion}>
                      How many revisions do I get?
                    </h3>
                  </div>
                  <div className={styles.lynxAccordionContent}></div>
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
