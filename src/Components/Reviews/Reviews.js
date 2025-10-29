import styles from "./Reviews.module.css";
import profilePic1 from "../../images/Review_PP_1.webp";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Reviews = () => {
  var [divScrollUp, setDivScrollUp] = useState(0);
  let [divScrollDown, setDivScrollDown] = useState(-750);
  let min = -750;
  let max = 0;

  useEffect(() => {
    // scrollUp();
    // scrollDown();
  }, []);

  function scrollUp() {
    const intervalId = setInterval(() => {
      setDivScrollUp((prev) => {
        if (prev > min) {
          return prev - 1;
        } else {
          return 0;
        }
      });
    }, 20);
    return () => clearInterval(intervalId);
  }

  // function scrollDown() {
  //   const intervalId = setInterval(() => {
  //     setDivScrollDown((prev) => {
  //       if (prev < max) {
  //         return prev + 1;
  //       } else {
  //         return -750;
  //       }
  //     });
  //   }, 20);
  //   return () => clearInterval(intervalId);
  // }

  function scrollDown(timmy) {
    let value = divScrollDown;
    if (value < 0) {
      value = value + 1;
    } else {
      value = -750;
    }
    setDivScrollDown(value);
    requestAnimationFrame(scrollDown);
  }

  function scrollUp(timmy) {
    let value = divScrollUp;
    if (value > -750) {
      value = value - 1;
    } else {
      value = 0;
    }
    setDivScrollUp(value);
    requestAnimationFrame(scrollUp);
  }

  window.requestAnimationFrame(scrollDown);
  window.requestAnimationFrame(scrollUp);

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
  return (
    <div>
      {" "}
      <div className={styles.sectionHomeProcess}>
        <div className="testimonial-main-div">
          <div className={styles.pagePadding}>
            <div className={styles.containerMedium}>
              <div className={`${styles.pageVertical} ${styles.pageXhuge}`}>
                <div className={`${styles.marginBottom} ${styles.marginXhuge}`}>
                  <div
                    className={`${styles.maxWidthLarge} ${styles.alignCenter} ${styles.textAlignCenter}`}
                  >
                    <div className={`${styles.divBlock124}`}>
                      <div
                        ref={ref1}
                        className={`${styles.innerDivBlock124}  ${
                          inView1 ? styles.slideIn : ""
                        }`}
                      >
                        <h2>
                          What Our <span>Clients</span>
                          <br></br>Are Saying
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div
                        ref={ref2}
                        className={`${styles.paraOuterDiv} ${
                          inView2 ? styles.slideIn : ""
                        }`}
                      >
                        <p className={styles.paragraph10}>
                          See how we've helped our clients achieve success with
                          our expertise, dedication, and tailored solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.container3} ${styles.wContainer} ${styles.wLayoutBlockcontainer}`}
        >
          <div className={styles.divBlock67}>
            <div
              className={styles.divBlock29Loop1}
              style={{
                transform: `translate3d(0,${divScrollUp}px,0)`,
                // transformStyle: "preserve-3d",
                // willChange: "transform",
              }}
            >
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
              <div>
                <div className={styles.divBlock68}>
                  {" "}
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
            </div>
            <div
              style={{ transform: `translate3d(0,${divScrollDown}px,0)` }}
              className={styles.divBlock29Loop2}
            >
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
              <div>
                <div className={styles.divBlock68}>
                  {" "}
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
            </div>
            <div
              className={styles.divBlock29Loop3}
              style={{ transform: `translate3d(0,${divScrollUp}px,0)` }}
            >
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
            </div>
            <div
              className={styles.divBlock29Loop4}
              style={{ transform: `translate3d(0,${divScrollDown}px,0)` }}
            >
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
              <div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
                <div className={styles.divBlock68}>
                  <div className={styles.divBlock69}>
                    <img className={styles.image65} src={profilePic1}></img>
                    <h5 className={styles.heading12}>Neerthigan Sivananthan</h5>
                  </div>
                  <div>
                    <p className={styles.paragraph14}>
                      Right from the moment we started off with a good footing.
                      It has almost been six months now and I am still amazed at
                      Faraz's communication, dedication and availability.
                    </p>
                  </div>
                  <img className={styles.image78}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
