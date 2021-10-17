import React, { useState, useEffect, useRef } from "react"
import "./css/submit.css"
import Education from "./Education.js"
import WorkParent from "./WorkParent.js"
import Resume from "./Resume"
import ReactToPrint from "react-to-print"

function Submit() {
  const componentRef = useRef()

  const [schoolArr, setSchoolArr] = useState([])
  const [outputArr, setOutputArr] = useState([])
  const [toggleEdit, setToggleEdit] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [school, setSchool] = useState("")
  const [degree, setDegree] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const appendSchool = (school, degree, startDate, endDate) => {
    setSchoolArr((prevArr) => [
      ...prevArr,
      { school: school, degree: degree, startDate: startDate, endDate: endDate }
    ])
    setSchool("")
    setDegree("")
    setStartDate("")
    setEndDate("")
  }

  useEffect(() => {
    const deleteEdu = (index) => {
      const newArr = schoolArr
      newArr.splice(index, 1)

      setSchoolArr(newArr)
      updateArray()
    }

    const updateArr = (index) => {
      const currSchool = document.getElementById("school " + index)
      const currDegree = document.getElementById("degree " + index)
      const currStartDate = document.getElementById("startDate " + index)
      const currEndDate = document.getElementById("endDate " + index)

      schoolArr[index].school = currSchool.textContent
      schoolArr[index].degree = currDegree.textContent
      schoolArr[index].startDate = currStartDate.textContent
      schoolArr[index].endDate = currEndDate.textContent
    }

    const updateText = (uniqueID) => {
      const updateBtn = document.getElementById("updateBtn " + uniqueID)

      const schoolWrapper = document.getElementById("school " + uniqueID)
      const degreeWrapper = document.getElementById("degree " + uniqueID)
      const startDateWrapper = document.getElementById("startDate " + uniqueID)
      const endDateWrapper = document.getElementById("endDate " + uniqueID)

      if (updateBtn.textContent === "Edit") {
        updateBtn.textContent = "Done"
        updateBtn.style.backgroundColor = "green"

        schoolWrapper.style.border = "1px solid blue"
        degreeWrapper.style.border = "1px solid blue"
        startDateWrapper.style.border = "1px solid blue"
        endDateWrapper.style.border = "1px solid blue"

        setToggleEdit(true)
      } else if (updateBtn.textContent === "Done") {
        updateBtn.textContent = "Edit"
        updateBtn.style.backgroundColor = "cornflowerblue"

        schoolWrapper.style.border = "1px solid black"
        degreeWrapper.style.border = "1px solid black"
        startDateWrapper.style.border = "1px solid black"
        endDateWrapper.style.border = "1px solid black"

        updateArr(uniqueID)
        setToggleEdit(false)
      }

      console.log(schoolArr)
    }

    const createEducation = (school, degree, startDate, endDate, key) => {
      return (
        <Education
          key={key}
          school={school}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          uniqueID={key}
          deleteComponent={deleteEdu}
          updateText={updateText}
          toggleEditable={toggleEdit}
        />
      )
    }

    const updateArray = () => {
      setOutputArr([])

      for (let index = 0; index < schoolArr.length; index++) {
        let element = createEducation(
          schoolArr[index].school,
          schoolArr[index].degree,
          schoolArr[index].startDate,
          schoolArr[index].endDate,
          index
        )
        setOutputArr((p) => [...p, element])
      }
    }

    updateArray()
  }, [schoolArr, toggleEdit])

  return (
    <div className="submit-info">
      <div className="personal-info">
        <div className="name-wrapper">
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="email-wrapper">
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="phone-wrapper">
          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div className="edu-wrapper">
        <div className="education-title">Education</div>

        <div className="education-info">
          <div className="info-wrapper">
            <label>School:</label>
            <input className="school-input" onChange={(e) => setSchool(e.target.value)} value={school} />
          </div>

          <div className="info-wrapper">
            <label>Degree:</label>
            <input onChange={(e) => setDegree(e.target.value)} value={degree} />
          </div>

          <div className="info-wrapper">
            <label>Start Date:</label>
            <input
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>

          <div className="info-wrapper">
            <label>End Date:</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>

          <button
            onClick={() => appendSchool(school, degree, startDate, endDate)}
          >
            + Add Education
          </button>
        </div>

        <div className="education-output">{outputArr}</div>

        <WorkParent />

        <div className="print-button">
          <div className="resume-title">Resume</div>
          <Resume refe={componentRef}/>
          <ReactToPrint
            trigger={() => <button>Print</button>}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </div>
  )
}

export default Submit
