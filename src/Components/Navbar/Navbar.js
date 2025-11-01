import styles from "./Navbar.module.css";

import NavbarBrandImage from "../../images/Navbar-brand-image.webp";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  var divRef = useRef(null);
  let [prevScroll, setPreviousScroll] = useState(null);
  var [scrollValue, setScrollValue] = useState(0);
  let prev = 0;

  useEffect(() => {
    console.log("Use Effect Run");
    var scrollHandler = (event) => {
      var currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop >= prev) {
        var scroll = 0;
        // setInterval(() => {
        //   if (scroll >= -100) {
        //     scroll -= 1;
        //     setScrollValue(scroll);
        //     console.log(scrollValue, "This is scroll value", scroll);
        //   }
        // }, 20);
        function scrollNavUp() {
          if (scroll > -100) {
            scroll -= 1;
            setScrollValue(scroll);
          }
          requestAnimationFrame(scrollNavUp);
        }
        window.requestAnimationFrame(scrollNavUp);

        // console.log("Scrolled Down", prev, currentScrollTop);
      } else {
        var scroll = -101;
        console.log("Scrolled Up", prev, currentScrollTop);
        function scrollNavDown() {
          if (scroll < 0) {
            scroll += 1;
            setScrollValue(scroll);
          }
          requestAnimationFrame(scrollNavDown);
        }
        window.requestAnimationFrame(scrollNavDown);
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

  return (
    <div>
      <div
        className={styles.navbarNoShadow2}
        style={{ transform: `translate3d(0px, ${scrollValue}px, 0px)` }}
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
                  <li className={styles.listItem7}>
                    <div className={styles.navButtonWrapper2}>
                      {" "}
                      <a
                        className={`${styles.buttonPrimary2} ${styles.wButton2}`}
                      >
                        Free CRO Audit
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
