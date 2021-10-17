import React from "react"
import "./css/resume.css"

class Resume extends React.PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { refe } = this.props
    return (
      <div ref={refe}>
        <div className="resume-wrapper">
          <div className="personal-info-resume">
            <div className="resume-name">Andres F</div>
            <div className="resume-email">ajjsjs@gmail.com</div>
            <div className="resume-phone">4408455633</div>
          </div>

          <div className="education-resume-wrapper">
            <div>CSU</div>
            <div>Comp Sci</div>
            <div>2019</div>
            <div>2020</div>
          </div>

          <div className="work-exp-resume-wrapper">
            <div className="resume-company"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
