import React, { Component } from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3,
  faGithub,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About" name="About">
        <div className="AboutTitle">
          {" "}
          <p>
            {" "}
            <Wave
              effect="color"
              effectDirection="up"
              effectDuration={1}
              effectChange={"#80ed99"}
              text="    Methodology    "
            />{" "}
          </p>{" "}
        </div>
        <Fade bottom cascade>
          <div className="AboutCard">
            <p>
              {" "}
              I am a Software Developer with years in technology and design. My
              approach is framed by a background in the formal analysis of art
              during his training at the Fashion Institute of Technology and
              years in agile web development. These attributes come together to
              make a creative & experienced frontend software engineer with a
              robust attention to detail.
            </p>
            <a
              className="logo"
              href="https://github.com/RamseyJLewis"
              target="blank"
            >
              {/* {<FontAwesomeIcon icon={faJs} />} */}
           
             
                  <div className="container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                  </div>
            
         
         
           
                  <div className="container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                  </div>
              
           
 
              
                  <div className="container">
                    <span className="react-logo">
                      <span className="nucleo"></span>
                    </span>
                  </div>
   

              {/* {<FontAwesomeIcon icon={faCss3} />} */}
            </a>
            <p>
              {" "}
              A few technologies I've been working with recently are below:{" "}
            </p>
            <p>
              Front-End: JavaScript (ES6), TypeScript, React, Next, JSX, HTML5,
              CSS3, Bootstrap, Material UI, SCSS
            </p>
            <p>
              Back-End: Node.js, Express, AWS (Amplify, RDS, S3, EC2, Cognito),
              PostgreSQL, RESTful API, JWT
            </p>
            <p>
              Tools: Git, VS Code, DevOps, Trello, MSFT Teams, MSFT OneNote,
              Slack, Google Analytics, Mixpanel{" "}
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}
export default About;
