import React, { useState, useEffect } from "react"
import WorkChild from "./WorkChild"
import "./css/work-parent.css"

function WorkParent() {
  const [workArr, setWorkArr] = useState([])
  const [outputWorkArr, setOutputWorkArr] = useState([])
  const [toggleWorkEdit, setToggleWorkEdit] = useState(false)

  const [company, setCompany] = useState("")

  const appendExperience = (company) => {
    setWorkArr((prev) => [...prev, { company: company }])

    setCompany("")
  }

  useEffect(() => {
    const deleteWork = (i) => {
      const newArr = workArr
      newArr.splice(i, 1)

      setWorkArr(newArr)
      updateMe()
    }

    const updateWorkArr = (i) => {
      const currWork = document.getElementById("company " + i)

      workArr[i].company = currWork.textContent
    }

    const updateWorkText = (uniqueID) => {
      const workUpdateBtn = document.getElementById("workUpdateBtn " + uniqueID)

      const companyWrapper = document.getElementById("company " + uniqueID)

      if (workUpdateBtn.textContent === "Edit") {
        workUpdateBtn.textContent = "Done"
        workUpdateBtn.style.backgroundColor = "green"

        companyWrapper.style.border = "1px solid blue"

        setToggleWorkEdit(true)
      } else if (workUpdateBtn.textContent === "Done") {
        workUpdateBtn.textContent = "Edit"
        workUpdateBtn.style.backgroundColor = "cornflowerblue"

        companyWrapper.style.border = "1px solid black"

        updateWorkArr(uniqueID)
        setToggleWorkEdit(false)
      }
    }

    const createExp = (company, key) => {
      return (
        <WorkChild
          key={key}
          company={company}
          uniqueID={key}
          deleteComponent={deleteWork}
          updateText={updateWorkText}
          toggleEditable={toggleWorkEdit}
        />
      )
    }

    const updateMe = () => {
      setOutputWorkArr([])

      for (let index = 0; index < workArr.length; index++) {
        let element = createExp(workArr[index].company, index)
        setOutputWorkArr((p) => [...p, element])
      }
    }

    updateMe()
  }, [workArr, toggleWorkEdit])

  return (
    <div className="work-parent-wrapper">
      <div className="work-title">Work Experience</div>
      <div>
        <div className="company-wrapper">
          <label>Company:</label>
          <input onChange={(e) => setCompany(e.target.value)} value={company} />
        </div>
      </div>

        <button className="add-work-btn" onClick={() => appendExperience(company)}>+ Add Work</button>
      

      <div>{outputWorkArr}</div>
    </div>
  )
}

export default WorkParent
