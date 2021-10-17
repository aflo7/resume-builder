import React from "react"
import "./css/education.css"

function Education({
  school,
  degree,
  startDate,
  endDate,
  deleteComponent,
  uniqueID,
  updateText,
  toggleEditable
}) {
  return (
    <div className="edu-component-wrapper">
      <div className="school-wrapper">
        <div className="school-text">School: </div>
        <div
          id={"school " + uniqueID}
          className="school-text-2"
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          {school}
        </div>
      </div>

      <div className="degree-wrapper">
        <div className="degree-text">Degree: </div>
        <div
          id={"degree " + uniqueID}
          className="degree-text-2"
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          {degree}
        </div>
      </div>

      <div className="start-date-wrapper">
        <div className="start-date-text">Start Date: </div>
        <div
          id={"startDate " + uniqueID}
          className="start-date-text-2"
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          {startDate}
        </div>
      </div>

      <div className="end-date-wrapper">
        <div className="end-date-text">End Date: </div>
        <div

          id={"endDate " + uniqueID}
          className="end-date-text-2"
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          {endDate}
        </div>
      </div>

      <div className="button-wrapper">
        <button className="delete" onClick={() => deleteComponent(uniqueID)}>
          Delete
        </button>

        <button
          id={"updateBtn " + uniqueID}
          className="update"
          onClick={() => updateText(uniqueID)}
          contentEditable={false}
          suppressContentEditableWarning={true}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Education
