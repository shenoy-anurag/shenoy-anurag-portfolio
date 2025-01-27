import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
// import downloadIcon from "../images/download-64.png"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" width={360} height={360}></img>
          </div>

          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <h2>I'm a Software Developer and Machine Learning Engineer with 5 years of work experience in the industry.</h2>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <br></br>
            <h3>Resume</h3>
            <a href="https://drive.google.com/file/d/1HtFdhggcS9F3bq5NELV86byMaVttxGCm/view?usp=sharing">Download Resume (PDF)</a>
            &nbsp;&nbsp;
            <br></br>
            <br></br>
            <a href="https://docs.google.com/document/d/1VDLu9n3x4WVKh1yYnaCXWADEULtoze00/edit?usp=sharing&ouid=107150247661293569256&rtpof=true&sd=true">Download Resume (Word)</a>
            <br></br>
            <br></br>
            {/* <h3>Phone Number</h3>
            <a href={"tel:" + data.contactPhoneNumber}>{data.contactPhoneNumber}</a> */}
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
