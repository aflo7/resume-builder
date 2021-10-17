import React from "react"
import ReactDOM from "react-dom"
import "./css/index.css"
import Header from './Header.js'
import Submit from "./Submit.js"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Submit />
  </React.StrictMode>,
  document.getElementById("root")
)
