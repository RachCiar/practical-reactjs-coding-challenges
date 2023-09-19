import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'

import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyser</span>
          <ul className="social-links">
            <li>
              <a href="https://github.com/RachCiar/" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rae_ciarlante/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rachelciarlante/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
