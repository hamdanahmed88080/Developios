// const linkedinLogo = require("../icons/linkedin.png");
// const instagramLogo = require("../icons/instagram.png");
// const facebookLogo = require("../icons/facebook.png");
// const twitterLogo = require("../icons/twitter.png");
// const youtubeLogo = require("../icons/youtube.png");
// const behanceLogo = require("../icons/behance.png");
// const ticktokLogo = require("../icons/tiktok.png");

import linkedinLogo from "../icons/linkedin.png";
import instagramLogo from "../icons/instagram.png";
import facebookLogo from "../icons/facebook-2.svg";
import twitterLogo from "../icons/twitter.png";
import youtubeLogo from "../icons/youtube.png";
import behanceLogo from "../icons/behance.png";
import ticktokLogo from "../icons/tiktok.png";

import servicesImageLeasabites from "../images/672c6741e01a986a52015586_leasebites.webp";
import servicesImageGuriEnterprise from "../images/672c6786b45a0a10ae7790a0_guri enterprise.webp";
import servicesImageTalkAsia from "../images/672c67b0b245d962f937266b_Talk Asia.webp";
import servicesImageSsafLogistics from "../images/672c67f0b45a0a10ae77ef57_SSAF Logistics.webp";
import serviceImageAnimation from "../images/service-1.webp";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <span class="bold">DEVEL</span>
          <span class="logo-icon">✔️</span>
          <span class="bold">OPIOS</span>
        </div>

        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>

          <li class="dropdown">
            <a href="#">
              Solutions <span class="arrow">▼</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Solution 1</a>
              </li>
              <li>
                <a href="#">Solution 2</a>
              </li>
              <li>
                <a href="#">Solution 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div class="cta-button">
          <a href="#">FREE CRO AUDIT</a>
        </div>
      </nav>
      <div className="hero-div">
        <div className="client-reviews-div"></div>
        <div className="hero-main-heading">
          TAILORED <span>WEB SOLUTIONS</span> TO TURN CLICKS INTO CONVERSIONS
        </div>
        <div className="hero-subheading">
          Scale your business with our expert-vetted team specializing in web
          design, development, e-commerce and CRO, dedicated to driving growth
          and maximizing engagement.
        </div>
        <div className="hero-buttons">
          <button id="hero-button-1">
            <p>Book a 15 min call</p>
          </button>
          <button id="hero-button-2">
            <p>Life at Developios</p>
          </button>
        </div>
        <div className="hero-freelance-links">
          <div>
            <div id="hero-freelance-link-1 " className="heroLinks">
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91c66430166d344553_Upwork.svg"></img>
            </div>
            <div id="hero-freelance-link-2 " className="heroLinks">
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd91f6c166ebb6fced10_fiverr.svg"></img>
            </div>
            <div id="hero-freelance-link-3 " className="heroLinks">
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/6731dd9268c9536515ba8363_clutch.svg"></img>
            </div>
            <div id="hero-freelance-link-4 " className="heroLinks">
              <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67611057dd836b3d80441843_Verfifed%20Agency%20Round%20v1.webp"></img>
            </div>
          </div>
        </div>
        <div class="hero-social-sidebar">
          <a href="#">
            <img
              src={linkedinLogo}
              id="hero-LinkedIn"
              className="hero-social-icons"
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-instagram"
              src={instagramLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-facebook"
              alt="icon"
              src={facebookLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-twitter"
              src={twitterLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-youtube"
              src={youtubeLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-behance"
              src={behanceLogo}
            ></img>
          </a>
          <a href="#">
            <img
              className="hero-social-icons"
              id="hero-ticktok"
              src={ticktokLogo}
            ></img>
          </a>
        </div>
        <div className="services">
          <ul>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="#">Logo</a>
            </li>
            <li>
              <a href="#">UX UI</a>
            </li>
            <li>
              <a href="#">CRO</a>
            </li>
          </ul>
        </div>
        <div
          className="services-banner"
          style={
            {
              // transform: "translate3d(200px,0,0)",
            }
          }
        >
          <ul>
            <li>
              <img src={servicesImageLeasabites}></img>
            </li>
            <li>
              <img src={servicesImageGuriEnterprise}></img>
            </li>
            <li>
              <img src={servicesImageSsafLogistics}></img>
            </li>
            <li>
              <img src={servicesImageTalkAsia}></img>
            </li>
          </ul>
        </div>
        <div className="services-hp">
          <ul>
            <li className="services-hp-heading">
              <h2>SERVICES</h2>
            </li>
            <li className="services-hp-para">
              <p>
                From initial design to ongoing management, our team delivers
                tailored solutions that enhance user experience, boost
                conversions, and drive growth. Explore our core offerings below
                and see how we can help you.
              </p>
            </li>
          </ul>
        </div>
        <div className="services-section">
          <div className="service-div" id="service-1">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-2">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-3">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-4">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-5">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-6">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          {/* <div className="service-div" id="service-7">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-8">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div>
          <div className="service-div" id="service-9">
            <h2>UX CRO Edit</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.0
            </p>
            <button></button>
            <div className="button-text">Learn More</div>
          </div> */}
        </div>
        <div className="why-choose-us">
          <div className="why-choose-us-container">
            <div className="why-choose-us-hero">
              <h2>Why Choose Us</h2>
              <p>
                With established SOPs for seamless operations, we ensure
                efficiancy, quality and consistent result in every project.
                Trust our proven process to deliver exceptional results.
              </p>
            </div>
            <div className="why-choose-us-reasons">
              <div className="reasons" id="reason-1">
                <div className=""></div>
                <h3>Seamless Communication</h3>
                <p>
                  Stay Connected with our team on Slack for ongoing
                  collaboration and updates.
                </p>
              </div>
              <div className="reasons" id="reason-2">
                <div></div>
                <h3>Timely Project Updates</h3>
                <p>
                  Reguler progress updates and stay informed at every stage of
                  your project.
                </p>
              </div>
              <div className="reasons" id="reason-3">
                <div></div>
                <h3>Satisfaction Guarantee</h3>
                <p>
                  If our work doesn't meet your expectations, we'll provide
                  refund-no questions asked!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="process-div">
          <div className="process-innerDiv">
            <div className="process-hero">
              <h2>Simple 3 Steps Process we Follow</h2>
              <div className="process-hero-para">
                Our three-step process ensures you stay in the loop from day
                one, while we tackle each phase with precision—turning your
                vision into a final product that propels your brand forward.
              </div>
            </div>
            <div className="process-content">
              <div className="process-content-div" id="process-content-div-1">
                <div className="img">
                  <img src={serviceImageAnimation}></img>
                </div>
                <div className="number-animation"></div>
                <div className="content">
                  <h2>Onboarding</h2>
                  <p>
                    We kick off with a comprehensive onboarding. This includes
                    setting up a dedicated Slack workspace, sharing a detailed
                    project plan, and aligning on goals to ensure we’re fully
                    prepared to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section-home-process">
          <div className="page-padding">
            <div className="container-medium">
              <div className="page-vertical page-xhuge">
                <div className="margin-bottom margin-xhuge">
                  <div className="max-width-large align-center text-align-center">
                    <div className="div-block-124">
                      <h2>
                        Simple 3 <span>Steps</span>
                        <br></br>Process we Follow
                      </h2>
                    </div>
                    <p className="paragraph-10">
                      "Our three-step process ensures you stay in the loop from
                      day one, while we tackle each phase with precision—turning
                      your vision into a final product that propels your brand
                      forward."
                    </p>
                  </div>
                </div>
                <div className="process_container">
                  <div className="process_wrapper">
                    <div className="process_step">
                      <div className="process_item-container process_item-container1111111">
                        <div className="process_item-image_container">
                          <img
                            loading="lazy"
                            className="image-63"
                            src={serviceImageAnimation}
                          ></img>
                          <div className="div-block-61"></div>
                          <div className="div-block-66"></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="process_item-indicator">
                        <div class="text-style-callout text-weight-medium">
                          1
                        </div>
                      </div>
                      <div className="process_item-description">
                        <div class="margin-bottom margin-small">
                          <h3 class="heading-7">Onboarding</h3>
                        </div>
                        <p class="text-color-secondary text-size-medium">
                          We kick off with a comprehensive onboarding. This
                          includes setting up a dedicated Slack workspace,
                          sharing a detailed project plan, and aligning on goals
                          to ensure we’re fully prepared to meet your needs.
                        </p>
                      </div>
                    </div>
                    <div className="process_step">
                      <div className="process_item-description">
                        <div class="margin-bottom margin-small">
                          <h3 class="heading-7">Design & Development</h3>
                        </div>
                        <p class="text-color-secondary text-size-medium">
                          Our team transforms your ideas into reality, focusing
                          on both aesthetics and functionality. We create a
                          user-friendly design and develop it after getting
                          approval.
                        </p>
                      </div>
                      <div className="process_item-indicator">
                        <div class="text-style-callout text-weight-medium">
                          2
                        </div>
                      </div>
                      <div className="process_item-container process_item-container1111111">
                        <div className="process_item-image_container">
                          <img
                            loading="lazy"
                            className="image-63"
                            src={serviceImageAnimation}
                          ></img>
                          <div className="div-block-61"></div>
                          <div className="div-block-66"></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="process_step">
                      <div className="process_item-container process_item-container1111111">
                        <div className="process_item-image_container">
                          <img
                            loading="lazy"
                            className="image-63"
                            src={serviceImageAnimation}
                          ></img>
                          <div className="div-block-61"></div>
                          <div className="div-block-66"></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="process_item-indicator">
                        <div class="text-style-callout text-weight-medium">
                          3
                        </div>
                      </div>
                      <div className="process_item-description">
                        <div class="margin-bottom margin-small">
                          <h3 class="heading-7">Test & Go live</h3>
                        </div>
                        <p class="text-color-secondary text-size-medium">
                          Before launch, we carefully test every aspect of the
                          project to guarantee optimal performance. Once
                          everything is perfected, we go live—delivering a
                          polished final product ready to make an impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="package-home-process">
          <div className="page-padding">
            <div className="container-medium">
              <div className="page-vertical page-xhuge">
                <div className="margin-bottom margin-xhuge">
                  <div className="max-width-large align-center text-align-center">
                    <div className="div-block-124">
                      <h2>
                        Choose a <span>Package</span>
                        <br></br>That suites you
                      </h2>
                    </div>
                    <p className="paragraph-10">
                      Whether you're just starting or scaling your business, we
                      have the right plan for you. Select a pricing plan that
                      fits your needs and get access to top-notch digital
                      services.
                    </p>
                  </div>
                </div>
                <div className="process_container">
                  <div className="process_wrapper">
                    <div className="packages">
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                      <div className="individual-package">
                        <div className="heading">
                          <h2>CX+CRO Audit</h2>
                          <p>
                            Fix critical areas of your website to improve
                            conversions
                          </p>
                        </div>
                        <div className="price">
                          <p>$1500</p>
                        </div>
                        <div className="offers">
                          <div className="offer-individual">
                            <div></div>
                            <p>X3 Critical Redesigned sections</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>5+ Page Audit Report</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Figma Source File</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Loom Walkthrough</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Desktop + Mobile Design</p>
                          </div>
                          <div className="offer-individual">
                            <div></div>
                            <p>Onpage SEO and Copy Review</p>
                          </div>
                        </div>
                        <div className="get-started">
                          <button>Get Started</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="section-home-process">
          <div className="page-padding">
            <div className="container-medium">
              <div className="page-vertical page-xhuge">
                <div className="margin-bottom margin-xhuge">
                  <div className="max-width-large align-center text-align-center">
                    <div className="div-block-124">
                      <h2>
                        What Our <span>Clients</span>
                        <br></br>Are Saying
                      </h2>
                    </div>
                    <p className="paragraph-10">
                      See how we've helped our clients achieve success with our
                      expertise, dedication, and tailored solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="faq">
          <div className="container-div">
            <div className="faq-mamin-div">
              <div className="faq-inner-1">
                <div className="div-block-124">
                  <h2 id="faq-heading">
                    Frequently Asked
                    <br></br>
                    <span>Questions</span>
                  </h2>
                </div>
                <p className="paragraph-10" id="faq-paragraph-heading">
                  Got questions? We've got answers! Explore our FAQs to find
                  solutions to common queries. contact us at<br></br>
                  sales@developios.com if you need to ask something specific
                  about your project.
                </p>
              </div>
              <div className="faq-inner-3">
                <div className="lynx-block-faq">
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        How does the process look like?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        What’s included in your UX CRO Audit?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        How long does it take to build a custom website or SaaS
                        platform?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        Do you offer support for eCommerce development after
                        launch?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        What platforms do you work with for web development?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                  <div className="lynx-accordion-item">
                    <div className="lynx-accordion-header">
                      <h3 className="lynx-heading-accordion">
                        How many revisions do I get?
                      </h3>
                    </div>
                    <div className="lynx-accordion-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Section */}
        <div className="section-9">
          <div className="w-layout-blockcontainer container-4 w-container">
            <div className="div-block-75">
              <div className="div-block-76">
                <h2>Refer and Earn Commision</h2>
                <p>
                  Earn up to 10% commission on every successful referral. Help
                  businesses grow with our services and get rewarded for it!
                </p>
                <a className="link-block-2 w-inline-block">
                  <p>Contact Us</p>
                </a>
              </div>
              <div className="div-block-79">
                <div className="div-block-86"></div>
                <div className="div-block-80">
                  <img
                    className="image-71 _71-2"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-3"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-4"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-5"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-6"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-7"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-8"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                  <img
                    className="image-71 _71-9"
                    src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670770f7582f42c3fcef8e42_one-hundred-dollar-bill-free-png%20(1)%20-%20Copy.webp"
                  ></img>
                </div>
                <div className="div-block-89">
                  <div className="div-block-90">
                    <div className="div-block-91">
                      <img
                        className=""
                        src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/675abaa3d0738a7f6b9b34a9_mobile_mockup.webp"
                      ></img>
                      <img
                        src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67079bddd055c5e98db19c76_1.svg"
                        className="image-75"
                      ></img>
                      <img
                        src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67079bddd055c5e98db19c76_1.svg"
                        className="image-75 _75-2"
                      ></img>
                      <img
                        src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67079bddd055c5e98db19c76_1.svg"
                        className="image-75 _75-3"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67076c7d079f7e9ef21c7f18_leaves%20(3).svg"
                className="image-66"
              ></img>
            </div>
          </div>
        </div>

        {/* New Section  */}

        <div className="padding-section">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="logo-main-div">
              <div className="div-block-112">
                <a className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/670796018369cc822f08c1b9_logo%20(3).svg"></img>
                </a>
              </div>
              <div className="main-link-div">
                <div className="div-block-106">
                  <a className="footer-link">Home</a>
                  <a className="footer-link">portfolio</a>
                  <a className="footer-link">Services</a>
                </div>
                <div className="div-block-107">
                  <a className="footer-link">Testimonials</a>
                  <a className="footer-link">Pricing</a>
                  <a className="footer-link">Careers</a>
                </div>
              </div>
            </div>
            <div>
              <div className="div-block-84">
                <a className="footer-link">sales@developios.com</a>
                <a className="footer-link email-ft coll">+923215833822</a>
              </div>
              <div className="div-block-83">
                <div className="div-block-118">
                  <a className="link-block-25 w-inline-block">
                    <img
                      className="image-98"
                      src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/67333631b95147a1fced2337_fiverr-2%201.svg"
                    ></img>
                  </a>
                  <a className="link-block-26 w-inline-block">
                    <img
                      className="image-99"
                      src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336734cd2ee3abb52c391_upwork%201.svg"
                    ></img>
                  </a>
                  <a className="link-block-27 w-inline-block">
                    <img
                      className="image-100"
                      src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336912d534dd54d3a2292_Frame%202121449735.svg"
                    ></img>
                  </a>
                  <a className="link-block-28 w-inline-block">
                    <img
                      className="image-101"
                      src="https://cdn.prod.website-files.com/65c7568517fcb5339e36e278/673336ae394ede6c399ad4bd_wise-1%201.svg"
                    ></img>
                  </a>
                </div>
                <div className="div-block-85">
                  <p className="paragraph-20">© 2024 Copyright By </p>
                  <a className="link-2">
                    <span className="text-span-2">Developios</span>
                  </a>
                </div>
                <div className="div-block-92">
                  <a className="link-block-3 w-inline-block">
                    <p className="heading-21"></p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
