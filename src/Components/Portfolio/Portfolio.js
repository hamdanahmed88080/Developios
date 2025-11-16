import styles from "../Portfolio/Portfolio.module.css";

import { useState, useEffect } from "react";

import portfolioImageLeasabites from "../../images/672c6741e01a986a52015586_leasebites.webp";
import portfolioImageGuriEnterprise from "../../images/672c6786b45a0a10ae7790a0_guri enterprise.webp";
import portfolioImageTalkAsia from "../../images/672c67b0b245d962f937266b_Talk Asia.webp";
import portfolioImageSsafLogistics from "../../images/672c67f0b45a0a10ae77ef57_SSAF Logistics.webp";

import buffeloLogo from "../../images/buffelo.webp";
import brainSoulsLogo from "../../images/brainsouls.webp";
import ktechLogo from "../../images/ktech.webp";
import iStoreLogo from "../../images/1store.svg";

import jack2MediaUxUi from "../../images/jack2media.webp";
import nutradoraUxUi from "../../images/nutrada.webp";
import genesisInnovationUxUi from "../../images/genesisInnovation.webp";
import championMotorsportUxUi from "../../images/championMotorsport.webp";

import springFreeTrampolineCro from "../../images/springFreeTrampolineCri.webp";
import nutradoraCro from "../../images/nutradoraCro.svg";
import rfamdCro from "../../images/rfamdCro.webp";
import blendFrendCro from "../../images/blendFrendCro.webp";

const Portfolio = () => {
  var [movingValue, setMovingValue] = useState(-2100);
  var [activeSlider, setActiveSlider] = useState(null);
  var [activeButton, setActiveButton] = useState(null);
  var min = -2100;
  var max = 0;

  useEffect(() => {
    setActiveSlider(document.getElementById("webdesign"));
    setActiveButton(document.getElementById("webdesign_b"));
  }, []);

  function changeMovingValue() {
    let value = movingValue;
    if (value < max) {
      value++;
    } else {
      value = -2100;
    }
    setMovingValue(value);
    requestAnimationFrame(changeMovingValue);
  }

  window.requestAnimationFrame(changeMovingValue);

  function changeSlider(e) {
    var text = "";
    // console.log("From Change Slider");
    // console.log(e.target.nodeName, "From Change Slider");
    if (e.target.nodeName === "A") {
      // console.log("A");
      // console.log(e.target.children[0].innerText);
      text = e.target.children[0].innerText;
    } else if (e.target.nodeName === "DIV") {
      // console.log("Div");
      // console.log(e.target.innerText);
      text = e.target.innerText;
    }

    console.log("Text", text);
    if (text === "Web Design") {
      var previousActive = activeSlider;
      var previousActiveButton = activeButton;
      var newActive = document.getElementById("webdesign");
      var newActiveButton = document.getElementById("webdesign_b");
      previousActive.classList.toggle(styles.wTabActive);
      previousActiveButton.classList.toggle(styles.current);
      newActive.classList.toggle(styles.wTabActive);
      newActiveButton.classList.toggle(styles.current);

      setActiveSlider(newActive);
      setActiveButton(newActiveButton);
    } else if (text === "Logo") {
      var previousActiveButton = activeButton;
      var newActiveButton = document.getElementById("logo_b");
      var previousActive = activeSlider;
      var newActive = document.getElementById("logo");
      previousActive.classList.toggle(styles.wTabActive);
      newActive.classList.toggle(styles.wTabActive);
      previousActiveButton.classList.toggle(styles.current);
      newActiveButton.classList.toggle(styles.current);
      setActiveSlider(newActive);
      setActiveButton(newActiveButton);
    } else if (text === "UX UI") {
      var previousActiveButton = activeButton;
      var previousActive = activeSlider;
      var newActive = document.getElementById("uxui");
      var newActiveButton = document.getElementById("uxui_b");
      previousActiveButton.classList.toggle(styles.current);
      previousActive.classList.toggle(styles.wTabActive);
      newActiveButton.classList.toggle(styles.current);
      newActive.classList.toggle(styles.wTabActive);
      setActiveButton(newActiveButton);
      setActiveSlider(newActive);
    } else {
      var previousActiveButton = activeButton;
      var previousActive = activeSlider;
      var newActive = document.getElementById("cro");
      var newActiveButton = document.getElementById("cro_b");
      previousActiveButton.classList.toggle(styles.current);
      newActiveButton.classList.toggle(styles.current);
      previousActive.classList.toggle(styles.wTabActive);
      newActive.classList.toggle(styles.wTabActive);
      setActiveButton(newActiveButton);
      setActiveSlider(newActive);
    }
  }

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioHeader}>
        <a
          className={`${styles.tabLink} ${styles.wInlineBlock} ${styles.wTabLink} ${styles.current}`}
          onClick={(e) => changeSlider(e)}
          id="webdesign_b"
        >
          <div className={styles.textBlock}>Web Design</div>
        </a>
        <a
          className={`${styles.tabLink} ${styles.wInlineBlock} ${styles.wTabLink} `}
          onClick={(e) => changeSlider(e)}
          id="logo_b"
        >
          <div className={styles.textBlock}>Logo</div>
        </a>
        <a
          className={`${styles.tabLink} ${styles.wInlineBlock} ${styles.wTabLink}`}
          onClick={(e) => changeSlider(e)}
          id="uxui_b"
        >
          <div className={styles.textBlock}>UX UI</div>
        </a>
        <a
          className={`${styles.tabLink} ${styles.wInlineBlock} ${styles.wTabLink}`}
          onClick={(e) => changeSlider(e)}
          id="cro_b"
        >
          <div className={styles.textBlock}>CRO</div>
        </a>
      </div>
      <div className={`${styles.tabsContent} ${styles.wTabContent}`}>
        <div
          className={`${styles.wTabActive} ${styles.wTabPane} `}
          id="webdesign"
          style={{ opacity: "1", transform: "all, opacity 200ms" }}
        >
          <div
            className={styles.portfolioBanner}
            style={{
              transform: `translate3d(${movingValue}px,0px,0px)`,
              scale: "1,1,1",
            }}
          >
            <div className={`${styles.div21}`}>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={portfolioImageTalkAsia}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageGuriEnterprise}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageLeasabites}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
              </div>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={portfolioImageTalkAsia}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageGuriEnterprise}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageLeasabites}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
                <div className={styles.div20}>
                  <img src={portfolioImageSsafLogistics}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.wTabPane}`} id="logo">
          <div
            className={styles.portfolioBanner}
            style={{
              transform: `translate3d(${movingValue}px,0px,0px)`,
              scale: "1,1,1",
            }}
          >
            <div className={`${styles.div21}`}>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={brainSoulsLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={ktechLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={iStoreLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={buffeloLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={iStoreLogo}></img>
                </div>
              </div>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={brainSoulsLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={ktechLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={iStoreLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={buffeloLogo}></img>
                </div>
                <div className={styles.div20}>
                  <img src={iStoreLogo}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.wTabPane}`} id="uxui">
          <div
            className={styles.portfolioBanner}
            style={{
              transform: `translate3d(${movingValue}px,0px,0px)`,
              scale: "1,1,1",
            }}
          >
            <div className={`${styles.div21}`}>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={championMotorsportUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={genesisInnovationUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={jack2MediaUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={genesisInnovationUxUi}></img>
                </div>
              </div>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={championMotorsportUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={genesisInnovationUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={jack2MediaUxUi}></img>
                </div>
                <div className={styles.div20}>
                  <img src={genesisInnovationUxUi}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.wTabPane}`}
          id="cro"
          style={{ transition: "all 1s ease-in-out" }}
        >
          <div
            className={styles.portfolioBanner}
            style={{
              transform: `translate3d(${movingValue}px,0px,0px)`,
              scale: "1,1,1",
              // transition: "all 1s ease-in-out",
            }}
          >
            <div className={`${styles.div21}`}>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={blendFrendCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={rfamdCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={springFreeTrampolineCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraCro}></img>
                </div>
              </div>
              <div className={`${styles.div19}`}>
                <div className={styles.div20}>
                  <img src={blendFrendCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={rfamdCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={springFreeTrampolineCro}></img>
                </div>
                <div className={styles.div20}>
                  <img src={nutradoraCro}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
