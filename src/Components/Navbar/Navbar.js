import styles from "./Navbar.module.css";

import NavbarBrandImage from "../../images/Navbar-brand-image.webp";
import { useEffect, useRef, useState } from "react";

import navOverlayImage1 from "../../images/nav-overlay-image1.svg";

const Navbar = () => {
  var divRef = useRef(null);
  let [prevScroll, setPreviousScroll] = useState(null);
  var [scrollValue, setScrollValue] = useState(0);
  let prev = 0;

  useEffect(() => {
    var scrollHandler = (event) => {
      var currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop >= prev) {
        var scroll = 0;
        var nav = document.getElementsByClassName(styles.nav)[0];
        if (!nav.classList.contains(styles.moveNav)) {
          nav.classList.toggle(styles.moveNav);
        }
      } else {
        var scroll = -101;
        var nav = document.getElementsByClassName(styles.nav)[0];
        if (nav.classList.contains(styles.moveNav)) {
          nav.classList.toggle(styles.moveNav);
        }
      }
      prev = currentScrollTop;
    };
    document.addEventListener("scroll", scrollHandler);
  }, []);

  //   window.addEventListener('scroll', () => {
  //     // Get the current vertical scroll position, cross-browser compatible
  //     const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (currentScrollTop > lastScrollTop) {
  //         // Downscroll code
  //         console.log('Scrolling Down');
  //     } else if (currentScrollTop < lastScrollTop) {
  //         // Upscroll code
  //         console.log('Scrolling Up');
  //     }
  //     // If currentScrollTop === lastScrollTop, it might be horizontal scroll or no scroll

  //     // Update the last scroll position for the next event
  //     // The conditional ensures that the value never goes below 0 on mobile (overscroll effect)
  //     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  // }, false);

  function navButtonClickHandler() {
    var navbarToMove = document.getElementsByClassName(
      styles.navMenuWrapper2
    )[0];

    var parentNavbarWrapper = document.getElementsByClassName(
      styles.navbarWrapper2
    )[0];
    var navbarWrapperChildAfter = document.getElementsByClassName(
      styles.wNavButton
    )[0];

    var parentNavbarOverlay = document.getElementsByClassName(
      styles.wNavOverlay
    )[0];
    if (
      parentNavbarOverlay !== navbarToMove &&
      parentNavbarOverlay.contains(navbarToMove)
    ) {
      parentNavbarWrapper.insertBefore(navbarToMove, navbarWrapperChildAfter);
      // parentNavbarOverlay.style.display = "none";
      navbarToMove.style.display = "none";
      parentNavbarOverlay.classList.toggle(styles.navOverlayClicked);
    } else {
      parentNavbarOverlay.appendChild(navbarToMove);
      parentNavbarOverlay.classList.toggle(styles.navOverlayClicked);
      // parentNavbarOverlay.style.display = "block";
      // parentNavbarOverlay.style.height = "500px";
      navbarToMove.style.display = "block";
    }
  }

  return (
    <div className={styles.navbarNoShadow2}>
      <div
        // className={styles.navbarNoShadow2}
        className={`${styles.nav}`}
        // style={{ transform: `translate3d(0px, ${scrollValue}px, 0px)` }}
      >
        <div className={`${styles.navbarNoShadowContainer2} ${styles.wNav}`}>
          <div className={`${styles.containerRegular2}`}>
            <div className={`${styles.navbarWrapper2}`}>
              <a
                className={`${styles.navbarBrand2} ${styles.wNavBrand} ${styles.wCurrent}`}
              >
                <img src={NavbarBrandImage}></img>
              </a>
              <nav className={`${styles.navMenuWrapper2} ${styles.wNavMenu}`}>
                <ul className={`${styles.wListUnstyled} ${styles.navMenu2}`}>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Home
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      About
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Services
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Solutions
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Pricing
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Careers
                    </a>
                  </li>
                  <li className={styles.listItem7}>
                    <a className={`${styles.wCurrent} ${styles.navLink2}`}>
                      Contact
                    </a>
                  </li>
                  <li className={styles.listItem8}>
                    <div className={styles.navButtonWrapper2}>
                      {" "}
                      <a
                        className={`${styles.buttonPrimary2} ${styles.wButton2}`}
                      >
                        Free CRO Audit
                      </a>
                    </div>
                  </li>
                  <li className={`${styles.listItem6}`}>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                    <a
                      className={`${styles.linkBlock10} ${styles.wInlineBlock}`}
                    >
                      <img
                        src={navOverlayImage1}
                        className={styles.image83}
                      ></img>
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                className={`${styles.menuButton2} ${styles.wNavButton}`}
                onClick={navButtonClickHandler}
              >
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
          <div className={styles.wNavOverlay}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
