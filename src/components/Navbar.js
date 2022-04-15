import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            onKeyPress={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")} onKeyPress={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")} onKeyPress={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")} onKeyPress={() => scrollTo("#about")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
