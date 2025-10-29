import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.paddingSection}>
        <div
          className={`${styles.wLayoutBlockContainer} ${styles.mainContainer} ${styles.wContainer}`}
        >
          <div className={styles.logoMainDiv}>
            <div className={styles.divBlock112}>
              <a className={styles.wInlineBlock}>
                <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670796018369cc822f08c1b9_logo%20(3).svg"></img>
              </a>
            </div>
            <div className={styles.mainLinkDiv}>
              <div className={styles.divBlock106}>
                <a className={styles.footerLink}>Home</a>
                <a className={styles.footerLink}>portfolio</a>
                <a className={styles.footerLink}>Services</a>
              </div>
              <div className={styles.divBlock107}>
                <a className={styles.footerLink}>Testimonials</a>
                <a className={styles.footerLink}>Pricing</a>
                <a className={styles.footerLink}>Careers</a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.divBlock84}>
              <a className={`${styles.foooterLink} ${styles.emailFt}`}>
                sales@developios.com
              </a>
              <a
                className={`${styles.footerLink} ${styles.emailFt} ${styles.coll}`}
              >
                +923215833822
              </a>
            </div>
            <div className={styles.divBlock83}>
              <div className={styles.divBlock118}>
                <a className={`${styles.linkBlock25} ${styles.wInlineBlock}`}>
                  <img
                    className={styles.image98}
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67333631b95147a1fced2337_fiverr-2%201.svg"
                  ></img>
                </a>
                <a className={`${styles.linkBlock26} ${styles.wInlineBlock} `}>
                  <img
                    className={styles.image99}
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336734cd2ee3abb52c391_upwork%201.svg"
                  ></img>
                </a>
                <a className={`${styles.linkBlock27} ${styles.wInlineBlock} `}>
                  <img
                    className={styles.image100}
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336912d534dd54d3a2292_Frame%202121449735.svg"
                  ></img>
                </a>
                <a className={`${styles.linkBlock28} ${styles.wInlineBlock} `}>
                  <img
                    className={styles.image101}
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336ae394ede6c399ad4bd_wise-1%201.svg"
                  ></img>
                </a>
              </div>
              <div className={styles.divBlock85}>
                <p className={styles.Paragraph20}>© 2024 Copyright By </p>
                <a className={styles.link2}>
                  <span className={styles.textspan2}>Developios</span>
                </a>
              </div>
              <div className={styles.divBlock92}>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-linkedin"></p>
                </a>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-behance"></p>
                </a>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-twitter"></p>
                </a>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-instagram"></p>
                </a>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-facebook"></p>
                </a>
                <a className={`${styles.linkBlock3} ${styles.wInlineBlock} `}>
                  <p className="fa fa-tiktok"></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
