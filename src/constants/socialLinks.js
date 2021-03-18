import React from "react"
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa"

const data = [
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/maadcode/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/maadcode",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/maadcode",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
