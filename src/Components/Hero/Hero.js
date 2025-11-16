import styles from "./Hero.module.css";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import image1Review from "../../images/hero-review-image-1.webp";
import image2Review from "../../images/hero-review-image02.webp";
import image3Review from "../../images/hero-review-image-3.webp";
import image4Review from "../../images/hero-review-image-4.webp";
import imageArrow from "../../images/hero-review-image-arrow.svg";
import imageStars from "../../images/hero-review-image-stars.svg";

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

  const {
    ref: ref3,
    inView: inView3,
    entry: entry3,
  } = useInView({
    rootMargin: "-20%",
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref4,
    inView: inView4,
    entry: entry4,
  } = useInView({
    rootMargin: "0%",
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref5,
    inView: inView5,
    entry: entry5,
  } = useInView({
    rootMargin: "0%",
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref6,
    inView: inView6,
    entry: entry6,
  } = useInView({
    rootMargin: "0%",
    threshold: 0,
    triggerOnce: true,
  });

  const {
    ref: ref7,
    inView: inView7,
    entry: entry7,
  } = useInView({
    rootMargin: "0%",
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref8,
    inView: inView8,
    entry: entry8,
  } = useInView({
    rootMargin: "0%",
    threshold: 0,
    triggerOnce: true,
  });

  var reviewsObject = {
    items: [
      {
        url: "https://youtube.com/shorts/PflSd3u6U_Q",
        originalUrl: "https://youtube.com/shorts/PflSd3u6U_Q",
        width: 940,
        height: 705,
        thumbnailUrl: "https://i.ytimg.com/vi/PflSd3u6U_Q/hq2.jpg",
        html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FPflSd3u6U_Q%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FPflSd3u6U_Q%3Fundefined&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPflSd3u6U_Q%2Fhq2.jpg&type=text%2Fhtml&schema=youtube" width="940" height="705" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>',
        type: "video",
      },
      {
        url: "https://youtube.com/shorts/ulRQ9ttQVEs?feature=share",
        originalUrl: "https://youtube.com/shorts/ulRQ9ttQVEs?feature=share",
        width: 940,
        height: 705,
        thumbnailUrl: "https://i.ytimg.com/vi/ulRQ9ttQVEs/hq2.jpg",
        html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FulRQ9ttQVEs%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FulRQ9ttQVEs%3Ffeature%3Dshare&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FulRQ9ttQVEs%2Fhq2.jpg&type=text%2Fhtml&schema=youtube" width="940" height="705" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>',
        type: "video",
      },
      {
        url: "https://youtube.com/shorts/CABmxLyMIqY",
        originalUrl: "https://youtube.com/shorts/CABmxLyMIqY",
        width: 940,
        height: 705,
        thumbnailUrl: "https://i.ytimg.com/vi/CABmxLyMIqY/hq2.jpg",
        html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FCABmxLyMIqY%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FCABmxLyMIqY%3Fundefined&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FCABmxLyMIqY%2Fhq2.jpg&type=text%2Fhtml&schema=youtube" width="940" height="705" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>',
        type: "video",
      },
      {
        url: "https://www.youtube.com/shorts/hYdGH3ZaP8E",
        originalUrl: "https://www.youtube.com/shorts/hYdGH3ZaP8E",
        width: 940,
        height: 705,
        thumbnailUrl: "https://i.ytimg.com/vi/hYdGH3ZaP8E/hq2.jpg",
        html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhYdGH3ZaP8E%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FhYdGH3ZaP8E%3Fundefined&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FhYdGH3ZaP8E%2Fhq2.jpg&type=text%2Fhtml&schema=youtube" width="940" height="705" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>',
        type: "video",
      },
    ],
    group: "",
  };

  useEffect(() => {
    var script = document.createElement("script");
    var anchorTag = document.getElementsByClassName(styles.anchor)[0];
    script.async = true;
    // script.textContent = reviewsObject;
    // console.log(anchorTag.body);

    anchorTag.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className={styles.heroDiv}>
        <div className={styles.heroUpper}>
          <div className={styles.reviewsOuter}>
            <div
              className={`${styles.clientReviewsDiv} ${
                inView ? styles.slideIn : ""
              }`}
              ref={ref}
            >
              <a className={styles.anchor}>
                <div className={styles.divBlock129}>
                  <div className={styles.divBlock29}>
                    <img
                      src={image1Review}
                      className={styles.marginRight}
                    ></img>
                    <img
                      src={image2Review}
                      className={styles.marginRight}
                    ></img>
                    <img
                      src={image3Review}
                      className={styles.marginRight}
                    ></img>
                    <img src={image4Review}></img>
                  </div>
                  <div className={styles.divBlock269}>
                    <div className={styles.divBlock30}>
                      <p>What Clients Say about Us</p>
                      <img src={imageArrow}></img>
                    </div>
                    <div className={styles.divBlock26}>
                      <div className={styles.divBlock28}>
                        <img src={imageStars}></img>
                      </div>
                      <div className={styles.divBlock27}>
                        <p>based on 100+ reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
                <script type="application/json"></script>
              </a>
            </div>
          </div>

          <div className={styles.headingOuter}>
            <div
              className={`${styles.heroMainHeading} ${
                inView2 ? styles.slideIn : ""
              }`}
              ref={ref2}
            >
              TAILORED <span>WEB SOLUTIONS</span> TO TURN CLICKS INTO
              CONVERSIONS
            </div>
          </div>

          <div className={styles.subHeadingOuter}>
            <div
              className={`${styles.heroSubHeading} ${
                inView3 ? styles.slideIn : ""
              }`}
              ref={ref3}
            >
              Scale your business with our expert-vetted team specializing in
              web design, development, e-commerce and CRO, dedicated to driving
              growth and maximizing engagement.
            </div>
          </div>
          <div className={styles.buttonOuter}>
            <div
              className={`${styles.heroButtons} ${
                inView4 ? styles.slideIn : ""
              }`}
              ref={ref4}
            >
              <button id={styles["heroButton1"]}>
                <p>Book a 15 min call</p>
              </button>
              <button id={styles["heroButton2"]}>
                <p>Life at Developios</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroFreelanceLinksOuter}>
          <div className={styles.heroFreelanceLinks}>
            <div>
              <div id={styles["link1"]} className={styles.heroLinks}>
                <img
                  className={`${inView5 ? styles.slideIn : ""}`}
                  ref={ref5}
                  src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91c66430166d344553_Upwork.svg"
                ></img>
              </div>
              <div id={styles["link2"]} className={styles.heroLinks}>
                <img
                  ref={ref6}
                  className={`${inView6 ? styles.slideIn : ""}`}
                  src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91f6c166ebb6fced10_fiverr.svg"
                ></img>
              </div>
              <div id={styles["link3"]} className={styles.heroLinks}>
                <img
                  ref={ref7}
                  className={`${inView7 ? styles.slideIn : ""}`}
                  src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd9268c9536515ba8363_clutch.svg"
                ></img>
              </div>
              <div id={styles["link4"]} className={styles.heroLinks}>
                <img
                  ref={ref8}
                  className={`${inView8 ? styles.slideIn : ""}`}
                  src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67611057dd836b3d80441843_Verfifed%20Agency%20Round%20v1.webp"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroSocialSidebar}>
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
