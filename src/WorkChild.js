import React from "react"
import "./css/work-child.css"

function WorkChild({
  company,
  deleteComponent,
  updateText,
  uniqueID,
  toggleEditable
}) {
  return (
    <div className="work-component-wrapper">
      <div className="company-sub-wrapper">
        <div className="company-child-text">Company: </div>
        <div
          id={"company " + uniqueID}
          className="company-text-2"
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          {company}
        </div>
      </div>

      <div className="button-wrapper">
        <button className="delete" onClick={() => deleteComponent(uniqueID)}>
          Delete
        </button>

        <button
          id={"workUpdateBtn " + uniqueID}
          className="update"
          onClick={() => updateText(uniqueID)}
          contentEditable={toggleEditable}
          suppressContentEditableWarning={true}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default WorkChild
