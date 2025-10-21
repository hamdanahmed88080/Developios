import styles from "./Hero.module.css";

import linkedinLogo from "../../icons/linkedin.png";
import instagramLogo from "../../icons/instagram.png";
import facebookLogo from "../../icons/facebook-2.svg";
import twitterLogo from "../../icons/twitter.png";
import youtubeLogo from "../../icons/youtube.png";
import behanceLogo from "../../icons/behance.png";
import ticktokLogo from "../../icons/tiktok.png";

const Hero = () => {
  return (
    <div>
      <div className={styles.heroDiv}>
        <div className={styles.clientReviewsDiv}></div>
        <div className={styles.heroMainHeading}>
          TAILORED <span>WEB SOLUTIONS</span> TO TURN CLICKS INTO CONVERSIONS
        </div>
        <div className={styles.heroSubHeading}>
          Scale your business with our expert-vetted team specializing in web
          design, development, e-commerce and CRO, dedicated to driving growth
          and maximizing engagement.
        </div>
        <div className={styles.heroButtons}>
          <button id={styles["heroButton1"]}>
            <p>Book a 15 min call</p>
          </button>
          <button id={styles["heroButton2"]}>
            <p>Life at Developios</p>
          </button>
        </div>
        <div className={styles.heroFreelanceLinks}>
          <div>
            <div id="hero-freelance-link-1 " className={styles.heroLinks}>
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91c66430166d344553_Upwork.svg"></img>
            </div>
            <div id="hero-freelance-link-2 " className={styles.heroLinks}>
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91f6c166ebb6fced10_fiverr.svg"></img>
            </div>
            <div id="hero-freelance-link-3 " className={styles.heroLinks}>
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd9268c9536515ba8363_clutch.svg"></img>
            </div>
            <div id="hero-freelance-link-4 " className={styles.heroLinks}>
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67611057dd836b3d80441843_Verfifed%20Agency%20Round%20v1.webp"></img>
            </div>
          </div>
        </div>
        <div className={styles.heroSocialSidebar}>
          <a href="#">
            <img
              src={linkedinLogo}
              id="hero-LinkedIn"
              className={styles.heroSocailIcons}
            ></img>
          </a>
          <a href="#">
            <img
              id="hero-instagram"
              className={styles.heroSocailIcons}
              src={instagramLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocailIcons}
              id="hero-facebook"
              alt="icon"
              src={facebookLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocailIcons}
              id="hero-twitter"
              src={twitterLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocailIcons}
              id="hero-youtube"
              src={youtubeLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocailIcons}
              id="hero-behance"
              src={behanceLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocailIcons}
              id="hero-ticktok"
              src={ticktokLogo}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
