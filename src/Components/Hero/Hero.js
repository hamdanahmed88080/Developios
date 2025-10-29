import styles from "./Hero.module.css";

import linkedinLogo from "../../icons/linkedin.png";
import instagramLogo from "../../icons/instagram.png";
import facebookLogo from "../../icons/facebook-2.svg";
import twitterLogo from "../../icons/twitter.png";
import youtubeLogo from "../../icons/youtube.png";
import behanceLogo from "../../icons/behance.png";
import ticktokLogo from "../../icons/tiktok.png";

import image4 from "../../images/svg-image-4.svg";
import image5 from "../../images/svg-image-5.svg";
import image6 from "../../images/svg-image-6.svg";
import image7 from "../../images/svg-image-7.svg";
import image8 from "../../images/svg-image-8.svg";

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
          {/* <a href="#">
            <img
              src={linkedinLogo}
              id="hero-LinkedIn"
              className={styles.heroSocialIcons}
            ></img>
          </a>
          <a href="#">
            <img
              id="hero-instagram"
              className={styles.heroSocialIcons}
              src={image4}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocialIcons}
              id="hero-facebook"
              alt="icon"
              src={facebookLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocialIcons}
              id="hero-twitter"
              src={image5}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocialIcons}
              id="hero-youtube"
              src={image6}
            ></img>
          </a>
          <a href="#">
            <img
              className={styles.heroSocialIcons}
              id="hero-behance"
              src={image7}
            ></img>
          </a> */}
          {/* <a href="#">
            <img
              className={styles.heroSocialIcons}
              id="hero-ticktok"
              src={image8}
            ></img>
          </a> */}
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-youtube-play"
                class="fa fa-linkedin"
                style={{ fontSize: "22px" }}
              ></i>
            </div>{" "}
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-youtube-play"
                class="fa fa-instagram	"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-youtube-play"
                class="fa fa-facebook-f "
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-youtube-play"
                class="fa fa-twitter "
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-youtube-play"
                class="fa fa-youtube-play"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-behance"
                class="fa fa-behance "
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
          <a href="#">
            <div
              className={`${styles.heroSocialIcons} ${styles.socialIconNew}`}
            >
              <i
                className="fa fa-github"
                class="fa fa-github"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

// fa fa-facebook-f

export default Hero;
