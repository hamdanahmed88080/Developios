import styles from "./Service.module.css";

import arrowRightSvg from "../../../images/arrow-right-top.svg";

import serviceHoverImage from "../../../images/service-hover-image.svg";

import { useInView } from "react-intersection-observer";

const Service = ({ id }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  function onMouseEnterHandler(event) {
    var currentTarget = event.currentTarget;
    // console.log(currentTarget.children);
    var targetChildren = currentTarget.children;
    var arrowRightDiv = targetChildren[2].children[0];
    var img = targetChildren[2].children[0].children[0];
    // var img = targetChildren[2].children[0];
    // console.log();
    if (arrowRightDiv && img) {
      arrowRightDiv.classList.toggle(styles.buttonHover);
      // img.style.color = "white";
      img.style.color = "white";
    }
    // currentTarget.children.forEach((element) => {
    //   console.log(element);
    // });
    var element = document.getElementsByClassName("Service_hoverImage__nNC2D");
    var scalableImage = currentTarget.lastElementChild;

    if (scalableImage) {
      scalableImage.classList.toggle(styles.hoverImageScale);
    }
  }

  function onMouseLeaveHandler(event) {
    var currentTarget = event.currentTarget;
    var scalableImage = currentTarget.lastElementChild;
    var targetChildren = currentTarget.children;
    var arrowRightDiv = targetChildren[2].children[0];
    var img = targetChildren[2].children[0].children[0];
    if (arrowRightDiv && img) {
      arrowRightDiv.classList.toggle(styles.buttonHover);
      // img.style.color = "white";
      img.style.color = "black";
    }

    if (scalableImage) {
      scalableImage.classList.toggle(styles.hoverImageScale);
    }
  }

  return (
    <div style={{ display: "grid" }}>
      <a>
        <div
          id={id}
          ref={ref}
          className={`${styles.serviceDiv} ${
            inView ? styles.serviceSlideIn : ""
          }`}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <h2>
            <span>
              UX CRO<br></br>
            </span>{" "}
            Audit
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className={styles.buttonArea}>
            <div className={styles.arrowRightSvg}>
              <p>
                <i
                  className="fa fa-arrow-right"
                  style={{ fontSize: "20px" }}
                ></i>
              </p>
            </div>
            <p>Learn More</p>
          </div>
          <img className={styles.hoverImage} src={serviceHoverImage}></img>
        </div>
      </a>
    </div>
  );
};

export default Service;
