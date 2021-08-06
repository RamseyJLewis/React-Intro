import Logo from "../Logo/Logo";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileDownload } from "@fortawesome/free-solid-svg-icons";
// import React, { useLayoutEffect, useState } from 'react';
import resume from "../../Assets/RamseyJLewisResume.pdf";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text"

function NavBar() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const mobileNav = () => setClick(!click);
  return (
    <>
      <div className="NavBar">
      <Fade >
        <div className='navLogo'><Logo /></div>
        </Fade>
        <Fade right>
          <div className="NavBarText">
            <Link className="navlink" to="About" smooth={true}>
              {" "}
              About{" "}
            </Link>
            <Link className="navlink" to="Portfolio" smooth={true}>
              {" "}
              Portfolio{" "}
            </Link>
            <Link className="navlink" to="LifeExperience" smooth={true}>
              {" "}
              Life-Experience{" "}
            </Link>
            <Link className="navlink" to="Contact" smooth={true}>
              {" "}
              Contact{" "}
            </Link>
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="ResumeNav"
              style={{ width: "100px" }}
              href={resume}
              download
            >
              {hover ? <FontAwesomeIcon icon={faFileDownload} /> : 
              <Wave
                effect="jump"                  
                delay={5}
                effectChange={1}         
                text="Resume"
              />
              // <Wave text="Resume" effect="jump " effectChange={2.2} />
              }
            </a>
          </div>
        </Fade>
      </div>

      <div className="mobileButton">
        {" "}
        <FontAwesomeIcon
          className="Bars"
          icon={faBars}
          onClick={mobileNav}
        />{" "}
      </div>
      {click ? (
        <div className="NavBarMobile">
          <div className="NavBarTextMobile">
            <Link className="navlinkMobile" to="Home" smooth={true}>
              {" "}
              Home{" "}
            </Link>
            <Link className="navlinkMobile" to="About" smooth={true}>
              {" "}
              About{" "}
            </Link>
            <Link className="navlinkMobile" to="Portfolio" smooth={true}>
              {" "}
              Portfolio{" "}
            </Link>
            <Link className="navlinkMobile" to="LifeExperience" smooth={true}>
              {" "}
              Life-Experience{" "}
            </Link>
            <Link className="navlinkMobile" to="Contact" smooth={true}>
              {" "}
              Contact{" "}
            </Link>
            <div className="Resume">
              <p className="navlinkMobile">Resume</p>{" "}
              <a
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="ResumeNavMobile"
                style={{}}
                href={resume}
                download
              >
                {
                  <FontAwesomeIcon className="resumeIcon" icon={faFileDownload}>
                    {" "}
                    Resume{" "}
                  </FontAwesomeIcon>
                }
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}
export default NavBar;
